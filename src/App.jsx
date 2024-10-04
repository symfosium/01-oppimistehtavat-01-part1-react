import { useState } from 'react'

const App = () => {
  const nimi = 'Pekka';
  const ika = 35;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 20} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}


const Hello = (props) => {
  const bornYear = () => new Date().getFullYear() - age;
  const {name, age} = props;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born {bornYear()}
      </p>
    </div>
  )
}

export default App
