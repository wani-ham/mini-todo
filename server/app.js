const express = require('express');
const app = express();
const todoRouter = require('./routes/Rtodo.js');
const userRouter = require('./routes/Ruser.js');
const PORT = 8080;
const { sequelize } = require('./models');
const cors = require('cors');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.use('/api', userRouter);

// app.use('/', router);


app.get('*', (req, res) => {
    res.render('404');
})
app.listen(PORT, () => {
            console.log('Database connected!');
            console.log(`Server running in PORT: ${PORT}`);
});

