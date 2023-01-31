module.exports = (sequelize, Sequelize) => {
  const Participant = sequelize.define("participant", {
    pId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zprn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bloodGroup: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      unique: true,
    },
    teamName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gameName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });

  return Participant;
};
