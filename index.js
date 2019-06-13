const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('./fetch');

// init server
const app = express();
app.use(cors());

// default api route
app.get('/api', (req, res) => {
  res.json({
    message: 'Default Route for Darksky Api!'
  })
})

// route for weather fetching
app.get('/api/:lat/:lng/:time', (req, res) => {
  fetch.getWeather(req.params.lat, req.params.lng, req.params.time)
    .then(weather => {
      res.json(weather.data)
    })
})

// define port on which the back-end server runs
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Anything that doesn't match the above, send back index.html
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});

