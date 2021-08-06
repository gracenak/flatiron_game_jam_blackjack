export function fetchCards() {

    return (dispatch) => {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(resp => resp.json())
            .then(cards => dispatch({
                type: 'FETCH_CARDS',
                payload: cards
            }))


    }

}