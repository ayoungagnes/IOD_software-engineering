
function Greeting(props) {
    
  return (
    <div className="Greeting">
    <h1>Hello {props.name? props.name:"World"}</h1>
    {props.children}
    </div>
  )
}
export default Greeting;