export const ADD_ITEM = "ADD_ITEM"
export const CLEAR_ALL = "CLEAR_ALL"
export const DELETE_ITEM_BY_TASK = "DELETE_ITEM_BY_TASK"
export const CHANGE_STATUS_ITEM = "CHANGE_STATUS_ITEM"



const initialState = {
    list: [{ task: "reading book", isDone: true }]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: return { ...state, list: [{ task: action.task, isDone: false }, ...state.list] }
        case CLEAR_ALL: return { ...state, list: [] }
        case DELETE_ITEM_BY_TASK: {
            const filteredList = state.list.filter((el) => el.task !== action.task)
            return { ...state, list: [...filteredList] }
        }
        case CHANGE_STATUS_ITEM: {
            const changedList = state.list.map((v) => (v.task === action.task ? { ...v, isDone: !v.isDone } : v))
            return { ...state, list: [...changedList] }
        }
        default: return state
    }
}

export const addItemActionCreator = (task) => ({ type: ADD_ITEM, task })
export const clearAllActionCreator = () => ({ type: CLEAR_ALL })
export const deleteItemActionCreator = (task) => ({ type: DELETE_ITEM_BY_TASK, task })
export const changeStatusActionCreator = (task) => ({ type: CHANGE_STATUS_ITEM, task })