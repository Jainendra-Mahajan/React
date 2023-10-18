import { useState } from "react";

const User = ({name}) => {

    const [count] = useState(1);
    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>name : {name}</h1>
            <h2>Address : Pune</h2>
            <h3>Position : None</h3>
        </div>
    )
}

export default User;