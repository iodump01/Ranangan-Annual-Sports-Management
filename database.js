import Sequelize from "sequelize";

const sequelize = new Sequelize("ranangan", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

export default sequelize;