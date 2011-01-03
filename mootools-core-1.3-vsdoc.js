/*
Intellisense for MooTools - My Object Oriented JavaScript Tools.

License:
MIT-style license.

Original JS Copyright:
Copyright (c) 2006-2008 [Valerio Proietti](http://mad4milk.net/).

Original Code & Documentation:
[The MooTools development team](http://mootools.net/developers/).

This Documentation:
Darren Waddell / [The MooTools development team](http://mootools.net/developers/) 2011

This file has been commented to support Visual Studio Intellisense, and is not functional.
It must be included alongside a real, working copy of MooTools 1.3.

Includes documentation for the entire MooTools Core. It will not be able to detect if you have
not included the whole package, for instance, if you do not include Swiff in your build, it
will still be listed in Intellisense.

It does not include support for the 1.2 Compatibility Layer.
*/

/*
CORE
*/
var typeOf = function(obj){
	/// <summary>
	/// Returns the type of object that matches the item passed in. Returns one of:
	/// <para></para>
	/// <para>'element' - (string) If object is a DOM element node.</para>
	/// <para>'textnode' - (string) If object is a DOM text node.</para>
	/// <para>'whitespace' - (string) If object is a DOM whitespace node.</para>
	/// <para>'arguments' - (string) If object is an arguments object.</para>
	/// <para>'array' - (string) If object is an array.</para>
	/// <para>'object' - (string) If object is an object.</para>
	/// <para>'string' - (string) If object is a string.</para>
	/// <para>'number' - (string) If object is a number.</para>
	/// <para>'date' - (string) If object is a date.</para>
	/// <para>'boolean' - (string) If object is a boolean.</para>
	/// <para>'function' - (string) If object is a function.</para>
	/// <para>'regexp' - (string) If object is a regular expression.</para>
	/// <para>'class' - (string) If object is a Class (created with new Class, or the extend of another class).</para>
	/// <para>'collection' - (string) If object is a native htmlelements collection, such as childNodes, getElementsByTagName, etc.</para>
	/// <para>'window' - (string) If object is the window object.</para>
	/// <para>'document' - (string) If object is the document object.</para>
	/// <para>'event' - (string) If object is an event.</para>
	/// <para>null - If object is undefined, null, NaN or none of the above.</para>
	/// <para></para>
	/// </summary>
	/// <param name="obj">The object to inspect.</param>
	/// <returns type="Mixed" />
};
var instanceOf = function(item, object){
	/// <summary>
	/// Checks to see if an object is an instance of a particular Type.
	/// <para></para>
	/// <para>Returns whether or not the item is an instance of the object.</para>
	/// <para></para>
	/// </summary>
	/// <param name="item">Item</param>
	/// <param name="object">Object</param>
	/// <returns type="Boolean" />
};

Array.each = function(iterable, fn, bind){
	/// <summary>Used to iterate through arrays, or iterables that are not regular arrays, such as built in getElementsByTagName calls or arguments of a function.</summary>
	/// <param name="iterable" type="Array">The array to iterate through.</param>
	/// <param name="fn" type="Function">The function to test for each element. Has three parameters; The current item, the current item's index, and the iterable you are iterating through.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' within the function.</param>
};
Array.clone = function(array){
	/// <summary>Returns a copy of the passed array.</summary>
	/// <param name="array" type="Array">The array you wish to copy.</param>
	/// <returns type="Array" />
};
Array.from = function(item){
	/// <summary>
	/// If the variable passed in is an array, returns the array. Otherwise, returns an array with the only element being the variable passed in.
	/// </summary>
	/// <param name="item">Any type of variable.</param>
	/// <returns type="Array" />
};

String.from = function(item){
	/// <summary>
	/// Returns the passed parameter as a String.
	/// </summary>
	/// <param name="item">The argument to return as a String.</param>
	/// <returns type="String" />
};
String.uniqueID = function(){
	/// <summary>Generates a unique ID.</summary>
	/// <returns type="String" />
};

Number.from = function(item){
	/// <summary>
	/// Returns the passed parameter as a Number, or null if not a number.
	/// </summary>
	/// <param name="item">The argument to return as a Number.</param>
	/// <returns type="Number" />
};
Number.random = function(min, max){
	/// <summary>Returns a random integer between the two passed in values.</summary>
	/// <param name="min" type="Number">The minimum value (inclusive)</param>
	/// <param name="max" type="Number">The maximum value (inclusive)</param>
	/// <returns type="Number" />
};

Function.from = function(item){
	/// <summary>
	/// If the passed argument is a function, it will return itself. Otherwise, it will return a function that returns the passed argument.
	/// </summary>
	/// <param name="item">If this argument is a function, it will simply return itself. Otherwise, an object you wish to convert into a function that returns the argument.</param>
	/// <returns type="Function" />
};

Object.each = function(object, fn, bind){
	/// <summary>Used to iterate through an object.</summary>
	/// <param name="object" type="Object">The object to iterate through.</param>
	/// <param name="fn" type="Function">The function to test for each element. Has three parameters; The current item, the current item's index, and the object you are iterating through.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' within the function.</param>
};
Object.merge = function(args){
	/// <summary>Merges any number of objects recursively without referencing them or their sub-objects.</summary>
	/// <param name="args">Any number of objects.</param>
	/// <returns type="Object" />
};
Object.clone = function(object){
	/// <summary>Returns a copy of the passed object.</summary>
	/// <param name="object" type="Object">The object you wish to copy.</param>
	/// <returns type="Object" />
};
Object.append = function(original, extension){
	/// <summary>Copies all the properties from the second object passed in to the first object passed in.</summary>
	/// <param name="original" type="Object">The object to be extended.</param>
	/// <param name="extension" type="Object">The object whose properties will be copied to original.</param>
	/// <returns type="Object" />
};

/*
ARRAY
*/
Array.prototype.each = function(fn, bind){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.invoke = function(method, args){
	/// <summary>
	/// Returns a new array with the named method applied to the array's contents.
	/// <para></para>
	/// <para>The method that is invoked is a method of each of the items. If the method does not exist, then an error will be thrown.</para>
	/// </summary>
	/// <param name="method" type="String">The method to apply to each item in the array.</param>
	/// <param name="args">Any number of arguments to pass to the named method.</param>
	/// <returns type="Array" />
};
Array.prototype.every = function(fn, bind){
	/// <summary>Returns true if every element in the array satisfies the provided testing function. This method is provided only for browsers without native Array:every support.</summary>
	/// <param name="fn" type="Function">The function to test for each element.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Boolean" />
};
Array.prototype.filter = function(fn, bind){
	/// <summary>Creates a new array with all of the elements of the array for which the provided filtering function returns true. This method is provided only for browsers without native Array:filter support.</summary>
	/// <param name="fn" type="Function">The function to test each element of the array. This function is passed the item and its index in the array.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Array" />
};
Array.prototype.clean = function(){
	/// <summary>Creates a new array with all of the elements of the array which are defined (i.e. not null or undefined).</summary>
	/// <returns type="Array" />
};
Array.prototype.indexOf = function(item, from){
	/// <summary>Returns the index of the first element within the array equal to the specified value, or -1 if the value is not found. This method is provided only for browsers without native Array:indexOf support.</summary>
	/// <param name="item">The item to search for in the array.</param>
	/// <param name="from" type="Number" optional="true">The index of the array at which to begin the search.</param>
	/// <returns type="Number" />
};
Array.prototype.map = function(fn, bind){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.some = function(fn, bind){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.associate = function(keys){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.link = function(object){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.contains = function(item, from){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.append = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.getLast = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.getRandom = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.include = function(item){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.combine = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.erase = function(item){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.empty = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.flatten = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.pick = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.hexToRgb = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Array.prototype.rgbToHex = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};

/*
STRING
*/
String.prototype.test = function(regex, params){
	/// <summary>Searches for a match between the string and a regular expression.</summary>
	/// <param name="regex">The string or regular expression you want to match the string with.</param>
	/// <param name="params" type="String" optional="true">If first parameter is a string, any parameters you want to pass to the regular expression ('g' has no effect).</param>
	/// <returns type="Boolean" />
};
String.prototype.contains = function(string, separator){
	/// <summary>Checks to see if the string passed in is contained in this string. If the separator parameter is passed, will check to see if the string is contained in the list of values separated by that parameter.</summary>
	/// <param name="string" type="String">The string to search for.</param>
	/// <param name="separator" type="String" optional="true">The string that separates the values in this string (e.g. Element classNames are separated by a ' ').</param>
	/// <returns type="Boolean" />
};
String.prototype.trim = function(){
	/// <summary>Trims the leading and trailing spaces off a string.</summary>
	/// <returns type="String" />
};
String.prototype.clean = function(){
	/// <summary>Removes all extraneous whitespace from a string and trims it.</summary>
	/// <returns type="String" />
};
String.prototype.camelCase = function(){
	/// <summary>Converts a hyphenated string to a camelcased string.</summary>
	/// <returns type="String" />
};
String.prototype.hyphenate = function(){
	/// <summary>Converts a camelcased string to a hyphenated string.</summary>
	/// <returns type="String" />
};
String.prototype.capitalize = function(){
	/// <summary>Converts the first letter of each word in a string to uppercase.</summary>
	/// <returns type="String" />
};
String.prototype.escapeRegExp = function(){
	/// <summary>Escapes all regular expression characters from the string.</summary>
	/// <returns type="String" />
};
String.prototype.toInt = function(base){
	/// <summary>Parses this string and returns a number of the specified radix or base.</summary>
	/// <param name="base" type="Number" optional="true">The base to use (defaults to 10).</param>
	/// <returns type="Number" />
};
String.prototype.toFloat = function(){
	/// <summary>Parses this string and returns a floating point number.</summary>
	/// <returns type="Number" />
};
String.prototype.hexToRgb = function(array){
	/// <summary>Converts a hexadecimal color value to RGB. Input string must be in one of the following hexadecimal color formats (with or without the hash). '#ffffff', #fff', 'ffffff', or 'fff'</summary>
	/// <param name="array" type="Boolean" optional="true">If true is passed, will output an array (e.g. [255, 51, 0]) instead of a string (e.g. "rgb(255,51,0)").</param>
};
String.prototype.rgbToHex = function(array){
	/// <summary>Converts an RGB color value to hexadecimal. Input string must be in one of the following RGB color formats. "rgb(255, 255, 255)", or "rgba(255, 255, 255, 1)"</summary>
	/// <param name="array" type="Boolean" optional="true">If true is passed, will output an array (e.g. ['ff', '33', '00']) instead of a string (e.g. "#ff3300").</param>
};
String.prototype.substitute = function(object, regexp){
	/// <summary>Substitutes keywords in a string using an object/array. Removes undefined keywords and ignores escaped keywords.</summary>
	/// <param name="object" type="Object">The key/value pairs used to substitute a string.</param>
	/// <param name="regexp" type="RegExp" optional="true">The regexp pattern to be used in the string keywords, with global flag. Defaults to /\?{([^}]+)}/g.</param>
	/// <returns type="String" />
};

/*
NUMBER
*/
Number.prototype.limit = function(min, max){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.round = function(precision){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.times = function(fn, bind){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.toFloat = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.toInt = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.abs = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.acos = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.asin = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.atan = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.atan2 = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.ceil = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.cos = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.exp = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.floor = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.log = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.max = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.min = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.pow = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.sin = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.sqrt = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
Number.prototype.tan = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};

/*
FUNCTION
*/
Function.attempt = function(functions){
	/// <summary>Tries to execute a number of functions. Returns immediately the return value of the first non-failed function without executing successive functions, or null.</summary>
	/// <param name="functions">Any number of functions to execute.</param>
};
Function.prototype.extend = function(key, value){
	/// <summary>
	/// Add methods to a function.
	/// <para></para>
	/// <para>'extend' adds the method or property to a single instance. To extend the prototype and all instances, use 'implement' instead.</para>
	/// </summary>
	/// <param name="key">The key of the function method.</param>
	/// <param name="value">The function method or another value of the function.</param>
};
Function.prototype.implement = function(key, value){
	/// <summary>
	/// Add methods to the prototype.
	/// <para></para>
	/// <para>'implement' extends the prototype and all instances, use 'extend' instead to extend a single instance.</para>
	/// </summary>
	/// <param name="key">The key of the prototype.</param>
	/// <param name="value">The function or another value of the prototype.</param>
};
Function.prototype.attempt = function(args, bind){
	/// <summary>Tries to execute a single function. Returns immediately the return value of the function if it does not fail, or null.</summary>
	/// <param name="args">An argument, or array of arguments to run the function with.</param>
	/// <param name="bind" type="Object" optional="true">The object that the "this" of the function will refer to.</param>
};
Function.prototype.pass = function(args, bind){
	/// <summary>Returns a closure with arguments and bind.</summary>
	/// <param name="args" optional="true">The arguments to pass to the function (must be an array if passing more than one argument).</param>
	/// <param name="bind" type="Object" optional="true">The object that the "this" of the function will refer to.</param>
	/// <returns type="Function" />
};
Function.prototype.bind = function(bind, args){
	/// <summary>Changes the scope of this within the target function to refer to the bind parameter.</summary>
	/// <param name="bind" type="Object">The object that the "this" of the function will refer to.</param>
	/// <param name="args" optional="true">The arguments to pass to the function (must be an array if passing more than one argument).</param>
};
Function.prototype.delay = function(delay, bind, args){
	/// <summary>
	/// Delays the execution of a function by a specified duration.
	/// <para></para>
	/// <para>Returns the timeout id (for clearing delays).</para>
	/// </summary>
	/// <param name="delay" type="Number">The duration to wait (in milliseconds).</param>
	/// <param name="bind" type="Object" optional="true">The object that the "this" of the function will refer to.</param>
	/// <param name="args" optional="true">The arguments passed (must be an array if the arguments are greater than one).</param>
	/// <returns type="Number" />
};
Function.prototype.periodical = function(period, bind, args){
	/// <summary>
	/// The duration of the intervals between executions.
	/// <para></para>
	/// <para>Returns the timeout id (for clearing the periodical).</para>
	/// </summary>
	/// <param name=""></param>
	/// <param name="bind" type="Object" optional="true">The object that the "this" of the function will refer to.</param>
	/// <param name="args" optional="true">The arguments passed (must be an array if the arguments are greater than one).</param>
	/// <returns type="Number" />
};

/*
OBJECT
*/
Object.subset = function(object, keys){
	/// <summary>Get a subset of an object.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="keys" type="Array">An array with the keys.</param>
	/// <returns type="Object" />
};
Object.map = function(object, fn, bind){
	/// <summary>Creates a new map with the results of calling a provided function on every value in the map.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="fn" type="Function">The function to produce an element of the Object from an element of the current one.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Object" />
};
Object.filter = function(object, fn, bind){
	/// <summary>Creates a new object with all of the elements of the object for which the provided filtering function returns true.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="fn" type="Function">The function to test each element of the Object. This function is passed the value and its key in the Object.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Object" />
};
Object.every = function(object, fn, bind){
	/// <summary>Returns true if every value in the object satisfies the provided testing function.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="fn" type="Function">The function to test each element of the Object. This function is passed the value and its key in the Object.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Boolean" />
};
Object.some = function(){
	/// <summary>Returns true if at least one value in the object satisfies the provided testing function.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="fn" type="Function">The function to test each element of the Object. This function is passed the value and its key in the Object.</param>
	/// <param name="bind" type="Object" optional="true">The object to use as 'this' in the function.</param>
	/// <returns type="Boolean" />
};
Object.keys = function(object){
	/// <summary>Returns an array containing all the keys, in the same order as the values returned by Object:values.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <returns type="Array" />
};
Object.values = function(object){
	/// <summary>Returns an array containing all the values, in the same order as the keys returned by Object:keys.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <returns type="Array" />
};
Object.getLength = function(object){
	/// <summary>Returns the number of keys in the object.</summary>
	/// <param name="object" type="Object">The object.</param>
	/// <returns type="Number" />
};
Object.keyOf = function(object, item){
	/// <summary>
	/// Returns the key of the specified value. Synonymous with Array:indexOf.
	/// <para></para>
	/// <para>If the object has a specified item in it, it will return the key of that item. Otherwise, returns false.</para>
	/// </summary>
	/// <param name="object" type="Object">The object.</param>
	/// <param name="item">The item to search for in the object.</param>
};
Object.contains = function(object, value){
	/// <summary>Tests for the presence of a specified value in the object.</summary>
	/// <param name="object"type="Object">The object.</param>
	/// <param name="value">The value to search for in the Object.</param>
	/// <returns type="Boolean" />
};
Object.toQueryString = function(object){
	/// <summary>Generates a query string from key/value pairs in an object and URI encodes the values.</summary>
	/// <param name="object"type="Object">The object.</param>
	/// <returns type="String" />
};

/*
EVENT
*/
var Event = function(event, win){
	/// <summary>
	/// An Event object. Contains the following properties:
	/// <para></para>
	/// <para>page.x - (number) The x position of the mouse, relative to the full window.</para>
	/// <para>page.y - (number) The y position of the mouse, relative to the full window.</para>
	/// <para>client.x - (number) The x position of the mouse, relative to the viewport.</para>
	/// <para>client.y - (number) The y position of the mouse, relative to the viewport.</para>
	/// <para>rightClick - (boolean) True if the user clicked the right mousebutton</para>
	/// <para>wheel - (number) The amount of third button scrolling.</para>
	/// <para>relatedTarget - (element) The event related target, NOT extended with '$'.</para>
	/// <para>target - (element) The event target, not extended with '$' for performance reasons.</para>
	/// <para>code - (number) The keycode of the key pressed.</para>
	/// <para>key - (string) The key pressed as a lowercase string. key can be 'enter', 'up', 'down', 'left', 'right', 'space', 'backspace', 'delete', and 'esc'.</para>
	/// <para>shift - (boolean) True if the user pressed the shift key.</para>
	/// <para>control - (boolean) True if the user pressed the control key.</para>
	/// <para>alt - (boolean) True if the user pressed the alt key.</para>
	/// <para>meta - (boolean) True if the user pressed the meta key.</para>
	/// <para></para>
	/// </summary>
	/// <param name="event" type="Event">An HTMLEvent object.</param>
	/// <param name="win" type="window" optional="true">The context of the Event. Defaults to 'window'.</param>
	/// <returns type="Event" />
};
Event.prototype = {
	page: { x: 1, y: 1 },
	client: { x: 1, y: 1 },
	rightClick: false,
	wheel: 1,
	relatedTarget: new Element(),
	target: new Element(),
	code: 1,
	key: "",
	shift: false,
	control: false,
	alt: false,
	meta: false,
	stop: function(){
		/// <summary>Stop an Event from propagating and also executes preventDefault.</summary>
		/// <returns type="Event" />
	},
	stopPropagation: function(){
		/// <summary>Cross browser method to stop the propagation of an event (this stops the event from bubbling up through the DOM).</summary>
		/// <returns type="Event" />
	},
	preventDefault: function(){
		/// <summary>Cross browser method to prevent the default action of the event.</summary>
		/// <returns type="Event" />
	}
};

/*
BROWSER
*/
var Browser = {
	Features: {
		xpath: false,
		air: false,
		query: false,
		json: false,
		xhr: false
	},
	Request: false,
	Name: {
		ie: false, ie6: false, ie7: false, ie8: false, ie9: false,
		firefox: false, firefox2: false, firefox3: false, firefox4: false,
		safari: false, safari3: false, safari4: false, safari5: false,
		chrome: false,
		opera: false
	},
	Platform: {
		mac: false,
		win: false,
		linux: false,
		ios: false,
		android: false,
		webos: false,
		other: false,
		name: ""
	},
	Flash: false
};

/*
CLASS
*/
var Class = function(properties){
	/// <summary>
	/// Creates a new MooTools Class. Accepts an object of methods and properties for the Class, and some special properties:
	/// <para></para>
	/// <para>Extends: Pass in the name of, or an array of, Classes you wish to extend.</para>
	/// <para></para>
	/// <para>Implements: Pass in the name of, or an array of, Classes. This Class instance will get all their methods and properties.</para>
	/// <para></para>
	/// <para>initialize(): The initialize function will be the constructor for this class when new instances are created.</para>
	/// <para></para>
	/// </summary>
	/// <param name="properties" type="Object">The collection of properties that apply to the Class. Also accepts some special properties such as Extends, Implements, and initialize.</param>
	/// <returns type="Class" />
};

/*
ELEMENT, ELEMENT.STYLES, ELEMENT.EVENT, ELEMENT.DIMENSIONS
*/
var Element = function(type, properties){
	/// <summary>Creates a new Element of the type passed in.</summary>
	/// <param name="type" type="String">The tag name for the Element to be created, or an actual DOM element or a CSS selector.</param>
	/// <param name="properties" type="Object" optional="true">Calls the Single Argument version of Element:set with the properties object passed in.</param>
	/// <returns type="Element" />
};

var $ = function(id){
	/// <summary>The $ function has a dual purpose: Getting the element by its id, and making an element in Internet Explorer "grab" all the Element methods.</summary>
	/// <param name="id" type="String">The ID of the element to grab (and extend in IE)</param>
	/// <returns type="Element" />
};
var $$ = function(selector){
	/// <summary>
	/// Selects and extends DOM elements. Return an Elements instance. The Element instance returned is an array-like object,
	/// supporting every Array method and every Element method.
	/// </summary>
	/// <returns type="Element" />
};

Element.prototype = {
	getElement: function(selector){
		/// <summary>Gets the first descendant element matching the passed CSS selector. Returns null if not matched.</summary>
		/// <param name="selector" type="String">The CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getElements: function(){
		/// <summary>Gets all descendant elements matching the passed CSS selector. Returns an Elements array, which can be empty if nothing is found.</summary>
		/// <param name="selector" type="String">The CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getElementById: function(id){
		/// <summary>Gets the element with the specified id found inside the current Element. Returns null if not found.</summary>
		/// <param name="id" type="String">The ID of the element to find.</param>
		/// <returns type="Element" />
	},
	set: function(){
		/// <summary></summary>
		/// <returns type="Element" />
	},
	get: function(){
		/// <summary></summary>
		/// <returns type="Element" />
	},
	erase: function(){
		/// <summary></summary>
		/// <returns type="Element" />
	},
	match: function(match){
		/// <summary>Tests this Element to see if it matches the argument passed in.</summary>
		/// <param name="match">Either a CSS selector or Element instance to check against.</param>
		/// <returns type="Boolean" />
	},
	contains: function(el){
		/// <summary>Checks all descendants of this Element for a match.</summary>
		/// <param name="el">Either an Element reference, or an ID.</param>
		/// <returns type="Boolean" />
	},
	inject: function(el, where){
		/// <summary>Injects, or inserts, the Element at a particular place relative to the Element's children (specified by the second the argument).</summary>
		/// <param name="el">Can be the id of an element or an element.</param>
		/// <param name="where" type="String" optional="true">The place to inject this Element. Can be 'top', 'bottom', 'after', or 'before'. Defaults to 'bottom'.</param>
		/// <returns type="Element" />
	},
	grab: function(el, where){
		/// <summary>Appends the Element at a particular place relative to the Element's children (specified by the where parameter).</summary>
		/// <param name="el">Can be the id of an element or an element.</param>
		/// <param name="where" type="String" optional="true">The place to append this Element. Can be 'top' or 'bottom'. Defaults to 'bottom'.</param>
		/// <returns type="Element" />
	},
	adopt: function(el, others){
		/// <summary>Inserts the passed element(s) inside the Element (which will then become the parent element).</summary>
		/// <param name="el">The id of an element, an Element, or an array of elements.</param>
		/// <param name="others" optional="true">Any number of additional elements, ids or arrays</param>
		/// <returns type="Element" />
	},
	wraps: function(el, where){
		/// <summary>The Element is moved to the position of the passed element and becomes the parent, wrapping around.</summary>
		/// <param name="el">The ID or Element to wrap around.</param>
		/// <param name="where" type="String" optional="true">Defaults to 'bottom'. The place to insert the passed element. Can be 'top' or 'bottom'.</param>
		/// <returns type="Element" />
	},
	appendText: function(text, where){
		/// <summary>Works like Element:grab, but instead of accepting an id or an element, it only accepts text. A text node will be created inside this Element, in either the top or bottom position.</summary>
		/// <param name="text" type="String">The text to append.</param>
		/// <param name="where" type="String" optional="true">The place to append this Element. Can be 'top' or 'bottom'. Defaults to 'bottom'.</param>
		/// <returns type="Element" />
	},
	dispose: function(){
		/// <summary>Removes the Element from the DOM. Returns the element you're removing; handy if you want to inject it back. If you don't need to keep it, use Element:destroy instead.</summary>
		/// <returns type="Element" />
	},
	clone: function(keepcontents, keepID){
		/// <summary>Clones the Element and returns the cloned one.</summary>
		/// <param name="keepcontents" type="Boolean" optional="true">Defaults to true. When set to false the Element's contents are not cloned.</param>
		/// <param name="keepID" type="Boolean" optional="true">Defaults to false. When true the cloned Element keeps the id attribute, if present. Same goes for any of the cloned childNodes.</param>
		/// <returns type="Element" />
	},
	replaces: function(element){
		/// <summary>Replaces the passed Element with this Element.</summary>
		/// <param name="element">Can either be an ID or an Element.</param>
		/// <returns type="Element" />
	},
	hasClass: function(classname){
		/// <summary>Checks to see if an element has a class.</summary>
		/// <param name="classname" type="String">The classname to test.</param>
		/// <returns type="Boolean" />
	},
	addClass: function(classname){
		/// <summary>Adds a class to an element, if the element does not already have it.</summary>
		/// <param name="classname" type="String">The class to add.</param>
		/// <returns type="Element" />
	},
	removeClass: function(classname){
		/// <summary>Removes a class from an element.</summary>
		/// <param name="classname" type="String">The class to remove.</param>
		/// <returns type="Element" />
	},
	toggleClass: function(classname){
		/// <summary>Adds or removes the passed in class name to the Element, depending on whether or not it's already present.</summary>
		/// <param name="classname" type="String">The class to add or remove.</param>
		/// <returns type="Element" />
	},
	getPrevious: function(selector){
		/// <summary>Returns the previous sibling of the Element, null if not found.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getAllPrevious: function(selector){
		/// <summary>Returns all previous siblings of the Element.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getNext: function(selector){
		/// <summary>Returns the next sibling of the Element, null if not found.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getAllNext: function(selector){
		/// <summary>Returns all next siblings of the Element.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getFirst: function(selector){
		/// <summary>Gets the first child element. Returns null if not found.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getLast: function(selector){
		/// <summary>Gets the last child element. Returns null if not found.</summary>
		/// <param name="selector" type="String" optional="true">Optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getParent: function(selector){
		/// <summary>Gets the Element's parent.</summary>
		/// <param name="selector" type="String" optional="true">An optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getParents: function(selector){
		/// <summary>Gets all the Element's parents.</summary>
		/// <param name="selector" type="String" optional="true">An optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getSiblings: function(selector){
		/// <summary>Gets all an Element's siblings.</summary>
		/// <param name="selector" type="String" optional="true">An optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	getChildren: function(selector){
		/// <summary>Gets all an Element's direct children.</summary>
		/// <param name="selector" type="String" optional="true">An optional CSS selector to match.</param>
		/// <returns type="Element" />
	},
	empty: function(){
		/// <summary>Empties an Element of all its children.</summary>
		/// <returns type="Element" />
	},
	destroy: function(){
		/// <summary>Empties an Element of all its children, removes and garbages the Element. Useful to clear memory before the pageUnload.</summary>
	},
	toQueryString: function(){
		/// <summary>Reads the child inputs of the Element and generates a query string based on their values.</summary>
		/// <returns type="String" />
	},
	getSelected: function(){
		/// <summary>Returns an array of selected options of a select element.</summary>
		/// <returns type="Array" />
	},
	getProperty: function(property){
		/// <summary>Returns a single element attribute.</summary>
		/// <param name="property" type="String">The property to retrieve.</param>
		/// <returns type="String" />
	},
	getProperties: function(properties){
		/// <summary>Gets multiple element attributes. Returns an Object.</summary>
		/// <param name="properties" type="String">Any number of properties to retrieve (eg 'id', 'alt', 'src')</param>
		/// <returns type="Object" />
	},
	setProperty: function(property, value){
		/// <summary>Sets an attribute or special property for this Element. Returns the Element.</summary>
		/// <param name="property" type="String">The property to assign the value passed in.</param>
		/// <param name="value">The value to assign to the property passed in.</param>
		/// <returns type="Element" />
	},
	setProperties: function(properties){
		/// <summary>Sets numerous attributes for the Element. Returns the Element.</summary>
		/// <param name="properties" type="Object">An Object with key/value pairs</param>
		/// <returns type="Element" />
	},
	removeProperty: function(property){
		/// <summary>Removes an attribute from the Element. Returns the Element.</summary>
		/// <param name="property" type="String">The property to remove</param>
		/// <returns type="Element" />
	},
	removeProperties: function(properties){
		/// <summary>Removes numerous attributes from the Element. Returns the Element.</summary>
		/// <param name="properties" type="String">Any number of properties as separate arguments (eg 'id', 'title', 'src')</param>
		/// <returns type="Element" />
	},
	store: function(key, value){
		/// <summary>Stores an item in the Elements Storage, linked to this Element. Returns the Element.</summary>
		/// <param name="key" type="String">The key you want to assign to the stored value.</param>
		/// <param name="value">Any value you want to store.</param>
		/// <returns type="Element" />
	},
	retrieve: function(key, defaultVal){
		/// <summary>Retrieves a value from the Elements storage.</summary>
		/// <param name="key" type="String">The key you wish to retrieve.</param>
		/// <param name="defaultVal" optional="true">If no item is stored, a default value to return.</param>
	},
	eliminate: function(key){
		/// <summary>Eliminates a key from the Element Storage.</summary>
		/// <param name="key" type="String">The key you want to eliminate from the storage.</param>
		/// <returns type="Element" />
	},
	setStyle: function(property, value){
		/// <summary>Sets a CSS property to the Element.</summary>
		/// <param name="property" type="string">The property to set.</param>
		/// <param name="value">The value to which to set it. Numeric values of properties requiring a unit will automatically be appended with 'px'.</param>
		/// <returns type="Element" />
	},
	setStyles: function(styles){
		/// <summary>Applies a collection of styles to the Element.</summary>
		/// <param name="styles" type="Object">An object of property/value pairs for all the styles to apply.</param>
		/// <returns type="Element" />
	},
	getStyle: function(property){
		/// <summary>Returns the style of the Element given the property passed in.</summary>
		/// <param name="property" type="String">The CSS style property you wish to retrieve.</summary>
		/// <returns type="String" />
	},
	getStyles: function(properties){
		/// <summary>Returns an object of styles of the Element for each argument passed in.</summary>
		/// <param name="properties", type="String">Any number of style properties.</param>
		/// <returns type="Object" />
	},
	addEvent: function(type, fn){
		/// <summary>Attaches an event listener to a DOM element.</summary>
		/// <param name="type" type="String">The event name to monitor ('click', 'load', etc) without the prefix 'on'.</param>
		/// <param name="fn" type="Function">The function to execute.</param>
		/// <returns type="Element" />
	},
	addEvents: function(events){
		/// <summary>Attaches multiple event listeners to a DOM element.</summary>
		/// <param name="events" type="Object">An object with key/value representing: key the event name, and value the function that is called when the Event occurs.</param>
		/// <returns type="Element" />
	},
	removeEvent: function(type, fn){
		/// <summary>Removes an event listener from a DOM element.</summary>
		/// <param name="type" type="String">The event name to remove.</param>
		/// <param name="fn" type="Function">The function to remove.</param>
		/// <returns type="Element" />
	},
	removeEvents: function(events){
		/// <summary>Removes all events of a certain type from an Element. If no argument is passed, removes all events of all types.</summary>
		/// <param name="events" optional="true">Either a string name (eg 'click') or a object like 'addEvents()'.</param>
		/// <returns type="Element" />
	},
	fireEvent: function(type, args, delay){
		/// <summary>Executes all events of the specified type present in the Element.</summary>
		/// <param name="type" type="String">The event name (e.g. 'click').</param>
		/// <param name="type" optional="true">Array or single object, arguments to pass to the function. If more than one argument, must be an array.</param>
		/// <param name="type" type="Number" optional="true">Delay (in ms) to wait to execute the event.</param>
		/// <returns type="Element" />
	},
	cloneEvents: function(from, type){
		/// <summary>Clones all Events from an Element to this Element.</summary>
		/// <param name="from" type="Element">Copy all events from this Element.</param>
		/// <param name="type" type="String" optional="true">Copies only events of this type. If not defined, copies all events.</param>
		/// <returns type="Element" />
	},
	scrollTo: function(x, y){
		/// <summary>Scrolls the element to the specified coordinated (if the element has an overflow).</summary>
		/// <param name="x" type="Number">The x coordinate.</param>
		/// <param name="y" type="Number">The y coordinate.</param>
	},
	getSize: function(){
		/// <summary>Returns an object containing the width (as x) and the height (as y) of the target Element, taking into account borders and padding.</summary>
		/// <returns type="Object" />
	},
	getScrollSize: function(){
		/// <summary>Returns an object containing the x and y dimensions of the target Element.</summary>
		/// <returns type="Object" />
	},
	getScroll: function(){
		/// <summary>Returns an object containing the x and y dimensions of the target Element's scroll.</summary>
		/// <returns type="Object" />
	},
	getPosition: function(relative){
		/// <summary>Returns an object with the x and y coordinates of the Element's real offset.</summary>
		/// <param name="relative" type="Element" optional="true">If set, the position will be relative to this Element. Defaults to document.</param>
		/// <returns type="Object" />
	},
	setPosition: function(positions){
		/// <summary>Sets the position of the element's left and top values to the x/y positions you specify.</summary>
		/// <param name="positions" type="Object">An object with the x/y positions you wish to set.</param>
		/// <returns type="Element" />
	},
	getCoordinates: function(relative){
		/// <summary>Returns an object with width, height, left, right, top, and bottom coordinate values of the Element.</summary>
		/// <param name="relative" type="Element" optional="true">if set, the position will be relative to this element, otherwise relative to the document.</param>
		/// <returns type="Object" />
	},
	getOffsetParent: function(){
		/// <summary>Returns the parent of the element that is positioned, if there is one.</summary>
		/// <returns type="Element" />
	}
};

Element.Events = {};

/*
FX
*/
var Fx = function(options){
	/// <summary>
	/// This Class will rarely be used on its own, but provides the foundation for all custom Fx Classes. All of the other Fx Classes inherit from this one. Options are:
	/// <para></para>
	/// <para>fps - (number: defaults to 50) The frames per second for the transition.</para>
	/// <para>unit - (string: defaults to 'px') The unit, e.g. 'px', 'em', or '%'.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the effect is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the effect is running will take precedence over the currently running transition. The new transition will start immediately, cancelling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the effect is running will be chained up, and will take place as soon as the current effect has finished, one after another.</para>
	/// <para>duration - (number: defaults to 500) The duration of the effect in ms. Can also be one of:</para>
	/// <para>    'short' - 250ms</para>
	/// <para>    'normal' - 500ms</para>
	/// <para>    'long' - 1000ms</para>
	/// <para>transition - (function: defaults to 'sine:in:out' The equation to use for the effect see Fx.Transitions. Also accepts a string in the following form:</para>
	/// <para>    transition[:in][:out] - for example, 'linear', 'quad:in', 'back:in', 'bounce:out', 'elastic:out', 'sine:in:out'</para>
	/// <para></para>
	/// <para>Events available are:</para>
	/// <para></para>
	/// <para>start - The function to execute when the effect begins.</para>
	/// <para>cancel - The function to execute when you manually stop the effect.</para>
	/// <para>complete - The function to execute after the effect has processed.</para>
	/// <para>chainComplete - The function to execute when using link 'chain' (see options). It gets called after all effects in the chain have completed.</para>
	/// <para></para>
	/// </summary>	
	/// <param name="options" type="Object" optional="true">An Object with options for the Fx.</param>
	/// <returns type="Fx" />
};
Fx.prototype = {
	start: function(from, to){
		/// <summary>The start method is used to begin a transition. Fires the 'start' event.</summary>
		/// <param name="from">The starting value for the effect. If only one argument is provided, this value will be used as the target value.</param>
		/// <param name="to" optional="true">The target value for the effect.</param>
		/// <returns type="Fx" />
	},
	set: function(to){
		/// <summary>The set method is fired on every step of a transition. It can also be called manually to set a specific value to be immediately applied to the effect.</summary>
		/// <param name="to">The value to immediately apply to the transition.</param>
		/// <returns type="Fx" />
	},
	cancel: function(){
		/// <summary>The cancel method is used to cancel a running transition. Fires the 'cancel' event.</summary>
		/// <returns type="Fx" />
	},
	pause: function(){
		/// <summary>Pauses a currently running effect.</summary>
		/// <returns type="Fx" />
	},
	resume: function(){
		/// <summary>Resume a previously paused effect.</summary>
		/// <returns type="Fx" />
	}
};

/*
FX.TWEEN
*/
Fx.Tween = function(element, options){
	/// <summary>
	/// The Tween effect, used to transition any CSS property from one value to another. Options are:
	/// <para></para>
	/// <para>property - (string: defaults to null) The CSS property to transition to, for example 'width', 'color', 'font-size', 'border', etc. If this option is omitted, you are required to use the property as a first argument for the start and set methods.</para>
	/// <para>fps - (number: defaults to 50) The frames per second for the transition.</para>
	/// <para>unit - (string: defaults to 'px') The unit, e.g. 'px', 'em', or '%'.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the effect is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the effect is running will take precedence over the currently running transition. The new transition will start immediately, cancelling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the effect is running will be chained up, and will take place as soon as the current effect has finished, one after another.</para>
	/// <para>duration - (number: defaults to 500) The duration of the effect in ms. Can also be one of:</para>
	/// <para>    'short' - 250ms</para>
	/// <para>    'normal' - 500ms</para>
	/// <para>    'long' - 1000ms</para>
	/// <para>transition - (function: defaults to 'sine:in:out' The equation to use for the effect see Fx.Transitions. Also accepts a string in the following form:</para>
	/// <para>    transition[:in][:out] - for example, 'linear', 'quad:in', 'back:in', 'bounce:out', 'elastic:out', 'sine:in:out'</para>
	/// <para></para>
	/// <para>Events available are:</para>
	/// <para></para>
	/// <para>start - The function to execute when the effect begins.</para>
	/// <para>cancel - The function to execute when you manually stop the effect.</para>
	/// <para>complete - The function to execute after the effect has processed.</para>
	/// <para>chainComplete - The function to execute when using link 'chain' (see options). It gets called after all effects in the chain have completed.</para>
	/// <para></para>
	/// </summary>
	/// <param name="element">An Element or element ID.</param>
	/// <param name="options" type="Object" optional="true">An Object with options for the Fx.</param>
	/// <returns type="Fx.Tween" />
};
Fx.Tween.prototype = {
	start: function(property, from, to){
		/// <summary>Transitions the Element's CSS property to the specified value.</summary>
		/// <param name="property" type="String" optional="true">The css property to tween. Omit this if you use the property option.</param>
		/// <param name="from" optional="true">The starting CSS property value for the effect.</param>
		/// <param name="to">The target CSS property value for the effect.</param>
		/// <returns type="Fx.Tween" />
	},
	set: function(property, value){
		/// <summary>Sets the Element's CSS property to the specified value immediately.</summary>
		/// <param name="property" type="String" optional="true">The css property to set the value to. Omit this if you use the property option.</param>
		/// <param name="value">The value to set the CSS property of this instance to.</param>
		/// <returns type="Fx.Tween" />
	},
	cancel: function(){
		/// <summary>The cancel method is used to cancel a running transition. Fires the 'cancel' event.</summary>
		/// <returns type="Fx.Tween" />
	},
	pause: function(){
		/// <summary>Pauses a currently running effect.</summary>
		/// <returns type="Fx.Tween" />
	},
	resume: function(){
		/// <summary>Resume a previously paused effect.</summary>
		/// <returns type="Fx.Tween" />
	}
};

Element.prototype.tween = function(property, from, to){
	/// <summary>Transition any single CSS property of an Element from one value to another.</summary>
	/// <param name="property">The property you want to animate.</param>
	/// <param name="from">The start value for the transition. If you don't pass a third argument, this becomes the 'to' value.</param>
	/// <param name="to" optional="true">The end value for the transition.</param>
	/// <returns type="Element" />
};
Element.prototype.fade = function(how){
	/// <summary>
	/// Fades an Element in or out, depending on the option passed. Default, if omitted, is 'toggle'. Options are:
	/// <para></para>
	/// <para>'toggle' - If visible, fade the element out, otherwise, fade it in.</para>
	/// <para>'in' - Fade the element to 100% opacity.</para>
	/// <para>'out' - Fade the element to 0% opacity.</para>
	/// <para>'show' - Immediately set the element's opacity to 100%.</para>
	/// <para>'hide' - Immediately set the element's opacity to 0%.</para>
	/// <para>(number) - A float value between 0 and 1. Will fade the element to this opacity.</para>
	/// <para></para>
	/// <param name="how" optional="true">The opacity level as a number or string representation.</param>
	/// <returns type="Element" />
};
Element.prototype.highlight = function(start, end){
	/// <summary>Immediately transitions an Element's background color to a specified highlight color then back to its set background color.</summary>
	/// <param name="start" type="String" optional="true">The color from which to start the transition. Defaults to '#FF8'.</param>
	/// <param name="end" type="String" optional="true">The background color to return to after the highlight effect. Defaults to whatever the Element has set (or white).</param>
	/// <returns type="Element" />
};

/*
FX.MORPH
*/
Fx.Morph = function(element, options){
	/// <summary>
	/// Allows for the animation of multiple CSS properties at once, even by a CSS selector. Options are:
	/// <para></para>
	/// <para>fps - (number: defaults to 50) The frames per second for the transition.</para>
	/// <para>unit - (string: defaults to 'px') The unit, e.g. 'px', 'em', or '%'.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the effect is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the effect is running will take precedence over the currently running transition. The new transition will start immediately, cancelling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the effect is running will be chained up, and will take place as soon as the current effect has finished, one after another.</para>
	/// <para>duration - (number: defaults to 500) The duration of the effect in ms. Can also be one of:</para>
	/// <para>    'short' - 250ms</para>
	/// <para>    'normal' - 500ms</para>
	/// <para>    'long' - 1000ms</para>
	/// <para>transition - (function: defaults to 'sine:in:out' The equation to use for the effect see Fx.Transitions. Also accepts a string in the following form:</para>
	/// <para>    transition[:in][:out] - for example, 'linear', 'quad:in', 'back:in', 'bounce:out', 'elastic:out', 'sine:in:out'</para>
	/// <para></para>
	/// <para>Events available are:</para>
	/// <para></para>
	/// <para>start - The function to execute when the effect begins.</para>
	/// <para>cancel - The function to execute when you manually stop the effect.</para>
	/// <para>complete - The function to execute after the effect has processed.</para>
	/// <para>chainComplete - The function to execute when using link 'chain' (see options). It gets called after all effects in the chain have completed.</para>
	/// <para></para>
	/// </summary>
	/// <param name="element">An Element or element ID.</param>
	/// <param name="options" type="Object" optional="true">An Object with options for the Fx.</param>
	/// <returns type="Fx.Morph" />
};
Fx.Morph.prototype = {
	start: function(properties){
		/// <summary>Executes a transition for any number of CSS properties in tandem.</summary>
		/// <param name="properties">
		///		Either an object of key/value pairs of CSS attributes to change or a CSS selector from the page's stylesheet. 
		///		If only one value is given for any CSS property, the transition will be from the current value of that property to the value given.
		/// </param>
		/// <returns type="Fx.Morph" />
	},
	set: function(to){
		/// <summary>Sets the Element's CSS properties to the specified values immediately.</summary>
		/// <param name="to">
		///		Either an object of key/value pairs of CSS attributes to change or a CSS selector from the page's stylesheet. 
		///		If only one value is given for any CSS property, the transition will be from the current value of that property to the value given.
		/// </param>
		/// <returns type="Fx.Morph" />
	},
	cancel: function(){
		/// <summary>The cancel method is used to cancel a running transition. Fires the 'cancel' event.</summary>
		/// <returns type="Fx.Morph" />
	},
	pause: function(){
		/// <summary>Pauses a currently running effect.</summary>
		/// <returns type="Fx.Morph" />
	},
	resume: function(){
		/// <summary>Resume a previously paused effect.</summary>
		/// <returns type="Fx.Morph" />
	}
};

Element.prototype.morph = function(properties){
		/// <summary>Executes a transition for any number of CSS properties in tandem.</summary>
		/// <param name="properties">
		///		Either an object of key/value pairs of CSS attributes to change or a CSS selector from the page's stylesheet. 
		///		If only one value is given for any CSS property, the transition will be from the current value of that property to the value given.
		/// </param>
		/// <returns type="Element" />
};

/*
FX.TRANSITIONS
*/
Fx.Transitions = {
	linear: false,
	Back: { easeIn: false, easeOut: false, easeInOut: false },
	Bounce: { easeIn: false, easeOut: false, easeInOut: false },
	Circ: { easeIn: false, easeOut: false, easeInOut: false },
	Cubic: { easeIn: false, easeOut: false, easeInOut: false },
	Elastic: { easeIn: false, easeOut: false, easeInOut: false },
	Expo: { easeIn: false, easeOut: false, easeInOut: false },
	Quart: { easeIn: false, easeOut: false, easeInOut: false },
	Quint: { easeIn: false, easeOut: false, easeInOut: false },
	Pow: { easeIn: false, easeOut: false, easeInOut: false },
	Sine: { easeIn: false, easeOut: false, easeInOut: false }
};

/*
REQUEST
*/
var Request = function(options){
	/// <summary>
	/// An XMLHttpRequest Wrapper. Options are:
	/// <para></para>
	/// <para>url - (string: defaults to null) The URL to request. (Note, this can also be an instance of URI)</para>
	/// <para>method - (string: defaults to 'post') The HTTP method for the request, can be either 'post' or 'get'.</para>
	/// <para>data - (string: defaults to '') The default data for Request:send, used when no data is given.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the request is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the request is running will take precedence over the currently running request. The new request will start immediately, canceling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the request is running will be chained up, and will take place as soon as the current request has finished, one after another.</para>
	/// <para>async - (boolean: defaults to true) If set to false, the requests will be synchronous and freeze the browser during request.</para>
	/// <para>encoding - (string: defaults to 'utf-8') The encoding to be set in the request header.</para>
	/// <para>headers - (object) An object to use in order to set the request headers.</para>
	/// <para>isSuccess - (function) Overrides the built-in isSuccess function.</para>
	/// <para>evalScripts - (boolean: defaults to false) If set to true, script tags inside the response will be evaluated.</para>
	/// <para>evalResponse - (boolean: defaults to false) If set to true, the entire response will be evaluated. Responses with javascript content-type will be evaluated automatically.</para>
	/// <para>emulation - (boolean: defaults to true) If set to true, other methods than 'post' or 'get' are appended as post-data named '_method' (used in rails)</para>
	/// <para>urlEncoded - (boolean: defaults to true) If set to true, the content-type header is set to www-form-urlencoded + encoding</para>
	/// <para>timeout - (integer: defaults to 0) In conjunction with onTimeout event, it determines the amount of milliseconds before considering a connection timed out. (It's suggested to not use timeout with big files and only when knowing what's expected.)</para>
	/// <para>noCache - (boolean; defaults to false) If true, appends a unique noCache value to the request to prevent caching. (IE has a bad habit of caching ajax request values. Including this script and setting the noCache value to true will prevent it from caching. The server should ignore the noCache value.)</para>
	/// <para>user - (string: defaults to undefined) When username is set the Request will open with credentials and try to authenticate.</para>
	/// <para>password - (string: defaults to undefined) You can use this option together with the user option to set authentication credentials when necessary. Note that the password will be passed as plain text and is therefore readable by anyone through the source code. It is therefore encouraged to use this option carefully</para>
	/// <para></para>
	/// <para>Events are:</para>
	/// <para></para>
	/// <para>onRequest - fired when the Request is sent.</para>
	/// <para>onComplete - fired when the Request is completed.</para>
	/// <para>onCancel - fired when the Request is cancelled.</para>
	/// <para>onSuccess - fired when the Request is successful. Passed the following arguments:</para>
	/// <para>    responseText - (string) The returned text from the request.</para>
	/// <para>    responseXML - (mixed) The response XML from the request.</para>
	/// <para>onFailure - fired when the Request is unsuccessful.</para>
	/// <para></para>
	/// </summary>
	/// <param name="options" type="Object" optional="true">The options.</param>
	/// <returns type="Request" />
};
Request.prototype = {
	setHeader: function(name, value){
		/// <summary>Add or modify a header for the request. It will not override headers from the options.</summary>
		/// <param name="name" type="String">The name for the header.</param>
		/// <param name="value" type="String">The value to be assigned.</param>
		/// <returns type="Request" />
	},
	getHeader: function(name){
		/// <summary>Returns the given response header or null if not found.</summary>
		/// <param name="name" type="String">The header to retrieve the value of.</param>
		/// <returns type="String" />
	},
	send: function(options){
		/// <summary>Opens the Request connection and sends the provided data with the specified options.</summary>
		/// <param name="options" type="Object" optional="true">The options for the sent Request. Will also accept data as a query string for compatibility reasons.</param>
		/// <returns type="Request" />
	},
	cancel: function(){
		/// <summary>Cancels the currently running request, if any.</summary>
		/// <returns type="Request" />
	},
	isRunning: function(){
		/// <summary>Returns true if the request is currently running.</summary>
		/// <returns type="Boolean" />
	}
};

Element.prototype.send = function(url){
	/// <summary>Sends a form or a container of inputs with an HTML request.</summary>
	/// <param name="url" type="String" optional="true">The url you want to send the form or the "container of inputs" to. If url is omitted, the action of the form will be used. url cannot be omitted for "container of inputs".</param>
	/// <returns type="Element" />
};

/*
REQUEST.HTML
*/
Request.HTML = function(options){
	/// <summary>
	/// An XMLHttpRequest Wrapper. Options are:
	/// <para></para>
	/// <para>evalScripts - (boolean: defaults to true) If set to true, script tags inside the response will be evaluated. This overrides the false default from Request.</para>
	/// <para>update - (element: defaults to null) The Element to insert the response text of the Request into upon completion of the request.</para>
	/// <para>append - (element: defaults to null) The Element to append the response text of the Request into upon completion of the request.</para>
	/// <para>filter - (mixed: defaults to null) To filter the response tree by a selector or function. See Elements:filter</para>
	/// <para>url - (string: defaults to null) The URL to request. (Note, this can also be an instance of URI)</para>
	/// <para>method - (string: defaults to 'post') The HTTP method for the request, can be either 'post' or 'get'.</para>
	/// <para>data - (string: defaults to '') The default data for Request:send, used when no data is given.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the request is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the request is running will take precedence over the currently running request. The new request will start immediately, canceling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the request is running will be chained up, and will take place as soon as the current request has finished, one after another.</para>
	/// <para>async - (boolean: defaults to true) If set to false, the requests will be synchronous and freeze the browser during request.</para>
	/// <para>encoding - (string: defaults to 'utf-8') The encoding to be set in the request header.</para>
	/// <para>headers - (object) An object to use in order to set the request headers.</para>
	/// <para>isSuccess - (function) Overrides the built-in isSuccess function.</para>
	/// <para>evalResponse - (boolean: defaults to false) If set to true, the entire response will be evaluated. Responses with javascript content-type will be evaluated automatically.</para>
	/// <para>emulation - (boolean: defaults to true) If set to true, other methods than 'post' or 'get' are appended as post-data named '_method' (used in rails)</para>
	/// <para>urlEncoded - (boolean: defaults to true) If set to true, the content-type header is set to www-form-urlencoded + encoding</para>
	/// <para>timeout - (integer: defaults to 0) In conjunction with onTimeout event, it determines the amount of milliseconds before considering a connection timed out. (It's suggested to not use timeout with big files and only when knowing what's expected.)</para>
	/// <para>noCache - (boolean; defaults to false) If true, appends a unique noCache value to the request to prevent caching. (IE has a bad habit of caching ajax request values. Including this script and setting the noCache value to true will prevent it from caching. The server should ignore the noCache value.)</para>
	/// <para>user - (string: defaults to undefined) When username is set the Request will open with credentials and try to authenticate.</para>
	/// <para>password - (string: defaults to undefined) You can use this option together with the user option to set authentication credentials when necessary. Note that the password will be passed as plain text and is therefore readable by anyone through the source code. It is therefore encouraged to use this option carefully</para>
	/// <para></para>
	/// <para>Events are:</para>
	/// <para></para>
	/// <para>onRequest - fired when the Request is sent.</para>
	/// <para>onComplete - fired when the Request is completed.</para>
	/// <para>onCancel - fired when the Request is cancelled.</para>
	/// <para>onSuccess - fired when the Request is successful. Passed the following arguments:</para>
	/// <para>    responseTree - (element) The node list of the remote response.</para>
	/// <para>    responseElements - (array) An array containing all elements of the remote response.</para>
	/// <para>    responseHTML - (string) The content of the remote response.</para>
	/// <para>    responseJavaScript - (string) The portion of JavaScript from the remote response.</para>
	/// <para>onFailure - fired when the Request is unsuccessful.</para>
	/// <para></para>
	/// </summary>
	/// <param name="options" type="Object" optional="true">The options.</param>
	/// <returns type="Request" />
};
Request.HTML.prototype = Request.prototype;

Element.prototype.load = function(url){
	/// <summary>Updates the content of the Element with a Request.HTML GET request.</summary>
	/// <param name="url" type="String">The URL of the document to load.</param>
	/// <returns type="Element" />
};

/*
REQUEST.JSON
*/
Request.JSON = function(options){
	/// <summary>
	/// An XMLHttpRequest Wrapper. Options are:
	/// <para></para>
	/// <para>secure - (boolean: defaults to true) If set to true, a syntax check will be done on the result JSON (see JSON.decode).</para>
	/// <para>url - (string: defaults to null) The URL to request. (Note, this can also be an instance of URI)</para>
	/// <para>method - (string: defaults to 'post') The HTTP method for the request, can be either 'post' or 'get'.</para>
	/// <para>data - (string: defaults to '') The default data for Request:send, used when no data is given.</para>
	/// <para>link - (string: defaults to 'ignore') Can be 'ignore', 'cancel' and 'chain'.</para>
	/// <para>    'ignore' - Any calls made to start while the request is running will be ignored.</para>
	/// <para>    'cancel' - Any calls made to start while the request is running will take precedence over the currently running request. The new request will start immediately, canceling the one that is currently running.</para>
	/// <para>    'chain' - Any calls made to start while the request is running will be chained up, and will take place as soon as the current request has finished, one after another.</para>
	/// <para>async - (boolean: defaults to true) If set to false, the requests will be synchronous and freeze the browser during request.</para>
	/// <para>encoding - (string: defaults to 'utf-8') The encoding to be set in the request header.</para>
	/// <para>headers - (object) An object to use in order to set the request headers.</para>
	/// <para>isSuccess - (function) Overrides the built-in isSuccess function.</para>
	/// <para>evalScripts - (boolean: defaults to false) If set to true, script tags inside the response will be evaluated.</para>
	/// <para>evalResponse - (boolean: defaults to false) If set to true, the entire response will be evaluated. Responses with javascript content-type will be evaluated automatically.</para>
	/// <para>emulation - (boolean: defaults to true) If set to true, other methods than 'post' or 'get' are appended as post-data named '_method' (used in rails)</para>
	/// <para>urlEncoded - (boolean: defaults to true) If set to true, the content-type header is set to www-form-urlencoded + encoding</para>
	/// <para>timeout - (integer: defaults to 0) In conjunction with onTimeout event, it determines the amount of milliseconds before considering a connection timed out. (It's suggested to not use timeout with big files and only when knowing what's expected.)</para>
	/// <para>noCache - (boolean; defaults to false) If true, appends a unique noCache value to the request to prevent caching. (IE has a bad habit of caching ajax request values. Including this script and setting the noCache value to true will prevent it from caching. The server should ignore the noCache value.)</para>
	/// <para>user - (string: defaults to undefined) When username is set the Request will open with credentials and try to authenticate.</para>
	/// <para>password - (string: defaults to undefined) You can use this option together with the user option to set authentication credentials when necessary. Note that the password will be passed as plain text and is therefore readable by anyone through the source code. It is therefore encouraged to use this option carefully</para>
	/// <para></para>
	/// <para>Events are:</para>
	/// <para></para>
	/// <para>onRequest - fired when the Request is sent.</para>
	/// <para>onComplete - fired when the Request is completed.</para>
	/// <para>onCancel - fired when the Request is cancelled.</para>
	/// <para>onSuccess - fired when the Request is successful. Passed the following arguments:</para>
	/// <para>   responseJSON - (object) The JSON response object from the remote request.</para>
	/// <para>   responseText - (string) The JSON response as string.</para>
	/// <para>onFailure - fired when the Request is unsuccessful.</para>
	/// <para></para>
	/// </summary>
	/// <param name="options" type="Object" optional="true">The options.</param>
	/// <returns type="Request" />
};
Request.JSON.prototype = Request.prototype;

/*
COOKIE
*/
var Cookie = {
	write: function(name, value, options){
		/// <summary>
		/// Writes a cookie in the browser. Options are:
		/// <para></para>
		/// <para>domain - (string: defaults to false) The domain the Cookie belongs to.</para>
		/// <para>path - (string: defaults to '/') The path the Cookie belongs to.</para>
		/// <para>duration - (number: defaults to false) The duration of the Cookie before it expires, in days. If set to false or 0, the cookie will be a session cookie that expires when the browser is closed.</para>
		/// <para>secure - (boolean: defaults to false) Stored cookie information can be accessed only from a secure environment.</para>
		/// <para></para>
		/// </summary>
		/// <param name="name" type="String">The name of the Cookie.</param>
		/// <param name="value">The value of the Cookie. Cannot contain semicolons.</param>
		/// <param name="options" optional="true">Any options.</param>
		/// <returns type="Cookie" />
	},
	read: function(name){
		/// <summary>Reads the value of a Cookie.</summary>
		/// <param name="name" type="String">The name of the cookie to read.</param>
		/// <returns type="String" />
	},
	dispose: function(name, options){
		/// <summary>
		/// Removes a cookie or it's options. Options are:
		/// <para></para>
		/// <para>domain - (string: defaults to false) The domain the Cookie belongs to.</para>
		/// <para>path - (string: defaults to '/') The path the Cookie belongs to.</para>
		/// <para>duration - (number: defaults to false) The duration of the Cookie before it expires, in days. If set to false or 0, the cookie will be a session cookie that expires when the browser is closed.</para>
		/// <para>secure - (boolean: defaults to false) Stored cookie information can be accessed only from a secure environment.</para>
		/// <para></para>
		/// </summary>
		/// <param name="name" type="String">The name of the Cookie.</param>
		/// <param name="options" optional="true">Any options.</param>
	}
};

/*
JSON
*/
var JSON = {
	encode: function(obj){
		/// <summary>Converts an object or array to a JSON string.</summary>
		/// <param name="obj" type="Object">The Object to convert to a String.<param>
		/// <returns type="String" />
	},
	decode: function(json, secure){
		/// <summary>Converts a JSON string into an JavaScript object.</summary>
		/// <param name="json" type="String">The String to evaluate.</param>
		/// <param name="secure" type="Boolean" optional="true">Defaults to false, if set to true, checks for any hazardous syntax and returns null if any found.</param>
		/// <returns type="Object" />
	}
};

/*
SWIFF
*/
var Swiff = function(path, options){
	/// <summary>
	/// Creates and returns a Flash object using supplied parameters. Options are:
	/// <para></para>
	/// <para>id - (string: defaults to 'Swiff_' + unique id) The id of the SWF object.</para>
	/// <para>width - (number: defaults to 1) The width of the SWF object.</para>
	/// <para>height - (number: defaults to 1) The height of the SWF object.</para>
	/// <para>container - (element) The container into which the SWF object will be injected.</para>
	/// <para>params - (object) Parameters to be passed to the SWF object (wmode, bgcolor, allowScriptAccess, loop, etc.).</para>
	/// <para>allowScriptAccess - (string: defaults to always) The domain that the SWF object allows access to.</para>
	/// <para>quality - (string: defaults to 'high') The render quality of the movie.</para>
	/// <para>swLiveConnect - (boolean: defaults to true) the swLiveConnect parameter to allow remote scripting.</para>
	/// <para>wMode - (string: defaults to 'window') Changes the way the SWF is displayed in the browser.</para>
	/// <para>properties - (object) Additional attributes for the object element.</para>
	/// <para>vars - (object) Vars will be passed to the SWF as querystring in flashVars.</para>
	/// <para>callBacks - (object) Functions to call from the SWF. These will be available globally in the movie, and bound to the object.</para>
	/// </summary>
	/// <param name="path" type="String">The path to the SWF file.</param>
	/// <param name="options type="Object" optional="true">Options.</param>
};
Swiff.remote = function(obj, fn, args){
	/// <summary>Calls an ActionScript function from JavaScript.</summary>
	/// <param name="obj" type="Element">A Swiff instance (an HTML object Element).</param>
	/// <param name="fn" type="String">The name of the function to execute in the Flash movie.</param>
	/// <param name="args" optional="true">Any number of arguments to pass to the named function.</param>
};