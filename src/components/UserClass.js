import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Dummy location",
        avatar_url:"",
      },
    };
    console.log("  Child Constructor called");
  }

  async componentDidMount() {
    console.log("  Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/venkatdas");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Compoonent will unmount is called");
  }
  render() {
    const { name, location,avatar_url } = this.state.userInfo;
    // debugger;
    console.log("  Child Render called");
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h2>Location: {location}</h2>
        <img src={avatar_url}/>
        <h2></h2>
      </div>
    );
  }
}

export default UserClass;
