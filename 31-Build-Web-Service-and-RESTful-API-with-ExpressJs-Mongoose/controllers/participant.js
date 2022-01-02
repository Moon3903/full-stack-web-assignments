const ParticipantModel = require("../models/participant");

class ParticipantController {
  static async getParticipants(req, res) {
    try {
      const data = await ParticipantModel.find().populate('courses');
      res.status(200).send({ message: "Success get data", data: data });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
  static async getParticipant(req, res) {
    try {
      const data = await ParticipantModel.findOne({ _id: req.params.id });
      res.status(200).send({ message: "Success get data", data: data });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async postParticipant(req, res) {
    try {
      const { name, dateOfBirth, email, phone } = req.body;
      const data = new ParticipantModel({
        name: name,
        dateOfBirth: dateOfBirth,
        email: email,
        phone: phone,
      });

      const saved = await data.save();
      res.status(201).send({ message: "Success add data", data: saved });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async deleteParticipant(req, res) {
    try {
      const dataDelete = await ParticipantModel.findOne({ _id: req.params.id });
      await ParticipantModel.deleteOne({ _id: req.params.id });
      res.status(200).send({ message: "Success delete data", data: dataDelete });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async patchParticipant(req, res) {
    try {
      const { name, dateOfBirth, location } = req.body;
      const id = req.params.id;
      const data = await ParticipantModel.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).send({ message: "Success update data", data });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = ParticipantController;
