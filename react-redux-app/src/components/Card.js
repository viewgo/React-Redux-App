import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchmtg } from "../actions";

function Card(props) {
  const [card, setCard] = useState();
  let url = "";

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/${props.match.params.id}`)
      .then(response => response.json())
      .then(json => {
        setCard(json);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(card);
  if(card){
      console.log("hello");
      console.log(card.id);
      url = `https://img.scryfall.com/cards/png/front/${String(card.id).charAt(0)}/${String(card.id).charAt(1)}/${card.id}.png`;
  }
  else{
      console.log("goodbye")
  }
//   console.log(card.id);
 

  if (card !== undefined && card !== null) {
    return (
      <div className="card">
        <h2>{card.name}</h2>
        <img class="thumbnail-image" src={url} alt={card.name}></img>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

const mapDispatchToProps = {
  fetchmtg
};

export default connect(
  state => {
    return state;
  },
  mapDispatchToProps
)(Card);
