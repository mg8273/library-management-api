const Book = require("../models/bookModel");

// Add Book
exports.addBook = async (req,res)=>{
try{
const book = new Book(req.body);
await book.save();
res.status(201).json(book);
}catch(err){
res.status(500).json({error:err.message});
}
};

// Get All Books
exports.getBooks = async (req,res)=>{
try{
const books = await Book.find();
res.json(books);
}catch(err){
res.status(500).json({error:err.message});
}
};

// Get Book By ID
exports.getBookById = async (req,res)=>{
try{
const book = await Book.findById(req.params.id);
if(!book) return res.status(404).json({msg:"Book not found"});
res.json(book);
}catch(err){
res.status(500).json({error:err.message});
}
};

// Update Book
exports.updateBook = async (req,res)=>{
try{
const book = await Book.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(book);
}catch(err){
res.status(500).json({error:err.message});
}
};

// Delete Book
exports.deleteBook = async (req,res)=>{
try{
await Book.findByIdAndDelete(req.params.id);
res.json({msg:"Book deleted"});
}catch(err){
res.status(500).json({error:err.message});
}
};

// Search Book
exports.searchBook = async (req,res)=>{
try{
const books = await Book.find({
title: {$regex: req.query.title, $options:"i"}
});
res.json(books);
}catch(err){
res.status(500).json({error:err.message});
}
};