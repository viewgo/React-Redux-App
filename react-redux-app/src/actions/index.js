export const FETCH_MTG_LOADING = "FETCH_MTG_LOADING";
export const FETCH_MTG_SUCCESS = "FETCH_MTG_SUCCESS";
export const FETCH_MTG_FAILED = "FETCH_MTG_FAILED";

export const GET_MTGCARD_LOADING = "GET_MTGCARD_LOADING";
export const GET_MTGCARD_SUCCESS = "GET_MTGCARD_SUCCESS";
export const GET_MTGCARD_FAILURE = "GET_MTGCARD_FAILURE";


export const mtgLoading = () => ({ type: FETCH_MTG_LOADING });
export const mtgLoadSuccess = data => ({ type: FETCH_MTG_SUCCESS, payload: data });
export const mtgLoadFailure = error => ({ type: FETCH_MTG_FAILED, payload: error });

const default_api = "https://api.scryfall.com/cards/search?order=color&q=e%3Agrn,rna,war,m20,eld&unique=prints";

export function fetchmtg(api = default_api) { 

  return function(dispatch) {
    dispatch(mtgLoading());

    return (
      fetch(api)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(mtgLoadSuccess(json));
        })
        .catch(error => dispatch(mtgLoadFailure(error)))
    );
  };
}


