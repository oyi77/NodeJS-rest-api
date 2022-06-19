let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('ALL Tutorials API Test', () => {
  it(':POST should add a tutorials on /tutorials post', function(done) {
    chai.request(server)
        .post('/api/tutorials')
        .send({
            'title': 'Cook Indomie',
            'description': 'How to Cook Indomie'
        })
        .end(function(err, res) {

            // the res object should have a status of 201
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('id');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('published');
            res.body.title.should.equal('Cook Indomie');
            res.body.description.should.equal('How to Cook Indomie');
            done();
        });
});
  it(':GET it should GET all the tutorials', (done) => {
    chai.request(server)
        .get('/api/tutorials')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
          done();
        });
  });
  it(':DELETE it should DELETE tutorial with matching id', (done) => {
    chai.request(server)
        .delete('/api/tutorials/2')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
          done();
        });
  });
  it(':PUT should update a tutorials on /tutorials post by matching id', function(done) {
    chai.request(server)
        .put('/api/tutorials/8')
        .send({
            'title': 'Cook Indomie',
            'description': 'How to Cook Indomie',
            'published': true
        })
        .end(function(err, res) {

            // the res object should have a status of 201
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('id');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('published');
            res.body.title.should.equal('Cook Indomie');
            res.body.description.should.equal('How to Cook Indomie');
            done();
        });
  });
  it(':PATCH should update a tutorial desctiption on /tutorials post by matching id', function(done) {
    chai.request(server)
        .put('/api/tutorials/10')
        .send({
            'description': 'How to Cook Supermie'
        })
        .end(function(err, res) {

            // the res object should have a status of 201
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('id');
            res.body.id.should.equal('10');
            done();
        });
  });

});