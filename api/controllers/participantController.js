const db = require("../models");
const participant = db.participant;
const Op = db.Sequelize.Op;
const ErrorHandler = require("../utils/ErrorHandler");

// Create and Save a new Participant
exports.createParticipant = async (req, res, next) => {
  // Validate request
  if (!req.body.name) {
    return next(new ErrorHandler("Content can not be empty!", 400));
  }

  // Create a Participant
  const participantData = {
    name: req.body.name,
    department: req.body.department,
    year: req.body.year,
    zprn: req.body.zprn,
    bloodGroup: req.body.bloodGroup,
    phone: req.body.mobileNum,
    teamName: req.body.teamName,
    gameName: req.body.gameName,
  };

  // Save Tutorial in the database
  const response = await participant.create(participantData);
  if (response === null) {
    return next(new ErrorHandler("Something went wrong!", 400));
  }
  res.status(200).json({
    success: true,
    data: response,
  });
};

// Retrieve all Participants from the database.
exports.findAllParticipant = async (req, res) => {
  const data = await participant.findAll();

  res.status(200).json({
    success: true,
    data: data,
    totalResult: data.length,
  });
};

// Find a single Participant with an id
exports.findOneParticipant = async (req, res, next) => {
  const id = req.params.id;
  var condition = id ? { id: id } : null;
  if (!id) {
    return next(new ErrorHandler("Id is missing", 401));
  }
  const data = await participant.findOne({ where: condition });
  if (data === null) {
    return next(new ErrorHandler("No result found", 404));
  }
  res.status(200).json({
    success: true,
    data: data,
  });
};

// Update a Participant by the id in the request
exports.updateParticipant = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ErrorHandler("Id is missing", 404));
  }
  //   if(await participant.findbypk())
  const response = await participant.update(req.body, {
    where: { id: id },
  });

  if (response[0] === 0) {
    return next(new ErrorHandler("Updation failed", 404));
  }
  res.status(200).json({
    success: true,
    data: response,
    message: "Participant data updated successful",
  });
};

// Delete a Participant with the specified id in the request
exports.deleteParticipant = async (req, res, next) => {
  const id = req.params.id;
  const response = await participant.destroy({ where: { id: id } });
  res.status(200).json({
    success: true,
    message: "Participant deleted successful",
  });
};

// Delete all Participants from the database.
exports.deleteAllParticipant = async (req, res) => {
  const response = await participant.destroy({
    where: {},
    truncate: false,
  });
  res.status(200).json({
    success: true,
    message: `${response.length} Participants were deleted successfully!`,
  });
};
