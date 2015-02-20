'use strict';

/*================================================================
create an Angular Module to hold routes
=================================================================*/
var moduleName = 'bookShelf.routes';

function config($routeProvider) {

  $routeProvider

    .when('/',{
      templateUrl:'views/home.html',
      controller:'bookShelf.homeController',
      controllerAs:'vm'
    })
    .when('/addBook',{
      templateUrl:'views/addBook.html',
      controller:'bookShelf.addBookController',
      controllerAs:'vm'
    })
    .when('/archive', {
      templateUrl:'views/archive.html',
      controller:'bookShelf.archiveController',
      controllerAs:'vm'
    })
    .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];


/*================================================================
Angular Module - to contain routes
=================================================================*/
angular.module(moduleName, ['ngRoute'])
  .config(config);

export default moduleName;

