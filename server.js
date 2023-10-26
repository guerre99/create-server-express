const express = require('express')
const path = require('path')

const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css/styles.css'))
})

app.get('/html/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/about.html'))
})

app.get('/html/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/contact.html'))
})

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'html/404.html'))
})

app.listen(4001, () => console.log('Server on...'))
