// controllers/blogController.js

const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const blog = await Blog.create({ title, description });
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const blog = await Blog.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
