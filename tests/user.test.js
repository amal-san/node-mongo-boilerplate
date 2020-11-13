const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const URL = 'http://localhost:3000'

chai.should();

chai.use(chaiHttp);


describe('GET ' + URL +'/user/all', () => {
    it('it should return whole list of users in database', (done) => {
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
    it('It should create a new user with username:Char002', (done) => {
      chai
        .request(server)
        .post('/user/create')
        .send({'username': "Char002", 'password':"1234",'first_name':"Charlie"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('PUT  ' + URL +'/user/update/', () => {
    it('It should update a user with username:Char002 to John12', (done) => {
      chai
        .request(server)
        .put('/user/update')
        .send({'find_username': "Char002",
               'first_name': "John",
               'last_name': "Domenic",
               'email': "JohnDuo@gmail.com",
               'username': "John12",
               'password':"QWERY@#$"
              })
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('POST  ' + URL +'/user/find/', () => {
    it('It should find a user the user with username: John12', (done) => {
      chai
        .request(server)
        .post('/user/find/')
        .send({'username': "John12"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});



describe('DELETE ' + URL +'/user/delete/', () => {
    it('It should delete a user with username: John12', (done) => {
      chai
        .request(server)
        .delete('/user/delete')
        .send({'username':"John12"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
          return process.exit()
        });
    });
});

