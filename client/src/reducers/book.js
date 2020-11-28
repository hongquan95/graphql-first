import * as types from '../constants/book'
const inititalState = {
    books: [],
    currentBook: {}
}
const book = (state = inititalState, action) => {
    switch (action.type) {
        case types.GET_LIST_BOOKS:
            return {
                ...state,
                books: action.books
            }
        case types.GET_BOOK:
            return {
                ...state,
                currentBook: action.book
            }
        default:
            return state
    }
}
export default book
