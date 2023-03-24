const router = require('express').Router();
const { registerUser, loginUser, getMe, getUserById } = require('../controlers/userControler');
const protect = require('../middlewares/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/:id', getUserById);

module.exports = router;
