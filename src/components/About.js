import User from './User.js'
import UserClass from './UserClass.js'
import React from 'react'

// const About = () => {
// 	return (
// 		<div>
//       <h1>About</h1>
//       <div>
//         {/* <User details={{name: 'Vijaya', location: "Bangalore"}}/> */}
//         <UserClass details={{name: 'Vijaya', location: "Bangalore"}}/>
//       </div>
// 		</div>
// 	)
// }

class About extends React.Component {
  constructor () {
    super();
    // console.log("constructor of parent")
  }

  componentDidMount () {
    // console.log("componentDidMount of parent")
  }

  render () {
    // console.log("render of parent")
    return (
      <div>
     <h1>About</h1>
      <div>
        <UserClass details={{name: 'Vijaya', location: "Bangalore"}}/>
      </div>
 		</div>
    )
  }
}
export default About