import { GET_LIST_BOOKS, ADD_BOOK, GET_BOOK } from "../constants/book";

export const getList = () => ({
    type: GET_LIST_BOOKS
})
export const addBook = (book) => ({
    type: ADD_BOOK,
    book
})
export const bookDetail = (book) => ({
    type: GET_BOOK,
    book,
})

