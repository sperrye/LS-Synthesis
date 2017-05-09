# Synthesis Project

## Project Description

Given the provided API documentation design a user interface to interact with the API.

`[GET] /items`
 * Returns an array of all of the items stored on the server. This will start as an empty array.
 * The items that will be returned will only have their `id` property and `name` property.

`[POST] /items`
 * Accepts an object that will be saved on the server.
 * It's `id` property will be generated automatically on the server.
 * It must have a `name` property.

`[GET] /items:id`
 * Will retrieve a previously saved item that has a matching `id`.  This will return the complete item object with all of its properties.

### Notes/Hints
 * All objects should have a `name` property.  The server will automatically generate an `id`.  If you would like this property to be something other than `name` then you can change it on line 21 in `server.js`.  (`name: item.name` could be change to `someDifferentPropertyName: item.someDifferentPropertyName`)
 * The `id` is generated on the server.  Do not pass in an `id`, if you do it will be overwritten.
 * This is pretty open ended.  Be creative and have fun with what you build.  The API can store objects with any number of properties.
 * If your server gets into a weird state you can restart it.  None of the information on the server is being saved to disk so a simple restart will wipe it clean.
