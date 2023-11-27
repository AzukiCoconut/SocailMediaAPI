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

// /api/users/:userId
router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

    // /api/users/userId/friends/:friendId
router.route("/:userId/friends/:friendId")
    .post(createFriend)
    .delete(removeFriend);


module.exports = router;
