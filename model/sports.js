import Sequelize from "sequelize";
import sequelize from "../database.js";

const Sports = sequelize.define("sports", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numOfPlayers: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    teacherCoordName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    teacherCoordNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studentCoordName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studentCoordNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    group: {
        type: Sequelize.STRING,
        allowNull: false
    },
    venue: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
});

export default Sports;