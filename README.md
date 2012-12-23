Intro
=====

Namespacejs is a simple and quick function for defining namespaces in Javascript. It can be used in Nodejs or Browsers.
It has an intuitive syntax and can be easily added current projects. The whole library is just one function which is
under 1KB when [minified][6].

```Javascript
namespace( 'com.userpixel.example1' ).hello = function ( str ) {
    return 'Hello ' + str + '!';
}

namespace( 'com.userpixel.example2' ).hello = function ( str ) {
    return 'Hej ' + str + '!';
}

com.userpixel.example1.hello( 'world' ); //returns 'Hello world!'
com.userpixel.example2.hello( 'värld' ); //returns 'Hej värld!'

hello( 'world' ); //fails because hello() doesn't exist in the global object. It's in its own namespace.
```

## Which files do I need?

From all files in this repository you only need one to use Namespacejs in production: [src -> namespace.js][3]. There is
a [minified version][6] too.
This file contains a single function named **namespace()**. You can just copy that to your code and use it.

***

How does it work?
=================

The idea is simple: every namespace is an object. So you can write codes that look like packages in Java. For example:

    var hello = com.userpixel.example.hello( 'world' );

For this namespace a series of nested objects are created (if necessary):

```Javascript
var org = {
    userpixel = {
        example = {
            hello : function () ( str ) {
                return 'Hello ' + str + '!';
            }
        }
    }
}
```

If any of these objects exist, they will be used instead of creating a new one. Therefore, it is possible to add new
functions to an existing namespace. The algorithm for namespace object creation looks something like this:

```Javascript
//assuming that the code is running in the browser, global object is window
org = typeof window.['org'] === 'object' ? org || {}
org.userpixel = typeof org.userpixel === 'object' ? org.userpixel || {}
org.userpisel.test = typeof org.userpixel.test === 'object' ? org.userpixel.test || {}
```

To put is simply, the task for namespace() function is to make sure this chain of names exists and is comprised of objects.
After a call to namespace() function, you can simply use the namespace without needing to call the function again.
Of course the [actual algorithm][3] is more sophisticated. It parses the string trying
to find all the identifiers in the namespace and then creates variables for each of them if necessary. Therefore all the
identifiers of the namespace should be valid in Javascript. For example:

namespace( '' ); //valid: returns the global object
namespace( 'a' ); //valid: returns object a in global object
namespace( 'abc.def' );//valid
namespace( '1bc.def' );//invalid: 1bc is not a valid Javascript identifier
namespace( '&' );//invalid id
namespace( '$' );//a valid id but keep in mind that it will replace the global $ with an object if it isn't
namespace( '_abc' );//valid
namespace( 'ABC' );//valid but conventionally it is recommended to write the namespaces all in small letters ie: 'abc'

**Note:** if any of the names in the object hierarcy exists but isn't an object, it will be replaced silently with an empty object.
For example:

```Javascript
namespace( 'com.userpixel.example' ).hello = function ( str ) {
    return 'Hello ' + str + '!';
}
namespace( 'com.userpixel.example.hello' ).swedish = function ( str ) {
    return 'Hej ' + str + '!';
}
```
The reason is simple: all the names in the namespace string must be objects. Just like java, a string like `org.userpixel.example.hello`
can either be a namespace or a function, not both.

***

Tests
=====

[QUnit][5] is used for testing Namespacejs. Please take a look at the [test.js][4] file to find out to learn more.
You can [run the tests][7] in your browser too.

[2]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[3]: https://github.com/hanifbbz/namespacejs/blob/master/src/namespace.js
[4]: https://github.com/hanifbbz/namespacejs/blob/master/test/test.js
[5]: http://www.qunit.com
[6]: https://github.com/hanifbbz/namespacejs/blob/master/src/namespace.min.js
[7]: http://htmlpreview.github.com/?https://github.com/hanifbbz/namespacejs/blob/master/test/test.html