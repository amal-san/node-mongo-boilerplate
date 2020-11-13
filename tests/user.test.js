const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const URL = 'http://localhost:3000'

chai.should();

chai.use(chaiHttp);


describe('GET ' + URL +'/user/all', () => {
    it('it should return whole list of users', (done) => {
      chai
        .request(server)
        .get('/user/all')
        .end((err, res) => {
          res.should.have.status(200);
          done(err);
        });
    });
});

describe('POST ' + URL +'/user/create/', () => {
    it('It should create a new user', (done) => {
      chai
        .request(server)
        .post('/user/create')
        .send({'username': "Charlie", 'password':"1234"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('PUT  ' + URL +'/user/update/', () => {
    it('It should update a user', (done) => {
      chai
        .request(server)
        .put('/user/update')
        .send({'find_username': "Charlie", 'update_username': "John"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('POST  ' + URL +'/user/find/', () => {
    it('It should find a user', (done) => {
      chai
        .request(server)
        .post('/user/find/')
        .send({'username': "John"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});



describe('DELETE ' + URL +'/user/delete/', () => {
    it('It should delete a user', (done) => {
      chai
        .request(server)
        .delete('/user/delete')
        .send({'username':"John"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
          return process.exit()
        });
    });
});

