import React from "react";

class UserClass extends React.Component {

    constructor (props) {
        super(props);

        this.state = ({
            userInfo : {
                name : "Default",
                location : "None",
            }
        })

        console.log("Parent Constructor")

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Jainendra-Mahajan");
        const json = await data.json();

        console.log(json);

        this.setState ({
            userInfo : json
        })
    }
    
    render () {
        console.log("Child render");
        const {name , location} = this.state.userInfo;
        return (
            <div>
                {/* <h1>Count : {this.state.count} , count2 : {count2}</h1> */}
                <h1>Name : {name}</h1>
                <h2>Address : {location}</h2>
                {/* <h3>Position : {position}</h3> */}
            </div>
        )
    }
}

export default UserClass;