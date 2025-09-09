# react js

# parcel
- It is a budler.
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


# Class based components
-> Like functional component is nothing but a function in javascript, similarily class based components are nothing but classes in javascript
-> Example: If i want to create UserClass component using class based component
-> class UserClass extends React.Component {
    render () {
        return
        // returns piece of jsx which will be rendered in UI
    }
}

-> extends React.Component - this will make react know that this is a class based component
-> What is React.Component? This is a class given by react which is inheriting some properties to UserClass class
-> whenever we're loading a class based component it means we're creating an instance of a class.

-> How do we recieve props in class based components - create constructor with super(props) and that constructor will receive props 
-> super() calls the parent’s constructor → which sets up the object’s internal this.
class Parent {
  constructor(props) {
    this.props = props;
  }
}

class Child extends Parent {
  constructor(props) {
    super(props);  // ✅ call parent constructor
    console.log(this.props); // { name: "Vijaya" }
  }
}

const obj = new Child({ name: "Vijaya" });

-> super () is equivalent to Parent.call(this, name);

# componentDidMount in class based component
-> gets called after our component is mounted on the DOM
-> why do we use this or what is the use case?
-> used for API calls (in functional component we use useEffect)
-> why we use componentDidMount for API calls?
-> to render component as fast as possible and fetch data and component re render the component

# Creating state in class based component
    -> earlier there was not a concept of hooks in class based component
    -> we user special keyword reserved and we use it like this.state in a constructor
    -> never update state variable directly -> this.state.count = this.state.count + 1 will not work - creates inconsistency in program
    -> we do it with setState method by react this.setState({// this object will contain updated state of variable})
-> in class based component we use this keyword

# Lifecycle of Class based components - imp interview que
-> How it is put up or loaded or mounted on the web page?
    -> New instace of the class is created and first thing happens is a constructor is called and then render is called
    -> constructor -> render -> componentDidMount
    -> First parent constructor is called then parent render is called then child's constructor is called then child's render then child's componentDidMount will be called(if no further class component is present in child if present then their lifecycle will be called and then componentDidMount of child) then once child is rendered completely then componentDidMount is called
-> React lifecycle methods diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
-> Has two phases - render(constructor and render is called) phase and commit phase(updates the DOM)
-> First constructor is called then render is called after render "DOM is updated" then componentDidMount is called

-> Parent.js
<FirstChild/>
<SecondChild/>

-> In this case how will be the cycle?
    Parent constructor
    Parent render
    First child contructor
    First child render
    Second child contuctor
    Second child render
    <DOM UPDATED - in a single batch>
    First child componentDidMount
    Second child componentDidMount
    Parent componentDidMount
-> here react batch render phase of all component in parents(first child and second child in our case) together since render phase is very fast(user reconciliation with virtual DOM) then commit happens(expensive operation than render that's why batching of render phase)
-> batching of render phase for both children then batching of commit phase for both the children


# Single responsibility principle
-> For resusable, testable and maintanable code.

# Custom hooks
-> like a custom utility function only

# Optimization of our App - imp for interview
-> Chunking
-> Code splitting
-> Dynamic Bundling
-> Lazy loading / On demand loading / Dynamic import - we have a page for that initially the code of should not be there once we navigate to the page then only the code should be appended (not loading initially but loading it on demand) - lazy(callback) - named export given by react - read about it

# CSS
-> Like sass and scss we have
    -> styled-components: https://styled-components.com/
    -> Material UI - popular
    -> Bootstrap
    -> Chakra UI
    -> Ant Design - popular
    -> Tailwind

# Try out:
-> debounce search
-> pagination
-> custom library and use in local project
