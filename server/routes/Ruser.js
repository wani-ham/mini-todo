const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');


router.post('/register', controller.postUser);
router.post('/login', controller.postLogin);
router.delete('/mypage/delete', controller.deleteUser);
// router.patch('/todo', controller.updateTodo);

module.exports = router;