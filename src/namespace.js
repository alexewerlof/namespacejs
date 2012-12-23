/**
 * This function creates a namespace if it doesn't exist or returns one if it already exists.
 * It is very optimized and uses a cache to remember the last namespaces used.
 * Each id in the namespace can contain alphanumeric characters, underline and dollar sign
 * @throws string: if the nsString is not of type string or an id cannot be identified
 * @return an object that can be used for binding methods
 */
function namespace ( nsString ) {
    "use strict";
	//nsString should be a string
	if ( typeof nsString !== 'string' ) {
		throw 'Namespace must be string but it is: "' + nsString + '"';
	}
    //make sure it is not ran with the new keyword because we need access to the global object
    if ( this instanceof namespace ) {
        throw 'This function is not supposed to be called with the "new" keyword';
    }
    //check that the cache exists
    namespace._cache = namespace._cache || {};
    if ( namespace._cache[nsString] ) {
    	return namespace._cache[nsString];
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
    //cache the string and the resulting object
	namespace._cache[ nsString ] = currParent;
    return currParent;
}