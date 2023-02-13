import producer from 'immer'
import posts from '../../components/Cards'

const Initial_State = {
    User_data: [{posts}]
}

export const itemreducers = (state = Initial_State, action) => {

    console.log(state)

    switch (action.type) {
       
        case "UPDATE_DATA":
            const updatedata = state.User_data.map((ele, k) => k === action.d ? action.payload : ele)
            console.log(updatedata)
            return {
                ...state,
                User_data: updatedata
            }

        default:
            return state
    }


}