import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchmtg } from "../actions";


function CardList(props) {
  const [pageCounter, setPageCounter] = useState(1);

  const api = "https://api.scryfall.com/cards/search?order=color&q=e%3Agrn,rna,war,m20,eld&unique=prints";
  let url = "";

  function getUrl(count) {
    return `https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=color&page=${pageCounter}&q=e%3Agrn%2Crna%2Cwar%2Cm20%2Celd&unique=prints`;
  }

  useEffect(() => {
    console.log(pageCounter);
    url = getUrl(pageCounter);
    props.fetchmtg(url);
  }, [pageCounter]);

  return (
    <div className="list-container">
      <h1>Magic: the Gathering</h1>
      <h2>Standard Card List</h2>

      <div className="buttons">
        <button
          onClick={e => {
            if (pageCounter > 1) {
              setPageCounter(pageCounter - 1);
            } else {
              e.preventDefault();
            }
          }}
        >
          Previous
        </button>

        {props.cards.data.length === 0 ? (
          <button
            onClick={e => {
              console.log("GET DATA! : ");
              props.fetchmtg();
            }}
          >
            Get Data
          </button>
        ) : null}

        <button
          onClick={e => {
            if (props.cards.has_more) {
              setPageCounter(pageCounter + 1);
            } else {
              e.preventDefault();
            }
          }}
        >
          Next
        </button>
      </div>

{props.isFetching && <div>LOADING</div>}
{props.error && <div>{props.error.message}</div>}

      <div className="card-list">
        


        {props.cards.data.map(card => (
          <div className="card" key={card.id}>
            <img class="thumbnail-image" src={card.image_uris.border_crop} alt={card.name}></img>
            <span class="large">
              <img src={card.image_uris.border_crop} class="large-image"></img>
            </span>
          </div>
        ))}
        
      </div>

      {props.cards.data.length === 0 ? null : (
        <div className="buttons">
          <button
            onClick={e => {
              if (pageCounter > 1) {
                setPageCounter(pageCounter - 1);
              } else {
                e.preventDefault();
              }
            }}
          >
            Previous
          </button>

          {props.cards.data.length === 0 ? (
            <button
              onClick={e => {
                console.log("GET DATA! : ");
                props.fetchmtg();
              }}
            >
              Get Data
            </button>
          ) : null}

          <button
            onClick={e => {
              if (props.cards.has_more) {
                setPageCounter(pageCounter + 1);
              } else {
                e.preventDefault();
              }
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  fetchmtg
};

export default connect(
  state => {
    console.log("%c vvv PROPS IN CARD LIST", "color: green; background: #222; font-size: 24px;", state);
    console.log("%c ^^^ PROPS IN CARD LIST", "color: green; background: #222; font-size: 24px;");
    return state;
  },
  mapDispatchToProps
)(CardList);
