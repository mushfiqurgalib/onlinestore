const Initial_State = {
    User_data: []
}

export const itemreducers = (state = Initial_State, action) => {

    console.log(state)

    switch (action.type) {

        case "UPDATE_DATA":
            const updatedata = state.User_data.map((ele, k) => k === action.d ? action.payload : ele)
            return {
                ...state,
                User_data: updatedata
            }

        default:
            return state
    }


}