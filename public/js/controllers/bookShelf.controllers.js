/*================================================================
Define the Controllers
=================================================================*/

'use strict';

/*================================================================
import the files containing the classes 
that are to be registered as controllers
=================================================================*/
import HomeController from './HomeController.js';
import AddBookController from './AddBookController.js';
import ArchiveController from './ArchiveController.js';

var moduleName='bookShelf.controllers';

/*================================================================
create an Angular Module to contain the controllers
Register the classes as controllers
=================================================================*/
angular.module(moduleName, [])
    .controller('bookShelf.homeController', HomeController)
    .controller('bookShelf.addBookController', AddBookController)
    .controller('bookShelf.archiveController', ArchiveController);

export default moduleName;