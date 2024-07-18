const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB!');
});

app.get('/', (req, res) => {
  res.send('Ticketing System Backend');
});

// Import Routes
const authRoute = require('./routes/auth');
const ticketRoute = require('./routes/ticket');
const jiraRoute = require('./routes/jira');

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/ticket', ticketRoute);
app.use('/api/jira', jiraRoute);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
