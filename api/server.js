const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors());
app.use(express.json());

require('./src/router')(app);

app.listen(3000, () => {
    console.log('Serviço FIPE online na porta 3000')
});