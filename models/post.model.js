const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true, minlength: 10 },
    text: { type: String, required: true, minlength: 20 },
    author: { type: String, required: true },
    created: { type: Date },
    updated: { type: Date },
    status: { type: String },

});

module.exports = mongoose.model('Post', postSchema);
