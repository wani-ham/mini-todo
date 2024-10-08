const { Todo }  = require('../models');
const { Op } = require('sequelize');

exports.readTodos = async (req, res) => {
    try {
        const user_num = 1;  // temp user_num
        let todos = await Todo.findAll({
            where: {
                user_num
            }
        });
        res.send(todos);
    } catch (err) {
        res.send(err);
    }
}

exports.createTodo = async (req, res) => {
    console.log('req.body >>> ', req.body);
    try {
        let newTodo = await Todo.create({
            user_num,
            title: req.body.title,
            done: false
        });
        res.send(newTodo);
    } catch (err) {
        res.send(err);
    }
}

exports.updateTodo = async (req, res) => {
    console.log(req.body);
    try {
        let [idUpdated] = await Todo.update(
            {
                user_num,
                title: req.body.title,
                done: req.body.done,
            }, {
                where: {
                    id: { [Op.eq]: req.params.todoId },
                }
            }
        );

        // 수정 실패
        if (idUpdated === 0) {
            return res.send(false);
            // 업데이트 된 항목이 없으면 'false'를 반환
        }
        // 수정 성공
        res.send(true);
    } catch (err) {
        res.send(err);
    }
}

exports.deleteTodo = async (req, res) => {
    try {
      let isDeleted = await Todo.destroy({
        where: {
          id: { [Op.eq]: req.params.todoId },
          user_num
        },
      });
      // 삭제 실패
      if (!isDeleted) {
        return res.send(false);
      }
      // 삭제 성공
      res.send(true);
    } catch (error) {
      res.send(error);
    }
  };