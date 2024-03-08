const express = require('express');
const { authenticateJwt } = require("../middleware/auth");
const { getMe, signup, login, courses, updateCourseById, getCourseById, getCourses } = require("../controllers/admin.controller");


const router = express.Router();

router.get("/me", authenticateJwt, getMe);
router.post('/signup', signup);
router.post('/login', login);
router.post('/courses', authenticateJwt, courses);
router.put('/courses/:courseId', authenticateJwt, updateCourseById);
router.get('/courses', authenticateJwt, getCourses);
router.get('/course/:courseId', authenticateJwt, getCourseById);

module.exports = router