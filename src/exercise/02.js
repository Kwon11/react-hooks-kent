// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (storageKey, initialValue) => {
  const [stateValue, setStorageKey] = React.useState(window.localStorage.getItem(storageKey) ?? initialValue);
  return [stateValue, setStorageKey];
};

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
  }

  React.useEffect(() => {
    // everytime we rerender, I want to set the name in localstorage
    window.localStorage.setItem('name', name);
  }, [name]);

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='poop'/>
}

export default App
