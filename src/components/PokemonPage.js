import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokedex, setPokedex] = useState([])
  const [searchTerm, setSearchterm] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
  .then(res => res.json())
  .then(data => setPokedex(data))
  }, []);
  
  const monsInSearch = pokedex.filter((mon) => mon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokedex={pokedex} setPokedex={setPokedex}/>
      <br />
      <Search pokedex={pokedex} searchTerm={searchTerm} setSearchTerm={setSearchterm}/>
      <br />
      <PokemonCollection pokedex={monsInSearch}/>
    </Container>
  );
}

export default PokemonPage;
