import { useState } from "react";

const User = (props) => {
  const [count, setCount]  = useState(0);
  const [count2, setCount2]  = useState(1);
  const { details } = props;
  return (
    <div className="user-card">
      <h1>
        {count}
      </h1>
      <h1>
        {count2}
      </h1>
      <h2>
        Name:<span className="user-name">{details.name}</span>
      </h2>
      <h3>Location: <span className="user-name">{details.location}</span></h3>
      <h4>Contact:<span className="user-name">@vixy</span></h4>
    </div>
  ) 
}

export default User