import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {useState} from 'react'
import {GET_AUTHOR, ADD_BOOK, GET_BOOKS} from '../queries/query';
const AddBook = () => {
    const [book, setBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    });
    const { loading, error, data } = useQuery(GET_AUTHOR)
    const [addBook, { dataBook }] = useMutation(ADD_BOOK);
    const renderListAuthor = () => {
        if (loading || !data.authors.length) return <></>
        return data.authors.map(author => {
            return (
                <option key={author.id} value={author.id}>{author.name}</option>
            )
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            variables: { ...book },
            refetchQueries: [
                {query: GET_BOOKS}
            ]

        });
        setBook({
            name: '',
            genre: '',
            authorId: ''
        });
    }
    return (
        <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="field">
                <label>Name:</label>
                <input type="text" onChange={(e) => setBook({...book, name: e.target.value})} value={book.name} required={true}/>
            </div>
            <div className="field">
                <label htmlFor="">Genre:</label>
                <input type="text" onChange={(e) => setBook({...book, genre: e.target.value})} value={book.genre} required={true}/>
            </div>
            <div className="field">
            <label htmlFor="">Author:</label>
                <select name="" id="" onChange={(e) => setBook({...book, authorId: e.target.value})} value={book.authorId}  required={true}>
                <option value="">Select Author</option>
                    {renderListAuthor()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default AddBook;
