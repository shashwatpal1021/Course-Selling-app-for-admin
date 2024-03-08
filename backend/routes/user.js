const express = require('express');
const { authenticateJwt } = require("../middleware/auth");
const { signup, login, courses, updateCourseById, purchasedCourses } = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/courses', authenticateJwt, courses);
router.post('/courses/:courseId', authenticateJwt, updateCourseById);
router.get('/purchasedCourses', authenticateJwt, purchasedCourses);

module.exports = router