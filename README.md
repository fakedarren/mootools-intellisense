MooTools 1.3 Intellisense for Visual Studio 2010
================================================

Intellisense for VS2010.

This includes as-you-type documentation for MooTools Core 1.3. It will not automatically detect partial builds, so for instance if you do not include Swiff in your download,
Intellisense will still be present unless manually removed.

It does not contain any deprecated MooTools 1.2 methods either (eg the Compatibility Layer).


## Prerequisites

In order to use this documentation you will need Visual Studio 2010. You must also install 'JScript Editor Extensions', a Microsoft Extension for Visual Studio 2010.

To do this, go to Tools > Extension Manager > Online Gallery and search for 'JScript Editor Extensions'.


## Notes

To use Intellisense inside a JavaScript file, you must first add a reference:

	/// <reference path="path/to/mootools-1.3.js" />

Errors in your JavaScript may break parsing of associated JavaScript files. Therefore you may wish to directly reference the VSDOC.

	/// <reference path="path/to/mootools-1.3-vsdoc.js" />

If you wish to reference the documentation in a Control you will need to reference the script directly, unfortunately. One suggestion is to wrap the reference in a code
block that always evaluates to false, like so:

	<% if(false){ %>
	   <script src="path/to/mootools-1.3.js" type="text/javascript"></script>
	<% } %>

The keyboard shortcut to update Intellisense is CTRL-SHIFT-J, or located in the menu Edit > Intellisense > Update Intellisense.

Your Error List window will let you know if Visual Studio is having trouble parsing your code, which will probably break Intellisense....