const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const sqlite3 = require('sqlite3').verbose();

const app = express()
app.use(cors())
app.use(json())
const port = 5000

// let db = new sqlite3.Database('db');

let db = new sqlite3.Database('db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the test database.');
});

db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY , title VARCHAR(50), des VARCHAR(1000))');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getnote', (req, res) => {
    db.all("select * from notes", [], (err, rows) => {
        if (err) 
          throw err;
        else
            res.send(rows)
    });
})

app.post('/putnote', (req, res) => {
    const { title , des } = req.body
    db.run( 'INSERT INTO notes(title,des) VALUES (?,?)' , title, des , (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send('Success')
      }
    })
})

app.delete('/deletenote/:id', (req, res) => {
    db.run('DELETE FROM notes WHERE id=(?)',[req.params.id], (err,rows) => {
        if(err){
            res.send(err)
        }
        else{
            res.send('Success')
        }

    })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
