# QMEME

[![build
status](https://secure.travis-ci.org/twilson63/qmeme.png)](http://travis-ci.org/twilson63/qmeme)

A library creates a quickmeme from one a few expressions:

* Y U NO `text`
* I don't always [something] but when i do `text`
* `text` ORLY?
* `text` (SUCCESS|NAILED IT)
* `text` ALL the [things]
* `text` TOO DAMN [high]
* Good news everyone! [news]
* Not sure if `text` or `text`
* Generates Futurama Fry
* Yo dawg `text` so `text`

# Install

``` sh
npm install qmeme
```

# Usage

``` javascript
var qmeme = require('qmeme');

qmeme('GOOD NEWS EVERYONE, QMEME IS HERE!', {username: 'foo', password: 'bar'}, function(err, url) {
  console.log(url);
});
```

``` coffeescript
qmeme = require("qmeme")

qmeme "GOOD NEWS EVERYONE, QMEME IS HERE!",
  username: "foo"
  password: "bar"
  (err, url) ->
    console.log url
```

# License

see LICENSE

# Contribution

everyone is welcome to contribute. patches, bugfixes, new features

1. create an issue on github so the community can comment on your idea
2. fork `qmeme` in github
3. create a new branch `git checkout -b my_branch`
4. create tests for the changes you made
5. make sure you pass both existing and newly inserted tests
6. commit your changes
7. push to your branch `git push origin my_branch`
8. create an pull request