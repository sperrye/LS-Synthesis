// 'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let nextClipId = 2;
function getNextId() {
  return (nextClipId++).toString();
}

const clips = [];

app.get('/clips', (req, res) => {
  res.send(clips.map(clip => {
    return { id: clip.id, name: clip.name };
  }));
});

app.get('/clips/:id', (req, res) => {
  const clip = clips.find(clip => clip.id === req.params.id) || null;
  res.send(clip);
});

app.post('/clips', (req, res) => {
  const newClip = Object.assign({}, req.body, {
    id: getNextId()
  });

  clips.push(newClip);
  res.send(newClip);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
