const Users = (Sequelize, DataTypes) => {
    const model = Sequelize.define('Users',
        {
            user_num: {
                type:DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement :true,
            },
            user_id: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            user_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            user_pw: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        // param3: 모델 옵션 정의
        {
            freezeTableName: true, // 테이블 명 고정
            timestamps: false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
        }
    );
    return model;
}

module.exports = Users;