export function fetchStand() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/cards')
            .then(resp => resp.json())
            .then(stand => dispatch({
                type: 'FETCH_STAND',
                payload: stand

            }))
    }
}
