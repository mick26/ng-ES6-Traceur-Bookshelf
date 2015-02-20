## Motivation

The latest version of javascript (ECMAScript6 aka ES6 aka Harmony) is on the way. 
[Here](http://kangax.github.io/compat-table/es6/) is a Web site that shows ES6 features that are already implemented in browsers. 

[Here](https://github.com/joyent/node/wiki/ES6-%28a.k.a.-Harmony%29-Features-Implemented-in-V8-and-Available-in-Node) are the ES6 features available in NodeJS.

Angular 2.0 will be released later this year. It seems to be a complete rewrite and uses alot of ES6 features.
There are some videos on the [AngularJS Web site](https://angularjs.org/) about Angular 2.0 features. 
The [ng-learn](http://ng-learn.org/2014/03/AngularJS-2-Status-Preview/) Web site also contains quite a bit of information regarding Angular 2.0.


It is possible to code using ES6 at the moment and use a ES6 to ES5 transpiler to convert the ES6 code to ES5 format which the browser will understand. The transpiler I used is [Traceur](https://github.com/google/traceur-compiler/) and specifically the [bower Traceur package](https://github.com/jmcriffey/bower-traceur).


This App is based on the Sitepoint article [Writing AngularJS Apps Using ES6](http://www.sitepoint.com/writing-angularjs-apps-using-es6) by Ravi Kiran.



## [Modules](http://www.sitepoint.com/understanding-es6-modules/?__kzp=0&__kzt=1424373942251) 

Modules were not part of ES5. ES6 includes modules and each module is defined in its own file. The functions or variables defined in a module are not visible outside unless you explicitly export them. To export certain variables from a module use the keyword export. To use the exported variables in a different module you use import. Angular 2.0 will no longer have it's own modules but will just use ES6 modules.


## Defining Controllers

$scope will be removed from Angular 2.0 so it is good practice to get used to using it less.
It is thus beneficial to use define controllers using the [controller As](https://docs.angularjs.org/api/ng/directive/ngController) syntax.

- Define a class
- Register the class as a controller 



## Running the code

 -  __npm install__
 -  __bower install__
 -  __gulp__ 
 -  browse to __http://localhost:8000__


<hr>

<div align="center">
Michael Cullen <br/>
2015
</div>