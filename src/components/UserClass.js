import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(props);
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/indugunturu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    //console.log(json);
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2> Name: {name}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button>
        <h3>Location</h3>
        <h3>Contact</h3>
      </div>
    );
  }
}
export default UserClass;
