'use strict';

var express = require('express');
var mongodb = require('mongodb').MongoClient;

var adminRouter = express.Router();

var books = [
    {
        title: 'Harry Potter and the Philosophers Stone',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and Chamber of Secrets',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        genre: 'Fantasy',
        author: 'J.K. Rowling',
        read: false
    }
];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
}

module.exports = router;