# Intro

Namespacejs is a simple and quick function for defining namespaces in Javascript. It can be used in Nodejs or Browsers.
It is written in [strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode) ("use strict") with fallback to non-strict mode.

```Javascript
namespace( 'com.userpixel.test' ).hello = function ( str ) {
    return 'Hello ' + str + '!';
}

com.userpixel.test.hello( 'world' ); //returns 'Hello world!'
```

#How does it work?

The idea is simple: every namespace is an object. The root of the namespaces is the global object.

#Tests

[QUnit](http://www.qunit.com) is used for testing Namespacejs. Please take a look at the namespacejs/test/test.js file to find out to learn more.