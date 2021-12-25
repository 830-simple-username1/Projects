var express = require('express');
var app = express();

/*setting middleware

app.use() method mounts the middleware express.static for every request.
The express.static middleware is responsible for serving the static assets of an Express.js application.
The express.static() method specifies the folder from which to serve all static resources. 
*/
app.use(express.static('public'));   //Serves resources from public folder


/*Serves all the request which includes /images in the url from Images folder

app.use() method mounts the express.static middleware for every request that starts with "/images".
It will serve images from images folder for every HTTP requests that starts with "/images".
*/
app.use('/images', express.static({ root: '.'} + '/Images'));


var server = app.listen(6800);