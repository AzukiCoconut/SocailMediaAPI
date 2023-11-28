const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

// Reaction schema will not be a Model but a subdocument of the Thoughts model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => { // Uses Dayjs to format the date upon query for display
                if (date) return dayjs(date).format('MMMM DD, YYYY') + ' at ' + dayjs(date).format('h:m a');
            },
        },
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

module.exports = reactionSchema;