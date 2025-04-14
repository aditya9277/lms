import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import Books from "./model/bookModel.js";
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Books to insert
const books = [
    // Personal Growth
    {
      bookname: "Atomic Habits",
      authorname: "James Clear",
      type: "Personal Growth",
      rating: 4.8,
      bookImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      price: 499,
    },
    {
      bookname: "The Power of Now",
      authorname: "Eckhart Tolle",
      type: "Personal Growth",
      rating: 4.7,
      bookImage: "https://m.media-amazon.com/images/I/71XlTz5M4gL.jpg",
      price: 429,
    },
    {
      bookname: "The 7 Habits of Highly Effective People",
      authorname: "Stephen R. Covey",
      type: "Personal Growth",
      rating: 4.6,
      bookImage: "https://m.media-amazon.com/images/I/81bpkO+VGFL.jpg",
      price: 540,
    },
    {
      bookname: "Think Like a Monk",
      authorname: "Jay Shetty",
      type: "Personal Growth",
      rating: 4.5,
      bookImage: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
      price: 399,
    },
  
    // History
    {
      bookname: "Sapiens",
      authorname: "Yuval Noah Harari",
      type: "History",
      rating: 4.7,
      bookImage: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
      price: 599,
    },
    {
      bookname: "Guns, Germs, and Steel",
      authorname: "Jared Diamond",
      type: "History",
      rating: 4.4,
      bookImage: "https://m.media-amazon.com/images/I/91FdFiTzgPL.jpg",
      price: 630,
    },
    {
      bookname: "A People's History of the United States",
      authorname: "Howard Zinn",
      type: "History",
      rating: 4.3,
      bookImage: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
      price: 720,
    },
    {
      bookname: "India After Gandhi",
      authorname: "Ramachandra Guha",
      type: "History",
      rating: 4.5,
      bookImage: "https://m.media-amazon.com/images/I/71tNq8Ph4uL.jpg",
      price: 750,
    },
  
    // Leadership & Entrepreneurs
    {
      bookname: "Zero to One",
      authorname: "Peter Thiel",
      type: "Leadership & Entrepreneurs",
      rating: 4.3,
      bookImage: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg",
      price: 450,
    },
    {
      bookname: "Start with Why",
      authorname: "Simon Sinek",
      type: "Leadership & Entrepreneurs",
      rating: 4.6,
      bookImage: "https://m.media-amazon.com/images/I/61ShPQu-u0L.jpg",
      price: 499,
    },
    {
      bookname: "The Lean Startup",
      authorname: "Eric Ries",
      type: "Leadership & Entrepreneurs",
      rating: 4.5,
      bookImage: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
      price: 470,
    },
    {
      bookname: "The Hard Thing About Hard Things",
      authorname: "Ben Horowitz",
      type: "Leadership & Entrepreneurs",
      rating: 4.4,
      bookImage: "https://m.media-amazon.com/images/I/71m-MYAlZNL.jpg",
      price: 580,
    },
  
    // Technology
    {
      bookname: "Clean Code",
      authorname: "Robert C. Martin",
      type: "Technology",
      rating: 4.8,
      bookImage: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
      price: 999,
    },
    {
      bookname: "Introduction to Algorithms",
      authorname: "Thomas H. Cormen",
      type: "Technology",
      rating: 4.6,
      bookImage: "https://m.media-amazon.com/images/I/71g+J9pIzOL.jpg",
      price: 1050,
    },
    {
      bookname: "The Pragmatic Programmer",
      authorname: "Andrew Hunt",
      type: "Technology",
      rating: 4.7,
      bookImage: "https://m.media-amazon.com/images/I/81vpsIs58WL.jpg",
      price: 780,
    },
    {
      bookname: "Artificial Intelligence: A Modern Approach",
      authorname: "Stuart Russell & Peter Norvig",
      type: "Technology",
      rating: 4.5,
      bookImage: "https://m.media-amazon.com/images/I/61R+xZLZ8bL.jpg",
      price: 1150,
    },
  
    // Health and Fitness
    {
      bookname: "Can’t Hurt Me",
      authorname: "David Goggins",
      type: "Health and Fitness",
      rating: 4.8,
      bookImage: "https://m.media-amazon.com/images/I/71C5cxoLVFL.jpg",
      price: 550,
    },
    {
      bookname: "The 4-Hour Body",
      authorname: "Tim Ferriss",
      type: "Health and Fitness",
      rating: 4.4,
      bookImage: "https://m.media-amazon.com/images/I/81Rci5JntpL.jpg",
      price: 720,
    },
    {
      bookname: "Born to Run",
      authorname: "Christopher McDougall",
      type: "Health and Fitness",
      rating: 4.6,
      bookImage: "https://m.media-amazon.com/images/I/81wcnNQ-TBL.jpg",
      price: 630,
    },
    {
      bookname: "How Not to Die",
      authorname: "Michael Greger",
      type: "Health and Fitness",
      rating: 4.5,
      bookImage: "https://m.media-amazon.com/images/I/71Ow3F0T8PL.jpg",
      price: 699,
    },
  ];
      
// Insert books
Books.insertMany(books)
  .then(() => {
    console.log("📚 Books inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error inserting books:", err);
    mongoose.connection.close();
  });
