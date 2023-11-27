const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

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
        get: (date) => {
            if (date) return dayjs(date).format('MMMM DD, YYYY') + ' at ' + dayjs(date).format('h:m a');
        },
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought',thoughtSchema);

module.exports = Thought;

