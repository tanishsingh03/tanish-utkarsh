const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sum', (req, res) => {
  let { a, b } = req.body;


  res.json({ 
    success: true,
    result: a + b 
  });


  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;