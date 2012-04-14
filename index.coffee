request = require 'request'
memeGenerator = 'http://version1.api.memegenerator.net/Instance_Create'
imageUri = 'http://images.memegenerator.net/instances'
languageCode = 'en'

instanceCreate = (form, cb) ->
  request memeGenerator, 
    form: form
    (e, r, b) ->
      result = JSON.parse(b)['result']
      if result? and result['instanceUrl']? and result['instanceImageUrl']? and result['instanceID']?
        instanceID = result['instanceID']
        instanceURL = result['instanceUrl']
        request instanceURL, (err, res, body) ->
          cb null, "#{imageUri}/#{instanceID}.jpg"

match = (input, exp) ->
  res = input.match(exp)
  [ res?[1] or null, res?[2] or null]

memes = require "#{__dirname}/phrases"

module.exports = (input, options ={}, cb) ->
  unless (options.username? and options.password?)
    return cb(new Error('Quick Meme User and Password Required'), null)
  options.languageCode ?= languageCode  

  for meme in memes
    [options.text0, options.text1] = match input, meme.phrase
    if options.text0? and options.text1?
      [ options.generatorID, options.imageID ] = [ meme.generatorID, meme.imageID ]
      return instanceCreate options, cb
  return cb(new Error('Quick Meme Not Found'), null)
  