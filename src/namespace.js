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
function namespace ( nsString, alternativeRoot ) {
	//nsString should be a string
	if ( typeof nsString !== 'string' ) {
		throw 'Namespace must be string but it is: "' + nsString + '"';
	}
    //make sure it is not ran with the new keyword because we need access to the global object
    if ( ( this !== undefined ) && (this instanceof namespace ) ) {
        throw 'This function is not supposed to be called with the "new" keyword';
    }
	//go through the structure of the namespace and make the necessary objects.
    var parts = nsString.split('.');
    //the root object is "this" which is the global object because this function is not supposed to be called with "new"
    // or as a part of another object. The user can override it with an alternative root object
    var currParent;
    switch ( typeof alternativeRoot ) {
        case 'undefined':
            currParent = this;
            break;
        case 'number':
        case 'string':
        case 'boolean':
        case 'function':
            currParent = alternativeRoot;
            break;
        case 'object':
            if ( alternativeRoot === null ) {
                throw 'Alternative root cannot be null';
            } else {
                currParent = alternativeRoot;
            }
            break;
        default:
            throw 'Alternative path cannot be of this type: ' + typeof alternativeRoot;
    }    //the following error can happen if the namespace() function is running in strict mode or the alternativeRoot is not defined
    if ( currParent === undefined ) {
        throw "Can't attach the namespace to something";
    }
	//now go through all parts of the namespace and make sure the hierarchy exists
    for ( var i = 0; i < parts.length; i++ ) {
        var part = parts[i];
        if ( part.length === 0 ) {
            continue;
        }
        //the first character can only be alphabetic, dollar sign or underscore
        if ( ! /^[a-z\$_]/i.test( part.charAt(0) ) ) {
            throw 'Identifier should start with a letter, underscore or dollar sign: "' + part + '"';
        }
        //if the above check passed, just check that the id is only comprised of alphanumeric, dollar and underscore characters
        if ( ! /^[\w\$_]+$/.test( part ) ) {
            throw 'Invalid identifier: "' + part + '"';
        }
        //so it is a valid id. If there is no such object, create it (even if this variable exists but isn't an object)
        if ( ( typeof currParent[part] !== 'object' ) || ( currParent[part] === null ) ) {
			currParent[part] = {};
		}
		//advance in the hierarchy
        currParent = currParent[part];
    }
    return currParent;
}