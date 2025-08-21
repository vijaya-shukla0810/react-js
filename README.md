# react js

# parcel
- Dev Build
- Local Server
- HMR - Hot module replacement
- File watching algorithm - written in C++
- Caching - faster builds
- Minification
- Bundling
- Compress
- Content hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- Helps to host on HTTPs
- Tree Shaking algorithm - remove unused code
- Different dev and prod bundles

# Food ordering app
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - RestaurantCard
 *      - img
 *      - Name of Res, Star rating, cuisuines, delivery type
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 Two types of Export/Import

- Default Export/Import

 export default Component
 import Component from 'path'

 - Named Export/Import

 export const Component;
 import {Component} from 'path'

 # React hooks
 {Normal Js utility functions}
- useState() - is a utility function - used to create state variable
- useEffect()
- whenever a state variable changes react will re render the component - !IMPORTANT
- whenever state variable update, react triggers a reconciliation cycle (re-renders the component with new data)

# React algo
-> React uses reconciliation algorithm (also known as react fibre)
 -> React uses Virtual DOM (Object) - representation of actual DOM
 -> Diff algorithm - finds out the difference between updated virtual DOM(new object) and previous virtual DOM(old object) and updates the actual DOM with the difference
 -> React fibre - https://github.com/acdlite/react-fiber-architecture
-> Why react is fast?
    -> React is doing efficient DOM manipulation using virtual DOM(diff algorithm)


# api call in react
-> uses useEffect hook
-> useEffect(callback, dependency array)
-> when will this useEffect callback function be called - after the component renders



# Try out:
-> debounce search
-> pagination
