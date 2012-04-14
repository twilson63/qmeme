var imageUri, instanceCreate, languageCode, match, memeGenerator, memes, request;

request = require('request');

memeGenerator = 'http://version1.api.memegenerator.net/Instance_Create';

imageUri = 'http://images.memegenerator.net/instances';

languageCode = 'en';

instanceCreate = function(form, cb) {
  return request(memeGenerator, {
    form: form
  }, function(e, r, b) {
    var instanceID, instanceURL, result;
    result = JSON.parse(b)['result'];
    if ((result != null) && (result['instanceUrl'] != null) && (result['instanceImageUrl'] != null) && (result['instanceID'] != null)) {
      instanceID = result['instanceID'];
      instanceURL = result['instanceUrl'];
      return request(instanceURL, function(err, res, body) {
        return cb(null, "" + imageUri + "/" + instanceID + ".jpg");
      });
    }
  });
};

match = function(input, exp) {
  var res;
  res = input.match(exp);
  return [(res != null ? res[1] : void 0) || null, (res != null ? res[2] : void 0) || null];
};

memes = require("" + __dirname + "/phrases");

module.exports = function(input, options, cb) {
  var meme, _i, _len, _ref, _ref2;
  if (options == null) options = {};
  if (!((options.username != null) && (options.password != null))) {
    return cb(new Error('Quick Meme User and Password Required'), null);
  }
  if (options.languageCode == null) options.languageCode = languageCode;
  for (_i = 0, _len = memes.length; _i < _len; _i++) {
    meme = memes[_i];
    _ref = match(input, meme.phrase), options.text0 = _ref[0], options.text1 = _ref[1];
    if ((options.text0 != null) && (options.text1 != null)) {
      _ref2 = [meme.generatorID, meme.imageID], options.generatorID = _ref2[0], options.imageID = _ref2[1];
      return instanceCreate(options, cb);
    }
  }
  return cb(new Error('Quick Meme Not Found'), null);
};
