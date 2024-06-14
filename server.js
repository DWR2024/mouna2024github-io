const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unc_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

app.post('/reserverSalle', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO reservations_salles (nom, prenom, matricule, fonction, date, heure, heureFin, typeSalle, nomSalle) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [data.nom, data.prenom, data.matricule, data.fonction, data.date, data.heure, data.heureFin, data.typeSalle, data.nomSalle];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Réservation de salle réussie');
    });
});

app.post('/reserverParking', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO reservations_parkings (nom, prenom, matricule, fonction, date, heure, heureFin) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [data.nom, data.prenom, data.matricule, data.fonction, data.date, data.heure, data.heureFin];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Réservation de parking réussie');
    });
});

app.post('/programmerMatch', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO reservations_terrains (nom, prenom, matricule, fonction, dateMatch, heureMatch, heureFin, equipeAdverse) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [data.nom, data.prenom, data.matricule, data.fonction, data.dateMatch, data.heureMatch, data.heureFin, data.equipeAdverse];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Programmation de match réussie');
    });
});

app.post('/demanderBureau', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO reservations_bureaux (nom, prenom, fonction) 
                 VALUES (?, ?, ?)`;
    const values = [data.nom, data.prenom, data.fonction];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Demande de bureau réussie');
    });
});

app.post('/reserverRepas', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO reservations_menus (nom, prenom, matricule, fonction, dateRepas, heureRepas, heureFin, menu) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [data.nom, data.prenom, data.matricule, data.fonction, data.dateRepas, data.heureRepas, data.heureFin, data.menu];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('Réservation de repas réussie');
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

