import { Component } from "react";

class UserClass extends Component {

  constructor (props) {
    super(props);
    this.state = {
      userInfo: {}
    };
    // console.log("constuctor child", this.props.details.name)
  }

  async componentDidMount () {
    // console.log("componentDidMount of child", this.props.details.name)
    // API call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json()

    this.setState({
      userInfo: json
    })
    console.log(json)
  }

  componentDidUpdate () {
    console.log('component did update fir user class')
  }

  render () {
    // console.log("render of child", this.props.details.name)

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="user-card-img"></img>
        <h2>
          Name: <span className="user-name">{name}</span>
        </h2>
        <h3>Location: <span className="user-name">{location}</span></h3>
        <h4>Contact:<span className="user-name">@vixy</span></h4>
      </div>
    ) 
  }
}

export default UserClass;