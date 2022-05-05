import "../assets/styles/Error.css"
import React from "react";


const ErrorPage = ({error})=>{
  return(
      <div className="error">
        <h1>{`${error.message}, -  ${error.code}`}</h1>
        <h4>Refresh your page</h4>
      </div>
  )
}
export default ErrorPage;