require('dotenv').config();   // import dotenv
const cors = require("cors");    // import cors
const express=require('express'); // import express
const {sequelize} = require('./models/index')
const PORT= process.env.PORT ;
const projectRoutes = require('./Routes/ProjectRoutes');
const adminRoutes = require('./Routes/AdminRoutes');
const resumeRoutes = require('./Routes/ResumeRoutes')



const app = express();
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.send('API is running...');
 });
  
app.use('/api/projects', projectRoutes);
app.use('/api', adminRoutes);
app.use('/api/resume',resumeRoutes );
sequelize.sync({alter:true}).then(() => console.log("Database connected")); // database sync

app.listen(PORT,() => console.log(`App is listening on port ${PORT} ...`))