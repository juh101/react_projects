## Redux (the core library)
- A JavaScript library (not specific to React)
- Manages global application state in a predictable way
- Built on actions, reducers, and a store
- Can be used with any UI framework (React, Angular, Vue, or even plain JS)
## React Redux (React bindings for Redux)
- A library that connects Redux with React
- Provides hooks like:
    - useSelector to read from the store
    - useDispatch to send actions
    - <Provider> to give your app access to the store


## Why use Redux in React?
- React already has local state (useState, useReducer), but when your app grows, passing state between deeply nested components (prop drilling) gets messy.

- Redux solves this by keeping a centralized state store that all components can access or update — no matter how deep in the tree.

# Flux Architecture Summary

Flux is a JavaScript architecture pattern developed by Facebook for building **predictable, unidirectional data flows** in web applications.

## 🔄 Why Flux?
- Early React apps struggled with **complex state sharing**
- Data flowed in **multiple directions**, making apps hard to debug
- Flux introduced **unidirectional data flow** to solve this

##  Core Concepts of Flux

### 1. **Actions**
- Plain JavaScript objects that describe what happened
- Example: `{ type: 'ADD_TODO', text: 'Learn Flux' }`

### 2. **Dispatcher**
- A central hub that **broadcasts actions** to registered stores
- Each store **registers** with the dispatcher to receive relevant actions

### 3. **Stores**
- Hold application **state** and **business logic**
- Respond to actions by **updating state**
- Unlike MVC, **stores don’t emit change events to each other**

### 4. **View (React Components)**
- Subscribes to stores
- Renders UI based on current state
- Triggers new actions through user interaction

## 🔁 Data Flow in Flux

```text
[Action] --> [Dispatcher] --> [Store] --> [View]
                               ^             |
                               |_____________|
```                        
## Drawbacks of Flux
- Boilerplate-heavy: requires lots of setup
- Manual Dispatcher management
- No official Flux library → multiple inconsistent implementations

## Flux Inspired Redux
- Redux simplifies Flux by:
    - Removing Dispatcher
    - Using one global store
    - Replacing store handlers with pure reducers

## Redux vs Flux
| Feature          | Redux                          | Flux                          |
|------------------|--------------------------------|-------------------------------|
| Data Flow        | Unidirectional                 | Unidirectional                |
| Store            | Single global store            | Multiple stores               |
| Actions          | Plain objects                  | Plain objects                 |
| Reducers         | Pure functions                 | Handlers in stores            |
| Middleware       | Yes (e.g., redux-thunk)        | No                            |
| Boilerplate      | Less (due to reducers)         | More (dispatcher, stores)     |
