const express = require('express');
require('dotenv').config();

const cors = require('cors');
const connectDatabase = require('./config/dbConnect');

const authRoutes = require('./routes/auth.routes')
const leadRoutes = require('./routes/lead.routes')
const adminRoutes = require('./routes/admin.routes')

const app = express();
app.use(cors());
app.use(express.json());
connectDatabase();


app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes);
app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));