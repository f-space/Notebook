const express = require('express');

const app = express();
app.use(express.static("dst"));
app.listen(8080);