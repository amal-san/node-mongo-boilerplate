const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const URL = 'http://localhost:3000'

chai.should();

chai.use(chaiHttp);


describe('GET ' + URL +'/book/all', () => {
    it('it should return whole list of books', (done) => {
      chai
        .request(server)
        .get('/book/all')
        .end((err, res) => {
          res.should.have.status(200);
          done(err);
        });
    });
});

describe('POST ' + URL +'/book/create/', () => {
    it('It should create a new book', (done) => {
      chai
        .request(server)
        .post('/book/create')
        .send({'name': "Theory of everything", 'author':"Stephan hawkings", 'price':'100','description':'Based on the famous physist Stephan Hawkings','genre':'Biography'})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('PUT  ' + URL +'/book/update/', () => {
    it('It should update a book', (done) => {
      chai
        .request(server)
        .put('/book/update')
        .send({'find_name': "Theory of everything", 'update_name': "Wings of fire"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});


describe('POST  ' + URL +'/book/find/', () => {
    it('It should find a book', (done) => {
      chai
        .request(server)
        .post('/book/find/')
        .send({'name': "Wings of fire"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
        });
    });
});



describe('DELETE ' + URL +'/book/delete/', () => {
    it('It should delete a book', (done) => {
      chai
        .request(server)
        .delete('/book/delete')
        .send({'name':"Wings of fire"})
        .end((err, res) => {
          res.should.have.status(200);
          (res.body).should.be.a('object');
          done(err);
          return process.exit()
        });
    });
});

