// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import React, { useState } from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({ favoriteAnimal, setFavoriteAnimal }) {
  const setAnimal = (value) => {
    setFavoriteAnimal(value);
  }
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={favoriteAnimal}
        onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}

function Display({name, favoriteAnimal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${favoriteAnimal}!`}</div>
}

function App() {
  // 🐨 add a useState for the animal
  const [name, setName] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal favoriteAnimal={favoriteAnimal} setFavoriteAnimal={setFavoriteAnimal} />
      {/* 🐨 pass the animal prop here */}
      <Display name={name} favoriteAnimal={favoriteAnimal} />
    </form>
  )
}

export default App
