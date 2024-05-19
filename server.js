const express = require('express');
const dScrape = require('d-scrape');

const app = express();
const port = process.env.PORT || 3000; // Menggunakan port yang disediakan oleh lingkungan atau port 3000 secara lokal

// Endpoint API untuk mendapatkan cerpen acak
app.get('/api/randomcerpen', async (req, res) => {
    try {
        const cerpen = await dScrape.random.randomCerpen();
        res.json(cerpen);
    } catch (error) {
        res.status(500).send('Error fetching random cerpen');
    }
});

// Tidak perlu menggunakan express.static untuk file statis

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});