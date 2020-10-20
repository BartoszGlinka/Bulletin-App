const Post = require('../models/post.model');

exports.getAll = async (req, res) => {
    try {
      res.json(await Post.find({}));
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  };

exports.getOne = async (req, res) => {

    try {
      const dep = await Post.findById(req.params.id);
      if(!dep) res.status(404).json({ message: 'Not found' });
      else res.json(dep);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};

exports.addNew = async (req, res) => {

    try {

      const { id, title, text, author } = req.body;
      const newPost = new Post({ id, title, text, author });
      await newPost.save();
      res.json({ message: 'OK' });
      res.json(await Post.find());


    } catch(err) {
      res.status(500).json({ message: err });
    }

};
