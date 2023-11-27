const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

// Create a thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => { // gets a properly formatted date string for display. Uses Dayjs to format the date.
            if (date) return dayjs(date).format('MMMM DD, YYYY') + ' at ' + dayjs(date).format('h:m a');
        },
    },
    username: {
        type: String,
        required: true,
    },
    // implements the reaction schema as a subdocument.
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
});

// virtual of reaction count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// set thought schema as a model
const Thought = model('thought',thoughtSchema);

module.exports = Thought;

