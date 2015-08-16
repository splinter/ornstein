'use strict';
module.exports = function (str) {
  var args = process.argv;
  var options = {};
  var notify = require('notify');
  var runner = require('test-runner');
  var path = require('path');
  global.appRoot = path.resolve(__dirname);
  if(args.indexOf('-p') > -1){
     options.projectDir = args[args.indexOf('-p')+1];
  }
  //var fs = require('fs');
  //console.log('listing directory');
  //var l = fs.readdirSync('./projects/a/resource-tests');
  //console.log(l);

  if(!options.projectDir) {
    notify.error('Provide a project directory as -p <name>');
  } else {
     //Run the project
     runner.run(options);
  }

  process.on('exit',function(){
    console.log('I am finished running all the tests , have a good day :)');
    var reporter = require('report-runner');
    //console.log(runner.getResults());
    reporter.run(runner.getResultSet());
  });
  // console.log(str || 'Rainbow'); 
  // console.log(process.argv);
  // var result = require('./dhc-requests/dhc-request-multi.json');
  // var expect = require('chai').expect;
  // var assert = require('chai').assert;
  // var chai = require('chai');
  // var foo = 'string';

  // //assert.equal(1,23,'Both values are equal');
  // var tests = require('./projects/a/tests/test-headers');
  // for(var key in tests){
  //   console.log('test name: '+key);
  // }
  // var input = {
  //   headers:{
  //     a:'1'
  //   }
  // };
  // try{
  //   tests.testContentTypeHeader(input,input);
  //   console.log('Test passed');
  // } catch(e){
  //   // for(var key in e){
  //   //   console.log(key);
  //   // }
  //   console.log(e.message);
  //   console.log(e.expected);
  //   console.log(e.actual);
  //   //console.log(e);
  // }
  //expect(result.fruits).to.be.a('')
  // var http = require('http');
  // var opts = {
  // 	host:'www.google.com',
  // 	path:'/'
  // };
  // var chalk = require('chalk');
  // var success = chalk.green.bold;
  // var cb = function(response){
  // 	var str ='';
  // 	response.on('data',function(chunk){
  // 		str+=chunk;
  // 	});
  // 	response.on('end',function(){
  // 		//console.log(str);
  // 		console.log(this.headers);
  // 		console.log(success('Done!!'));
  // 	});
  // 	for(var key in response){
  // 		console.log(key);
  // 	}
  // };

  // http.request(opts,cb).end();
};
