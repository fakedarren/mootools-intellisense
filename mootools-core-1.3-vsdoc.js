﻿/*
Intellisense for MooTools - My Object Oriented JavaScript Tools.

License:
MIT-style license.

Original JS Copyright:
Copyright (c) 2006-2008 [Valerio Proietti](http://mad4milk.net/).

Original Code & Documentation:
[The MooTools production team](http://mootools.net/developers/).

This Documentation:
Darren Waddell 2011

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
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.contains = function(string, separator){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.trim = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.clean = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.camelCase = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.hyphenate = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.capitalize = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.escapeRegExp = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.toInt = function(base){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.toFloat = function(){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.hexToRgb = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.rgbToHex = function(array){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
};
String.prototype.substitute = function(object, regexp){
	/// <summary></summary>
	/// <param name=""></param>
	/// <returns type="" />
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