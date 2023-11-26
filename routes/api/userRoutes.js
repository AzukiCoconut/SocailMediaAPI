const router = require('express').Router();
const { getUser, 
    getSingleUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    createFriend, 
    removeFriend 
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route("/:userId/friends/:friendId")
    .post(createFriend)
    .delete(removeFriend);


module.exports = router;
