const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 9001; // Use environment variable or default to port 9001

// Specify the path to your JSON file
const filePath = 'tariffs.json';

app.get('/', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            res.status(500).send('Internal server error');
            return;
        }

        try {
            const jsonData = JSON.parse(data); // Parse the JSON data
            res.json(jsonData); // Send the JSON data as the response
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Internal server error');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
