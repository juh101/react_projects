##What is localStorage?
-It's a built-in web API.
-Stores key-value pairs as strings.
-Data stays until explicitly cleared (not session-based).

```html
1. Set an item:
localStorage.setItem("key", "value");

2. Get an item:
const value = localStorage.getItem("key");

3. Remove an item:
localStorage.removeItem("key");

4. Clear all storage:
localStorage.clear();
