 // I created this custom config file following:
 // https://github.com/balderdashy/sails/issues/2965#issuecomment-105229752
 // along with a customMiddleware declaration in http.js, it provides a way
 // of adding additional static folder locations to the express app

var express = require('express');

module.exports.staticRoutes = {
    node_modules: function(app){
        console.log('Load custom static folder /node_modules');
        app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
    },
    angular: function(app){
        console.log('Load custom static folder /angular');
        app.use('/angular', express.static(process.cwd() + '/angular'));
    }
};