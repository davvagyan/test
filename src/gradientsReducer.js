const DELETE_GRADIENT = "DELETE_GRADIENT";
const ADD_GRADIENT = "ADD_GRADIENT"

export const addGradientAC = (color) => ({
    type: ADD_GRADIENT,
    color
})

let initialState = {
    gradients: [

    ],
    id: 0
}

const gradientsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case ADD_GRADIENT: {
            let id = 0
            if (state.gradients.length != 0) {
                let idd = state.gradients[state.gradients.length - 1].id + 1
                id = idd
            }
            let newgGradient = {
                color: action.color,
                id: id
            };
            return ({
                ...state,
                gradients: [...state.gradients, newgGradient],

            })
        }
        case DELETE_GRADIENT: {
                return ({
                    ...state,
                    gradients:state.gradients.filter(i=>{
                        return i.id!=action.id
                    })
                })
        }
        default:
            return state
    }

}

export const deleteGradientAC = (id) => 
({ type: DELETE_GRADIENT,
    id })

export default gradientsReducer