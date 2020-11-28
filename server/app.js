require('dotenv-safe').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI;
var cors = require('cors')
mongoose
    .connect(mongoURI, {
        useCreateIndex: true,
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('mongoDB connected...'));

// print mongoose logs in dev env
if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
}
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})
