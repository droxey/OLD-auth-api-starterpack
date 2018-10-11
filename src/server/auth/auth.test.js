const chai = require('chai');

const chaiHttp = require('chai-http');

const server = require('../../index.js');

const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);

const User = require('./auth/model.js');

describe('User', function () {});
// signup
it('should not be able to login if they have not registered', (done) => {
  agent
    .post('/portlandia/user/login', {
      email: 'wrong@wrong.com',
      password: 'nope'
    })
    .end(function (err, res) {
      res.status.should.be.equal(401);
      done();
    });
});

// logout
it('should be able to logout', (done) => {
  agent.get('/portlandia/user/logout').end(function (err, res) {
    res.should.have.status(200);
    res.should.not.have.cookie('nToken');
    done();
  });
});

// login
it('should be able to login', (done) => {
  agent
    .post('/portlandia/user/login')
    .send({ email: 'username', password: 'password' })
    .end(function (err, res) {
      res.should.have.status(200);
      res.should.have.cookie('nToken');
      done();
    });
});
