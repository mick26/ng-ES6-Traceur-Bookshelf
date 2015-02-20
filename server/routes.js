/*================================================================
Route Declarations
=================================================================*/
'use strict';

/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
var theRoutes = require('./routes/theRoutes.js');	//Exchange routes


/**
 * ROUTES
 */
module.exports = function(app) {

	app.get('/api/activeBooks', theRoutes.getActiveBooks);
	app.get('/api/archivedBooks', theRoutes.getArchivedBooks);
	app.get('/api/bookExists/:title', theRoutes.checkBookExists);
	app.post('/api/books', theRoutes.addBook);
	app.put('/api/markRead/:id', theRoutes.markRead);
	app.put('/api/addToArchive/:id', theRoutes.addToArchive);

};
