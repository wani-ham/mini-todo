const express = require('express');
const app = express();
const router = require('./routes/Rtodo.js');
const PORT = 8080;
const { sequelize } = require('./models');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);


app.get('*', (req, res) => {
    res.render('404');
})
app.listen(PORT, () => {
            console.log('Database connected!');
            console.log(`Server running in PORT: ${PORT}`);
});

