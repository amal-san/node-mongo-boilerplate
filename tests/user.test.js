const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const expect = chai;

chai.should();

chai.use(chaiHttp);

describe('GET /user/all', () => {
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

describe('PUT /user/create/', () => {
    it('It should create a new user', (done) => {
      chai
        .request(server)
        .put('/user/create')
        .send({'username': "Charlie", 'password':"1234"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});

describe('POST /user/find/:username', () => {
    it('It should find a user', (done) => {
      chai
        .request(server)
        .post('/user/find/')
        .send({'username': "Charlie"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('PATCH /user/update/', () => {
    it('It should update a user', (done) => {
      chai
        .request(server)
        .patch('/user/update')
        .send({'find_username': "Charlie", 'update_username': "John"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('DELETE /user/delete/', () => {
    it('It should delete a user', (done) => {
      chai
        .request(server)
        .delete('/user/delete')
        .send({'username':"John"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});
