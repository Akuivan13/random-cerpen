document.getElementById('fetchButton').addEventListener('click', fetchCerpen);


async function fetchCerpen() {
    try {
        const response = await fetch('/randomcerpen');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        document.getElementById('judul').textContent = data.judul;
        document.getElementById('penulis').textContent = `Penulis: ${data.penulis}`;
        document.getElementById('sumber').innerHTML = `Sumber: <a href="${data.sumber}" target="_blank">${data.sumber}</a>`;
        
        // Split cerita into paragraphs and add line breaks
        const paragraphs = data.cerita.split('\n');
        const ceritaElement = document.getElementById('cerita');
        ceritaElement.innerHTML = ''; // Clear previous content
        paragraphs.forEach((paragraph, index) => {
            ceritaElement.innerHTML += paragraph;
            // Add line break if it's not the last paragraph
            if (index < paragraphs.length - 1) {
                ceritaElement.innerHTML += '<br><br>';
            }
        });
    } catch (error) {
        console.error('Error fetching cerpen:', error);
    }
}