var q;

q = require('../');

describe('qmeme(meme, options, cb)', function() {
  it('should url meme not found error', function(done) {
    return q("I SHOULD NOT FIND PHRASE", {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }, function(e, url) {
      e.message.should.equal("Quick Meme Not Found");
      return done();
    });
  });
  return it('should return no username or password', function(done) {
    return q("FOO", {}, function(e, url) {
      e.message.should.equal("Quick Meme User and Password Required");
      return done();
    });
  });
});
