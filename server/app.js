const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();


// Enable CORS for all routes
app.use(cors());

app.use('/lipsum', createProxyMiddleware({ target: 'https://www.lipsum.com/', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
