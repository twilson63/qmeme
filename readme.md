# QMEME

A library that regexps meme phrases and turns them in to memes.

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