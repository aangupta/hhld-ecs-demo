const express = require('express');
const app = express();
const port = 3000;


//define route
app.get('/', (req, res) => {
    res.send('Congratulations HHLD Folks - we are in ECS Demo');
});

app.get('/health', (req, res) => {
    res.status(200).send('ECS Demo is healthy');
});

app.listen(port, () => {
    console.log(`Server is lsitening at http://localhost:${port}`);
});