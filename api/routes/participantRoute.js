const express = require("express");
const {
  findAllParticipant,
  findOneParticipant,
  updateParticipant,
  deleteParticipant,
  deleteAllParticipant,
  createParticipant,
} = require("../controllers/participantController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/get-participants")
  .get(isAuthenticatedUser, authorizeRoles("admin"), findAllParticipant)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAllParticipant);
router.route("/participant").post(createParticipant);
router
  .route("/participant/:id")
  .get(findOneParticipant)
  .post(createParticipant)
  .put(updateParticipant)
  .delete(deleteParticipant);

// router.route("/login").post(loginUser);

module.exports = router;
