const express = require('express');
const router = express.Router();

router.get('/login-register.ejs', (req, res) => {
    res.render("login-register.ejs");
});

router.get('/Subscribe.ejs', (req, res) => {
    res.render("Subscribe.ejs");
});

router.get('/contact.ejs', (req, res) => {
    res.render("contact.ejs");
});

router.get('/blog.ejs', (req, res) => {
    res.render("blog.ejs");
});

router.get('/blog-detail.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});

router.get('/blog-detail-right-sidebar.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});

router.get('/blog-detail-leftsidebar.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});

router.get('/jengajungle', (req, res) => {
    res.render("our-articles.ejs");
});

router.get('/register-reservation.ejs', (req, res) => {
    res.render("register-reservation.ejs");
});


router.get('/restaurant-found2.ejs', (req, res) => {
    res.render("restaurant-found2.ejs");
});

router.get('/copperivy.ejs', (req, res) => {
    res.render("copperivy.ejs");
});

router.get('/thewineandbottle.ejs', (req, res) => {
    res.render("thewineandbottle.ejs");
});

router.get('/artcafe.ejs', (req, res) => {
    res.render("artcafe.ejs");
});

router.get('/jengajungle.ejs', (req, res) => {
    res.render("jengajungle.ejs");
});

router.get('/pablos.ejs', (req, res) => {
    res.render("pablos.ejs");
});
router.get('/baobox.ejs', (req, res) => {
    res.render("baobox.ejs");
});

router.get('/baobox', (req, res) => {
    res.render("baobox.ejs");
});

router.get('/bambino.ejs', (req, res) => {
    res.render("bambino.ejs");
});

router.get('/oysterbay.ejs', (req, res) => {
    res.render("oysterbay.ejs");
});

module.exports = router;
