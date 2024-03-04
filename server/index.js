require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();
const port = process.env.port || 4000;
const distPath = path.resolve(__dirname, '..', 'build');

// app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  })
})
app.listen(port, () => {
  console.log(`${port}`)
})