'use strict';
/*const fs = require('fs');
const ejs = require('ejs');*/
const path = require('path');
const mysql = require('mysql');
const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  port: '3306',
  database: 'testmysql'
};
const connection = mysql.createConnection(dbconfig);

exports.route = function(app, rootPath) {
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(rootPath, 'index.html'));
    res.status(200).send('Hello World!');
  })
  app.get('/list', (req, res) => {
    console.log("list called");
    connection.query('SELECT idx,title,hit_cnt,crea_dtm FROM tb_board', function(err, rows) {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
      res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
      res.json(rows);
    });
  })

  app.get('/text', (req, res) => {
    res.status(200).send('TEXT');
  })

  app.get('/info', (req, res) => {
    const result = {
      'Company Name': 'tmaxSoft',
      'Team Name': 'pas1'
    };
    res.status(200).json(result);
  })
  app.get('/title', (req, res) => {
    //const connection = mysql.createConnection(dbconfig);
    connection.query('SELECT TITLE FROM tb_board WHERE IDX = 1', function(err, rows) {
      if (err) throw err;
      res.send(rows[0]);
      //connection.end();
    });
  })

  app.get('/select', (req, res) => {
    //const connection = mysql.createConnection(dbconfig);
    let query = 'SELECT TITLE FROM tb_board WHERE IDX = ?';

    connection.query(query, [req.query.IDX], function(err, rows) {
      if (err) throw err;
      res.send(rows[0]);
      //  connection.end();
    });
  })

  app.post('/insert', (req, res) => {
    //  const connection = mysql.createConnection(dbconfig);
    let body = req.body;
    let query = 'INSERT INTO TB_BOARD (TITLE, CONTENTS, HIT_CNT, CREA_ID) VALUES (?,?,?,?)';
    connection.query(query, [body.title, body.contents, 0, body.crea_id], function(err, rows) {
      if (err) throw err;
      let affectedRows = rows.affectedRows;
      res.status(200);
      res.json(affectedRows);
      //  connection.end();
    });
  })
}