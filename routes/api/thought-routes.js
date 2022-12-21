const router = require("express").Router();

// thought routes
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require("../../controllers/thought-controller");

// endpoints for thought routes
router.route("/").get(getAllThoughts).post(createThought);
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// endpoints for reaction routes
router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)


module.exports = router;
