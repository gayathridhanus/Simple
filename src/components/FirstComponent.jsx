// type rafc
import './FirstComponent.css'

export const FirstComponent = () => {
  let expression = "calculation"; 
  const Signup = true;
  const result = Signup ? "SignupSuccessfully" :"Error" ;
  return (
    <>
        {/* <div>FirstComponent</div>
        <p>This shows the error</p>
        <p>This shows the error</p> */}
        
        {/* JavaScript expression in jsx */}

        <h1>JavaScript Expressions</h1>
        <h4 className={expression}>25+20={25+20}</h4>
        <h1>{result}</h1>
    </>
  )
}
