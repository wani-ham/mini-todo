// Todo: 테이블 구조 정의

const Todo  = function (Sequelize, DataTypes) {
    // Sequelize: model/index.js에서의 sequelize
    // DataTypes: model/index.js에서의 Sequelize
    const model = Sequelize.define(
        'todo',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_num: {
                type:DataTypes.INTEGER,
                allowNull:false,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            }
        },
        {
            tableName: 'todo',
            freezeTableName: true,
            timestamps: false,
        },

    );
    return model;
};

module.exports = Todo;
