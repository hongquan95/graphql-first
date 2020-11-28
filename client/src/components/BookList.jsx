import {useEffect, useState} from 'react'
import { useQuery, useLazyQuery } from '@apollo/client';
import { connect } from 'react-redux'
import { bookDetail } from '../actions/book';
import {GET_BOOKS, GET_BOOK} from '../queries/query'
const  BookList = (props) => {
    const {bookDetail} = props;
    const [currentActive, setCurrentActive] = useState(-1);
    const { loading, error, data } = useQuery(GET_BOOKS)
    const [getBook, { loading: bookLoading, data: bookData }] = useLazyQuery(GET_BOOK);
    useEffect(() => {
        bookDetail(bookData)
    }, [bookData]);
    const HandleGetBook = (id) => {
        setCurrentActive(id);
        getBook({variables: {
            id
        }})
    }
    const renderList = () => {
        if (loading || !data.books.length) return <></>
        return data.books.map(book => {
            return (
                <li className={`${currentActive == book.id ? 'actived' : '' }`} key={book.id} onClick={() => HandleGetBook(book.id)}>
                    {book.name}
                </li>)
        })
    }
    return (
        <ul id="book-list">
            {renderList()}
        </ul>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        bookDetail: id => dispatch(bookDetail(id)),
    }
}


export default connect(
    null,
    mapDispatchToProps
)(BookList)
