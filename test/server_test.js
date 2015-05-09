'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var currentTime = new Date(); 
var dateTime = "Server time: " + (currentTime.getMonth()+1) + "/"
                + currentTime.getDate() + "/" 
                + currentTime.getFullYear() + " @ "  
                + currentTime.getHours() + ":"  
                + currentTime.getMinutes() + ":" 
                + currentTime.getSeconds();

chai.use(chaiHttp);

require('../server');

describe('our server', function() {
	it('should respond to a /time request with the current server time', function(done) {
		chai.request('localhost:3000')
			.get('/time')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.status).to.eql(200);
				expect(res.body.msg).to.eql(dateTime);
				done();
			});
	});

	it('should have a 404 on error', function(done) {
		chai.request('localhost:3000')
			.get('/blahblah')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.status).to.eql(404);
				expect(res.body.msg).to.eql('could not find page');
				done();
			});
	});
});