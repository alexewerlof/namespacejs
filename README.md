# Intro

Namespacejs is a simple and quick function for defining namespaces in Javascript.

```Javascript
namespace( 'com.userpixel.test' ).hello = function ( str ) {
    return 'Hello ' + str + '!';
}

com.userpixel.test.hello( 'world' ); //returns 'Hello world!'
```

#How does it work?

The namespace can be

#Tests

[QUnit](http://www.qunit.com) is used for testing Namespacejs. Please take a look at the namespacejs/test/test.js file to find out to learn more.