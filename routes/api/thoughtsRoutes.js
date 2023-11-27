const router = require('express').Router();

const { getThought, 
    getOneThought, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);
    
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;