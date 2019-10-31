const mongoose = require("mongoose"),
    User = require('../app/models/users');


//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

it('it should GET the index.html file', (done) => {
    chai.request(server)
        .get('/login.html')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
});

it('it should return 404', (done) => {
    chai.request(server).get('/index2.html')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
});

describe('User', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });
    it('it should POST a user', (done) => {
        var user = {
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "woo@hoo.com",
            "password": "pass"
        }
        chai.request(server)
            .post('/api/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('firstName');
                res.body.firstName.should.be.a('string');
                res.body.firstName.should.equal('Jane');
                done();
            });
    });

});

