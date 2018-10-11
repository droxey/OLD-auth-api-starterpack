const chai = require('chai');

const chaiHttp = require('chai-http');

const server = require('../../index.js');

const should = chai.should();
chai.use(chaiHttp);

// const agent = chai.request.agent(server);

const episode = require('./episode.model.js');

// const { message } = require('../helpers');

describe('Episode Endpoints', () => {
  describe('/GET All episode', () => {
    it('should get all episode', (done) => {
      chai
        .request(server)
        .get('/portlandia/episode')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET Single episode with id: 1', () => {
    it('should get one episode with id: 1', (done) => {
      chai
        .request(server)
        .get('/portlandia/episode/1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should have a keys', (done) => {
      chai
        .request(server)
        .get('/portlandia/episode/_id')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          Object.keys(res.body).should.be.eql(['image', 'title', 'summary']);
          done();
        });
    });
  });
});
