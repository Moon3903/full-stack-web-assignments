const CourseModel = require("../models/course");
const UserModel = require("../models/participant");

class CourseController {
  static async getCourses(req, res) {
    try {
      const data = await CourseModel.find().populate("instructor");
      res.status(200).send({ message: "Success get data", data: data });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
  static async getCourse(req, res) {
    try {
      const data = await CourseModel.findOne({ _id: req.params.id }).populate(
        "instructor"
      );
      res.status(200).send({ message: "Success get data", data: data });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async postCourse(req, res) {
    try {
      const { title, description, instructor, scheduleDateTime } = req.body;
      const data = new CourseModel({
        title: title,
        description: description,
        instructor: instructor,
        scheduleDateTime: scheduleDateTime,
      });

      const saved = await data.save();
      res.status(201).send({ message: "Success add data", data: saved });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async deleteCourse(req, res) {
    try {
      const dataDelete = await CourseModel.findOne({ _id: req.params.id });
      await CourseModel.deleteOne({ _id: req.params.id });
      res.status(200).send({ message: "Success delete data", data: dataDelete });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async patchCourse(req, res) {
    try {
      const { name, dateOfBirth, location } = req.body;
      const id = req.params.id;
      const data = await CourseModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).send({ message: "Success update data", data });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async postCoursetoParcitipant(req, res) {
    try {
      const { id, courseid } = req.params;

      const user = await UserModel.findById(id);
      const course = await CourseModel.findById(courseid);

      const isExist = user.courses.find(
        (e) => e.toString() === course._id.toString()
      );
      console.log(isExist);

      if (isExist) {
        res.status(200).send({ message: "Already Have" });
      } else {
        user.courses.push(course._id);
        await user.save();
        res.status(200).send({ message: "Course Added", data: user });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = CourseController;
