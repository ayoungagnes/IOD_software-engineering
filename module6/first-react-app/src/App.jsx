import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import Emoji from './components/emoji'
import Calculator from './components/Calculator'

function App() {
  

  return (
    <>
     <Greeting name="Ayoung">
     <div>
      Here is a greeting message!
     </div>
     </Greeting>
     <BigCats></BigCats>
     <Emoji></Emoji>
    <Calculator></Calculator>
    </>
  )
}

export default App
