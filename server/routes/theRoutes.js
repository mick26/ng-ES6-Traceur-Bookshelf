/*================================================================
Route Definitions
Ref.
=================================================================*/
'use strict';

var bookShelfApi = require('../bookShelfApi.js');

/*================================================================
ROUTE Definitions
=================================================================*/
module.exports = {

	getActiveBooks: function(req, res) {
	    res.send(bookShelfApi.getBooks(false));
	},

	getArchivedBooks: function(req, res) {
    	res.send(bookShelfApi.getBooks(true));
	},

	addBook: function(req, res) {
	    var newBook=req.body;
	    if(!newBook.title){
	        res.send(500,{errorText:'No data found to add'});
	    }
	    else {
	        bookShelfApi.addABook(newBook);
	        res.send(200, {message: 'New book added to the list'});
	    }
	},

	markRead: function(req, res) {
	    if(!req.params.id){
	        res.send(500,{errorText:'BookId not sent'});
	    }
	    else if(req.body.read === undefined || req.body.read === null){
	        res.send(500,{errorText:'No data found to edit'});
	    }
	    else{
	        var modifiedBook = bookShelfApi.modifyReadStatus(parseInt(req.params.id), req.body.read);
	        if(modifiedBook === null){
	            res.send(500,{errorText:'Book not found in the list'});
	        }
	        else{
	            res.send(modifiedBook);
	        }
	    }
	},

	addToArchive: function(req, res) {
	    if(!req.params.id) {
	        res.send(500,{errorText:'Can\'t update book if id is not sent'});
	    }
	    else {
	        var modifiedBook = bookShelfApi.addToArchive(parseInt(req.params.id));
	        if(modifiedBook === null) {
	            res.send(500,{errorText:'Book not found in the list'});
	        }
	        else{
	            res.send(modifiedBook);
	        }
	    }
	},

	checkBookExists: function(req, res) {
		if(!req.params.title) {
        	res.send(500, {errorText:'Can\'t check existence of book if title is not sent'});
    	}
    	else {
        	res.send(bookShelfApi.bookExists(req.params.title));
    	}
	}


};
