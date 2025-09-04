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
- useState() - is a utility function
    -> used to create state variable
    -> always called inside functional component not outside and on the top(where function starts)
    -> do not declare in if else and for loops to avoid inconsistency
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
-> dependecy array changes the behaviour of useEffect

Case 1: without any dependency array
-> useEffect will be called on every render of component() - useEffect(callback)

Case 2: with dependency array as empty - useEffect(callback, [])
-> useEffect is called on initial render and just once (when the component is loaded for the first time)

Case 3: we have something in dependency array - useEffect(callback, [someVar])
-> called everytime someVar is updated


# Routing/ Pages
-> using react library
-> react router dom
-> createBrowserRouter
-> Outlet - like a router view
-> to navigate to any of our pages without reloading the page - Link(works exactly the same as anchor tag but it doesn't reload the page - just changes the component)
-> this is why this is called Single page application(we do not refresh the page but component changes and browser will not reload)

# 2 Types of routing in web apps
-> Client side Routing - in our case using <Link> we're using this -> (behind the scene wrapper over anchor tag), initially when the page loads it already has code for About component but it loads when we request it so no network call here - using this
-> Server side Routing - make a network call and the page (example about.html) comes froms server

# Dynamic routing
-> example to call api using id from route
-> useParams hook
-> and can use Link
-> if want to use something like router.push(in vue) react-router-dom gives navigate from react-router-dom can be used in js -> navigate(path)

# Try out:
-> debounce search
-> pagination
