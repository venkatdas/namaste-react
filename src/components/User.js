import { useState } from "react";

const User=({name, location})=>{

    const [count, setCount] = useState(0)
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <button onClick={()=>setCount(count+1)}>Function Increase</button>
      </div>
    );
}

export default User