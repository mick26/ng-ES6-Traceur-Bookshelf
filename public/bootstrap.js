/*================================================================
Bootstrap.js file loads the main AngularJS module 
and manually bootstraps the Angular app. 
We cannot use ng-app to bootstrap the application as 
modules are loaded asynchronously.

The main App Module is 'bookShelfModule'
=================================================================*/ 
'use strict';

import { default as bookShelfModule} from './js/bookShelf.main.js';

angular.bootstrap(document, [bookShelfModule]);
