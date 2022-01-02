const express = require("express")
const PartcipantRoute = express.Router()

const ParticipantController = require("../controllers/participant")
const Course = require("../controllers/course")

PartcipantRoute.get("/", ParticipantController.getParticipants)

PartcipantRoute.get("/:id", ParticipantController.getParticipant)

PartcipantRoute.post("/:id/:courseid", Course.postCoursetoParcitipant)

PartcipantRoute.post("/", ParticipantController.postParticipant)

PartcipantRoute.delete("/:id", ParticipantController.deleteParticipant)

PartcipantRoute.patch("/:id", ParticipantController.patchParticipant)

// PartcipantRoute.get

module.exports = PartcipantRoute