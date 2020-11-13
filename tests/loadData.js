const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
var faker = require('faker');

chai.should();

chai.use(chaiHttp);

describe('Loading 50 user data to database..', () => {
    it('It load 50 user data', (done) => {
      for(var i=1;i<50;i++){
        chai
        .request(server)
        .post('/user/create')
        .send({'username':faker.internet.userName() ,'password':faker.internet.password(),'first_name':faker.name.firstName(),'last_name':faker.name.lastName(),'email':faker.internet.email()})
        .end((err, res) => {
            res.should.have.status(200);
            (res.body).should.be.a('object');
        })}
        done();
        setTimeout((function() {
            return process.exit()
        }), 1500);
    });
});

// describe('Loading 50 books data to database..', () => {
//     it('It load 50 user data', (done) => {
//       for(var i=1;i<50;i++){
//         chai
//         .request(server)
//         .put('/book/create')
//         .send({  'name':faker.name.findName() , 
//                  'author':faker.name.findName(),
//                  'price':faker.finance.amount(),
//                  'description':faker.lorem.sentence(),
//                  'genre':faker.company.catchPhrase(),
//             })

//         .end((err, res) => {
//         res.should.have.status(200);
//         (res.body).should.be.a('object');
//         })}
//         done();
//         setTimeout((function() {
//             return process.exit()
//         }), 1500);
//     });
// });