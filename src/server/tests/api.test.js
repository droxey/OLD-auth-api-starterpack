const chai = require('chai');

// const chaiHttp = require('chai-http');

const server = require('../../index.js');

// const should = chai.should();

// chai.use(chaiHttp);
//
// const agent = chai.request.agent(server);
// const { site, message } = require('../helpers');
describe('site', () => {
  it('Should have home page', (done) => {
    chai
      .request('localhost:3000')
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('API 404', () => {
  it('should get an error message', (done) => {
    chai
      .request(server)
      .get('/portlandia/ifc')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
