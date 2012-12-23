/**
 * This function returns a Java-style namespace which is a series of nested objects.
 * It checks if the objects exist or if they need to be created. Then it returns the innermost object. The result
 * can be used directly to bind a function or variable to that object. The namespace comprises of one or more valid
 * Javascript identifiers separated with '.' (dot) character. For example 'abc' and '_abc$', 'a.b.c', 'ab.c4' and 'abc1'
 * are valid namespace identifiers. But '4c', '%', '_€' and 'abc,def' are invalid namespace identifiers.
 * For more examples please @see http://www.github.com/hanifbbz/namespacejs/test/test.js
 * After calling the namespace function, if no exception is thrown, it is guaranteed that the namespace hierarchy exists and
 * is comprised of objects. For more information @see http://www.github.com/hanifbbz/namespacejs/README.md
 * @throws string: if the nsString is not of type string or an id cannot be identified
 * @return an object that can be used for binding methods
 */
function namespace ( nsString ) {
    //"use strict";
	//nsString should be a string
	if ( typeof nsString !== 'string' ) {
		throw 'Namespace must be string but it is: "' + nsString + '"';
	}
    //make sure it is not ran with the new keyword because we need access to the global object
    if ( this instanceof namespace ) {
        throw 'This function is not supposed to be called with the "new" keyword';
    }
	//go through the structure of the namespace and make the necessary objects.
    var parts = nsString.split('.');
    //the root object is "this" which is the global object because this function is not supposed to be called with "new" or as a part of another object
    var currParent = this;
	//now go through all parts of the namespace and make sure the hierarchy exists
    for ( var i = 0; i < parts.length; i++ ) {
        var part = parts[i];
        if ( part.length === 0 ) {
            continue;
        }
        if ( ! /^[a-z\$\_]/i.test( part.charAt(0) ) ) {
            throw 'Identifier should start with a letter, underscore or dollar sign: "' + part + '"';
        }
        if ( ! /^[\w\$\_]+$/.test( part ) ) {
        	throw 'Invalid identifier: "' + part + '"';
        }
        //if there is no such object, create it
        if ( ( typeof currParent[part] !== 'object' ) || ( currParent[part] === null ) ) {
			currParent[part] = {};
		}
		//advance in the hierarchy
        currParent = currParent[part];
    }
    return currParent;
}