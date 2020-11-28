import { connect } from "react-redux"
import _ from 'lodash'
import { useImperativeHandle } from "react"
const BookDetail = (props) => {
    const { currentBook } = props
    const renderListBooksAuthor = (books) => {
        if (!books.length) return (<></>)
        return (
            <ul>
                {books.map(book => {
                    return <li key={book.id}>
                        {book.name}
                    </li>
                })}
            </ul>
        )
    }
    const renderDetail = () => {
        if (_.isEmpty(currentBook)) return (<h3>No Book Seleted</h3>)
        return (
        <div>
            <h3>Book Selected: {currentBook.book?.id??''} </h3>
            <h4>Name: {currentBook.book?.name??''}</h4>
            <h4>Genre: {currentBook.book?.genre??''}</h4>
            <h4>Author: {currentBook.book?.author?.name??''}</h4>
            <h5>Books of this Author: </h5>
            {
                renderListBooksAuthor(currentBook.book?.author?.books??[])
            }
        </div>
        )
    }
    return (
        <div id="book-detail">
            {renderDetail()}
        </div>
    )
}
const mapStateToProps = (state) => ({
    currentBook: state.book.currentBook
})


export default connect(mapStateToProps, null)(BookDetail)
