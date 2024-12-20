## What is package.json?

package.json is a configuration for npm

## There two types of dependencies we can install

1. Dev dependencies (Used in developement phase)
2. Normal dependencies (Used in production)

```
npm install -D parcel
```

(-D means dev dependency)

## What is Caret (^) and Tilde (~)?

- Caret (^): Allows minor updates and patches. "^2.12.0" can update to any 2.x.x version like 2.13.0, 2.14.1, etc. But not 3.0.0.
- Tilde (~): Allows only patch updates. "~2.12.0" can update to 2.12.x like 2.12.1, 2.12.2, etc., but not to 2.13.0 or 3.0.0.

## What is Parcel?

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and production bundles

## React Important Points

### JSX

- JSX and React are two separate things
- JSX is not HTML in JavaScript
- JSX is a HTML or XML like syntax
- JSX transpiled before it reaches the JS -> PARCEL -> Babel

## React Component

- Class Based Component - OLD
- Functional Component - NEW
- A function which is returning some piece of JSX is a Functional Component
- Name react compenent with a Capital letter or else we will get a Error
- Component Composition => composing two componenets in one another
- JSX Sanitize data (prevent cross site scripting)
- We can also use `<Title></Title>` for defining component
- Config Driven UI: A method where the user interface is defined by external configuration data, allowing for dynamic changes without altering the application's code.
- Whenever we are looping over anything, we must always provide a `key` prop. This prevents React from unnecessarily re-rendering components when new items are added.
- Using indexes as keys in React can lead to incorrect component behavior and performance issues, especially when list items can be added, removed, or reordered. React relies on keys for efficient updates, so unique, stable identifiers are preferred.
-
