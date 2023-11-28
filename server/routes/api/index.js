const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./thoughtRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('./comments', commentRoutes);

module.exports = router;
