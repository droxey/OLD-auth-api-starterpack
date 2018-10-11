const chai = require('chai');

const chaiHttp = require('chai-http');

const server = require('../../index.js');

const should = chai.should();

// chai.use(chaiHttp);

// const agent = chai.request.agent(server);

const Character = require('./character.model.js');

// const { message } = require('../helpers')

describe('Character Endpoints', () => {
  describe('/GET All character', () => {
    it('should get all character', (done) => {
      chai.request(server)
        .get('/portlandia/character')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET Single character with id: 1', () => {
    it('should get one character with id: 1', (done) => {
      chai.request(server)
      .get('/portlandia/character/:id')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('/GET characters with single query', () => {
    it('should get characters with name: Candance', (done) => {
      chai.request(server)
        .get('/portlandia/character?name=Candance')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
