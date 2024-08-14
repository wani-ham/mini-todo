const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.get('/', controller.readTodos);
router.post('/todo/:title', controller.createTodo);
router.patch('/todo', controller.updateTodo);

module.exports = router;