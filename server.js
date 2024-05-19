const express = require('express');
const dScrape = require('d-scrape');

const app = express();
const port = 3000;

app.get('/randomcerpen', async (req, res) => {
    try {
        const cerpen = await dScrape.random.randomCerpen();
        res.json(cerpen);
    } catch (error) {
        res.status(500).send('Error fetching random cerpen');
    }
});

app.use(express.static('random-cerpen'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
