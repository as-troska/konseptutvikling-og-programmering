const express = require('express');
const path = require('path');
const db = require("better-sqlite3")("retting.db");
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));








app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/saveComments", (req, res) => {
    const assessement = req.body

    console.log(assessement)
    
    
    const stmt = db.prepare("INSERT INTO assessment (pupil, markup, stories, concepts, cdapComments, diversity, texts, learning, digital, terminology, expression, grammar, read, sources, englishComments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)").run(assessement.pupil, assessement.markup, assessement.stories, assessement.concepts, assessement.cdapComments, assessement.diversity, assessement.texts, assessement.learning, assessement.digital, assessement.terminology, assessement.expression, assessement.grammar, assessement.read, assessement.sources, assessement.englishComments)
    
    res.redirect("back");
});

app.listen(3000, () => {
    console.log('Serveren kjører på port 3000');
});