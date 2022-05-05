import "../assets/styles/Error.css"
import React from "react";


const ErrorPage = ({error})=>{
  return(
      <div className="error">
        <h1>{`${error.message}, -  ${error.code}`}</h1>
        <h3>Refresh your page</h3>
      </div>
  )
}
export default ErrorPage;