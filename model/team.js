import Sequelize from "sequelize";
import sequelize from "../database.js";

const Team = sequelize.define("team", {
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
    captain: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vicecaptain: {
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
    // participants: {
    //     type: Sequelize.ARRAY,
    //     allowNull: false
    // },
});

export default Team;