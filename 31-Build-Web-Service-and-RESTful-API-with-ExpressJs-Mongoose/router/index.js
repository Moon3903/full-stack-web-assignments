const express = require("express")
const router = express.Router()

const instructor = require("./instructor")
const participant = require("./participant")
const course = require("./course")

router.use("/instructor", instructor)
router.use("/participant", participant)
router.use("/course", course)

router.get("/", (req, res) => {
    res.status(200).send("/instructor <br>/participant <br>/course")
})

module.exports = router