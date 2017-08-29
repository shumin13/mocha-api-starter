const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('GET /', function() {
  it('should response 200', function(done) {
    request(app).get('/').expect(200, done)
  })
})

describe('/about', function() {
  it('should response 200', function(done) {
    request(app).get('/about').expect(404, done)
  })
})

describe('CRUD taco test', function() {
  describe('GET /tacos', function() {
    it('should response 200', function(done) {
      request(app).get('/tacos').end(function(err, response) {
        console.log('response body', response.body)
        expect(response.body).to.be.an('array')
        done()
      })
    })
  })

  describe('Post /tacos', function() {
    it('should create new taco', function(done) {
      request(app).post('/tacos').send({
        name: 'Parmesan Fiesta',
        amount: 1000
      })
      .end(function(err, response){
        done()
      })
    })
  })
})

  //     expect(response.status).to.equal(200)
  //     expect(response.body).to.be.an('array')
  //
  //     if (response.body.length) {
  //       expect(response.body([0]).to.have.property('amount')
  //     })
  //
  //     })
  //   })
  // })

// })