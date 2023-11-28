# SocialMediaAPI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A social media API that uses Express.js, Mongoose and MongoDB.

## Description

This application is an API of a social media application. It makes use of Express.js, Mongoose and MongoDB. This application is principly designed to showcase skills created using NoSQL. MongoDB is a NoSQL database and Mongoose is the package that makes it easier to execute CRUD operations. Express.js is used as the backend server for this application. This application has users, and the users can create thoughts, add friends (other users) and react to thoughts made by other users. Models are created for users and thoughts, where a schema is created for just reactions. Reactions are setup as subdocuments of thoughts. This application is intended to be tested with a program such as Insomnia Core or similar application that allows for testing of API Routes.

## Usage

A walkthrough video has been created to show the functionality of the application using Insomnia Core.

The video can be found here: https://drive.google.com/file/d/1uW8iwVaxMidRlghWpkma7Qq7FAIkkGyo/view

## Credits

Much of the code was developed with the help of the exercise files from Week 18 of the UNB Coding Bootcamp.

The following are additional resources I used to assist in the development of this application:

    - MongoDB Fundamentals - https://www.mongodb.com/docs/drivers/node/current/fundamentals/
    - Mongoose Guides - https://mongoosejs.com/docs/guides.html
    - Dayjs - https://day.js.org/docs/en/display/format
    - Date format getters - https://stackoverflow.com/questions/50633696/mongoose-getters-not-working-on-arrays
                          \- https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps

## License

MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
