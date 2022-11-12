const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

var profileChanged = false;
const fileImg = "/img/image 1.png"; //Contoh (dapat diubah pada saat backend)

app.get('/', (req, res)=>{
    res.render('profile', {profileChanged : profileChanged});
})

app.get('/change-profile', (req, res)=>{
    console.log(profileChanged);
    res.render('changeProfile', {profileChanged : profileChanged});
})

app.get('/take-from-gallery', (req, res) =>{
    res.render('takeFromGallery');
})

app.get('/take-from-camera', (req, res) =>{
    res.render('takeFromCamera');
})

app.get('/changed', (req, res)=>{
    profileChanged = true;
    res.redirect('/change-profile');
})

app.get('/changed-gallery', (req, res)=>{
    res.redirect('/take-from-gallery');
})




app.listen(3000, ()=>{
    console.log('Running in port 3000');
})