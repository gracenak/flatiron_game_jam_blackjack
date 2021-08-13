export function fetchStand() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/players/end_game')
            .then(resp => resp.json())
            .then(stand => dispatch({
                type: 'FETCH_STAND',
                payload: stand

            }))
    }
}
