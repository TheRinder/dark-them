import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import "./style/style.css"

const Index = () => {
  const [theam, setTheam] = useState('white')


  const theamHandler = () => {
    // document.querySelector('html').dataset['theam']
    if (theam === 'white') {
      setTheam('dark')
    } else {
      setTheam('white')
    }
  }
  useEffect(() => {
    document.querySelector('html').dataset['theam'] = theam
  }, [theam])

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={theamHandler}>
        Сменить тему
      </button>
    </div>
  )
}

render(<Index />, document.getElementById('root'))

