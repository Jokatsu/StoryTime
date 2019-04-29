const router = require('express').Router();
const { getOne, getAll, updateOne, create } = require('../controllers/stories');

router.get('/all',getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put('/:id', updateOne);

module.exports = router;

