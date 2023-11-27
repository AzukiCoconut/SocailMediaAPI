const { Schema, model } = require('mongoose');

// Create a user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'User email address is required'],
            unique: true,
            validate: { // adds validation to ensure a properly formatted email address is entered. 
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email address`
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ],
    },
    {
        toJSON: { // includes virtuals in the JSON output
            virtuals: true,
        }
    }
);

// Setting up a virtual called friendCount
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Make userSchema a Model
const User = model('user', userSchema);

module.exports = User;