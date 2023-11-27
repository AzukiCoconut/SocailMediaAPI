const { User, Thought } = require('../models');

module.exports = {
    async getThought(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId}).select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts with that ID'});
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username},
                { $addToSet: {thoughts: thought._id }},
                { new: true }
            );

            if (!user) {
                return res.status(404).json( { message: 'Thought created, but found no user with that ID'});
            }

            res.json('Created the thought');
        
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(500).json({ message: 'No thought with this id'});
            }

            res.json(thought);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});

            if (!thought) {
                return res.status(404).json({message: 'No thoughts with this id'});
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull : { thoughts: req.params.thoughtId }},
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'Thought deleted but no user with this id'});
            }

            res.json({ message: 'Thought successfully deleted'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: {reactions: req.body }},
                {runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'});
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeReaction (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: {reactionID: req.params.reactionID }}},
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts with this id'});
            }
            res.json(thought);
        }catch (err) {
            res.status(500).json(err);
        }
    }
};