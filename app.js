const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

var profileChanged = false;

app.get('/', (req, res)=>{
    res.render('profile', {profileChanged : profileChanged});
})

app.get('/change-profile', (req, res)=>{
    res.render('changeProfile', {profileChanged : profileChanged});
})








app.listen(3000, ()=>{
    console.log('Running in port 3000');
})