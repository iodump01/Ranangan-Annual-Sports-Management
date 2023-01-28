import Sequelize from "sequelize";
import sequelize from "../database.js";

const Participant = sequelize.define("participant", {
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
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobileNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

export default Participant;