# Routing Review 

## Project Description

Given the provided API documentation design a user interface to interact with the API.

`[GET] /items`
 * Returns an array of all of the items stored on the server. This will start as an empty array.

`[POST] /new-item`
 * Accepts an object that will be saved on the server.
 * Should have an `id` property that contains a unique `id` for the item.  This will NOT work if you do not provide an `id` property spelled exactly that way.

`[GET] /items:id`
 * Will retrieve a previously saved item that has a matching `id`.  The `id` can be of any type.

### Notes/Hints
 * This is pretty open ended.  Be creative and have fun with what you build.  The API can store objects with any number of properties so long as the objects each have a unique `id` property.
 * If you try to post an item that matches an existing item's `id` then you will overwrite the existing item.
 * If your server gets into a weird state you can restart it.

