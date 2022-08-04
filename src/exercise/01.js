// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Greeting({ initialName }) {
  const [name, setName] = useState(initialName || '');

  function handleChange(event) {
    setName(event.target.value);
    console.log('name is', name);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name}/>
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

Greeting.propTypes = {
  initialName: PropTypes.string
};

function App() {
  return <Greeting initialName={'poop'} />
}

export default App
