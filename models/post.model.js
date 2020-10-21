const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true, minlength: 10 },
    text: { type: String, required: true, minlength: 20 },
    author: { type: String, required: true },
    created: { type: Date, required: true },
    updated: { type: Date, required: true },
    status: { type: String, required: true },

});

module.exports = mongoose.model('Post', postSchema);
