'use strict';

/*================================================================
Import Angular modules for:
- routes
- controllers
- services
- directives
=================================================================*/
import { default as routesModuleName } from './bookShelf.routes.js';
import { default as controllersModuleName } from './controllers/bookShelf.controllers.js';
import { default as servicesModuleName } from './services/bookShelf.services.js';
import { default as directivesModuleName } from './directives/bookShelf.directives.js';


/*================================================================
Main App Module Name
=================================================================*/
var moduleName = 'bookShelf';


/*================================================================
Main App Angular Module
=================================================================*/
angular.module(moduleName, ['ngRoute','ngMessages',routesModuleName ,servicesModuleName, 
        controllersModuleName, directivesModuleName]);

export default moduleName;


