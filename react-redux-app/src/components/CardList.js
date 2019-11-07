import React from "react";
import { connect } from "react-redux";
import { fetchmtg } from "../actions";

function CardList(props) {
  return (
    <>
      <h1>List</h1>

      <button onClick={() => props.fetchmtg()}>Get Data</button>
      <div className="card-list">
        {props.isFetching && <div>LOADING</div>}
        {props.error && <div>{props.error.message}</div>}

        {props.cards.map(card => (
          <div className="card" key={card.id}>
            <img style={{width: "200px"}} src={card.image_uris.normal}></img>
          </div>
        ))}
      </div>
    </>
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
