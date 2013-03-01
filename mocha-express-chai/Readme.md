# Express + Mocha & Co

## Installation

```
npm i
```

Don't forget to install [`PhantomJS`](http://phantomjs.org/download.html) and [`Grunt`](http://gruntjs.com/blog/2013-02-18-grunt-0.4.0-released)

**Note**: `Grunt` is optional you can do all with `mocha` only

## Usage

```
npm test
```

or

```
mocha
```

or

```
grunt test
```

## Travis Badge

[![Build Status](https://secure.travis-ci.org/<GITHUB_USER>/<REPO_NAME>.png)](http://travis-ci.org/<GITHUB_USER>/<REPO_NAME>)

## Autotest

```
mocha -w
```
or

```
grunt watch
```

## Coverage

```
mocha -R html-cov > coverage.html
```
or

```
grunt coverage
```

## Test Documentation

```
mocha -R doc > doc.html
```
