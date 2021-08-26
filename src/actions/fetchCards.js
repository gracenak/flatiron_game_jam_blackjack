export function fetchCards() {

    return (dispatch) => {
        fetch('http://deckofcardsapi.com/api/deck/fbokesklt4s7/draw/?count=2')
            .then(resp => resp.json())
            .then(cards => dispatch({
                type: 'FETCH_CARDS',
                payload: cards
            }))


    }

}