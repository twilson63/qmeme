q = require '../'

describe 'qmeme(meme, options, cb)', ->
  # it 'should return url', (done) ->
  #   q "I DONT ALWAYS TEST MY JAVASCRIPT BUT WHEN I DO I USE MOCHA", { username: process.env.USERNAME, password: process.env.PASSWORD }, (e, url) ->
  #     url.should.exist()
  #     done()
  it 'should url meme not found error', (done) ->
    q "I SHOULD NOT FIND PHRASE", { username: process.env.USERNAME, password: process.env.PASSWORD }, (e, url) ->
      e.message.should.equal("Quick Meme Not Found")
      done()
  it 'should return no username or password', (done) ->
    q "FOO", {}, (e, url) ->
      e.message.should.equal("Quick Meme User and Password Required")
      done()