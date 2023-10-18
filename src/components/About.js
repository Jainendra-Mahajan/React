import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{

    constructor (props) {
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Componenet Did Mount");
    }

    render () {
        console.log("Parent render");
        return (
            <div>
                <h1>About Us Page </h1>
                <div className="user-container">
                    <User/>
                </div>
    
                <div className="user-container">
                    <UserClass />
                </div>
    
            </div>
        )
    }
}

export default About;