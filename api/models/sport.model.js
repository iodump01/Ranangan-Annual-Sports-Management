module.exports = (sequelize, Sequelize) => {
    const Sport = sequelize.define("sport", {
      sportsId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      players: {
        type: Sequelize.INTEGER, //no of players
        allowNull: false,
      },
      type: {
        type: Sequelize.INTEGER, //team or individual
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  
    return Sport;
  };
  