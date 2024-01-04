import { useRouteError } from "react-router-dom";

const Error =()=>{

    const err = useRouteError();
    console.log(err);

    return (
      <div style={{color:"red"}}>
        <h1>Error page</h1>
        <h2>
          {err.status}: {err.statusText}
        </h2>
        <h3></h3>
      </div>
    );
}
export default Error