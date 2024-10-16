const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/register", (req, res) => {
    const data = req.body

    fs.readFile("data.json", "utf8", (err, fileData) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error reading data file" });
        }
        
        let jsonData = [];
        if (fileData) {
            jsonData = JSON.parse(fileData);
        }

        jsonData.push(data);

        fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Error saving data" });
            }
            res.status(200).json({ message: "Data saved successfully!" });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
