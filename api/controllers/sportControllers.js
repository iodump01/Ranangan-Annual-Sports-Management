const db = require("../models");
const sport = db.sport;
const Op = db.Sequelize.Op;
const ErrorHandler = require("../utils/ErrorHandler");
// Register a Sport
exports.registerSport = catchAsyncErrors(async (req, res, next) => {
  const { sportsId, name, players, type } = req.body;
  const user = await sport.create({
    sportsId,
    name,
    players,
    type,
  });
  sendToken(user, 201, res);
});
// Retrieve all Sports from the database.
exports.findAllSports = async (req, res) => {
  const data = await sport.findAll();
  res.status(200).json({
    success: true,
    data: data,
    totalResult: data.length,
  });
};

// Find a single Sport with an id
exports.findOneSport = async (req, res, next) => {
  const id = req.params.id;
  var condition = id ? { id: id } : null;
  if (!id) {
    return next(new ErrorHandler("Id is missing", 401));
  }
  const data = await sport.findOne({ where: condition });
  if (data === null) {
    return next(new ErrorHandler("No result found", 404));
  }
  res.status(200).json({
    success: true,
    data: data,
  });
};

// Update a Sport by the id in the request
exports.updateSport = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ErrorHandler("Id is missing", 404));
  }
  //   if(await sport.findbypk())
  const response = await sport.update(req.body, {
    where: { id: id },
  });

  if (response[0] === 0) {
    return next(new ErrorHandler("Updation failed", 404));
  }
  res.status(200).json({
    success: true,
    data: response,
    message: "Sport data updated successful",
  });
};

// Delete a Sport with the specified id in the request
exports.deleteSport = async (req, res, next) => {
  const id = req.params.id;
  const response = await sport.destroy({ where: { id: id } });
  res.status(200).json({
    success: true,
    message: "Sport deleted successful",
  });
};

// Delete all Sports from the database.
exports.deleteAllSport = async (req, res) => {
  const response = await sport.destroy({
    where: {},
    truncate: false,
  });
  res.status(200).json({
    name:"Cricket",
    numOfPlayers:"11",
    ccordinatorName:"falana",
  });
};
