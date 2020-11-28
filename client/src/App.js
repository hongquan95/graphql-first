import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetail from './components/BookDetail';
const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Book List</h1>
                <BookList />
                <BookDetail />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;
