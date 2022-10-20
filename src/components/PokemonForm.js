import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokedex, setPokedex}) {


  const [newMon, setNewMon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  const handleNameChange = (e) => {
    const changedMon = {...newMon}
    changedMon.name = (e.target.value)
    setNewMon(changedMon)
  }

  const handleHpChange = (e) => {
    const changedMon = {...newMon}
    changedMon.hp = (e.target.value)
    setNewMon(changedMon)
  }

  const handleFrontUrlChange = (e) => {
    const changedMon = {...newMon}
    changedMon.sprites.front = (e.target.value)
    setNewMon(changedMon)
  }

  const handleBackUrlChange = (e) => {
    const changedMon = {...newMon}
    changedMon.sprites.back = (e.target.value)
    setNewMon(changedMon)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newMon)
    // setPokedex([...pokedex, newMon])

    let configurationObject = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newMon)
    }
    fetch("http://localhost:3001/pokemon", configurationObject)
    .then(res => res.json())
    .then(data => setPokedex([...pokedex, data]))

    //resetting forms and mon: 
    let resetMon = {
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: "" } }
    
    setNewMon(resetMon)

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleNameChange} fluid label="Name" placeholder="Name" name="name" value={newMon.name}/>
          <Form.Input onChange={handleHpChange} fluid label="hp" placeholder="hp" name="hp" value={newMon.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newMon.sprites.front}
            onChange={handleFrontUrlChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newMon.sprites.back}
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
