export function fetchAnotherCard() {

    return (dispatch) => {
        //fbokesklt4s7 this is the test deck, there are like 20 decks in this one
        fetch('http://deckofcardsapi.com/api/deck/fbokesklt4s7/draw/?count=1')
            .then(resp => resp.json())
            .then(cards => dispatch({
                type: 'FETCH_ANOTHER_CARD',
                payload: cards
            }))


    }

}