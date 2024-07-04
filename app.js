const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hi there  || Farruh Zoirov');
});

// Server is running here
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
