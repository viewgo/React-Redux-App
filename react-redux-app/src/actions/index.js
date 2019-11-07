export const FETCH_MTG_LOADING = "FETCH_MTG_LOADING";
export const FETCH_MTG_SUCCESS = "FETCH_MTG_SUCCESS";
export const FETCH_MTG_FAILED = "FETCH_MTG_FAILED";

export const mtgLoading = () => ({ type: FETCH_MTG_LOADING });
export const mtgLoadSuccess = data => ({ type: FETCH_MTG_SUCCESS, payload: data });
export const mtgLoadFailure = error => ({ type: FETCH_MTG_FAILED, payload: error });

export function fetchmtg() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    dispatch(mtgLoading());

    return (
      fetch(`https://api.scryfall.com/cards/search?order=color&q=e%3Agrn,rna,war,m20,eld&unique=prints`)
        // fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(mtgLoadSuccess(json.data));
        })
        .catch(error => dispatch(mtgLoadFailure(error)))
    );
  };
}
