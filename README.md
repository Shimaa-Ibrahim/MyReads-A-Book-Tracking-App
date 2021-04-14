# MyReads: A Book Lending App
#### Description:
**Udacity project** is a web app allows you to search, select and categorize books you have read, are currently reading, or want to read. 


### Built With
- React

### Getting started:
##### Installation:
###### Make sure Node and npm are installed
* clone the repo with `git clone <repo>`
* `cd` into your new folder and run:
* install all project dependencies with `npm install`
* start the development server with `npm start`

### Backend Server
 The file `BooksAPI.js` contains the methods:
* `getAll`  return book objects that is currently in the bookshelves.
* `get` return book object using id
* `update(book, shelf)` update book shelf
* `search(query)` Returns a JSON object containing a collection of a maximum of 20 book objects.

### Frontend
the main page displays a list of "shelves", each of which contains a number of books. Use control to select the shelf for that book. The three shelves are:
- Currently Reading
- Want to Read
- Read

a search page that allows you to find books to add to your library.