const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  status: { type: String, enum: ['open', 'in progress', 'resolved'], default: 'open' },
  assignedTo: { type: String, default: '' }
});

module.exports = mongoose.model('Ticket', ticketSchema);
