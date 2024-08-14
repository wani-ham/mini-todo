'use strict';
// 잠재적인 오류를 방지하고 더 안전한 코드를 작성

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

const TodoModel = require('./Todo')(sequelize, Sequelize);
const UsersModel = require('./Users')(sequelize, Sequelize);

async function syncModels() {
  try {
    let flag = false;
    // UsersModel 테이블 먼저 생성
    await UsersModel.sync({ force: flag });
    console.log("*** Users table created");

    // 그 다음 RecipesModel 테이블 생성
    await TodoModel.sync({ force: flag });
    console.log("*** Todo table created");
    console.log("All tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

syncModels();

UsersModel.hasMany(TodoModel, {
  // Todo 테이블에서 'user_num' fk 생성
  // user 테이블에서 참조될 키는 'user_num'
  foreignKey: "user_num",
  sourceKey: "user_num",
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
TodoModel.belongsTo(UsersModel, {
  foreignKey: "user_num",
  targetKey: "user_num",
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Todo = TodoModel;
db.Users = UsersModel;


module.exports = db;
