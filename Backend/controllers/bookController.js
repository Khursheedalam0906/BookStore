import Book from "../models/bookSchema.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    return res.status(200).json({ book, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};
