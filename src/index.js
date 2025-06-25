const router = require("express").Router();
const { Aboutme } = require("./controller/About/Aboutme");
const { getAbout } = require("./controller/About/getAbout");
const { createCategory, getAllCategory } = require("./controller/categories/category");
const { addHighlight } = require("./controller/Highlights/addHighlights");
const { getHighlight } = require("./controller/Highlights/getHighlights");
const { getLandingImage } = require("./controller/landingImages/getLandingImage");
const { landingUpload, landingImage } = require("./controller/landingImages/landingImage");
const { portfolio } = require("./controller/portfolio/addPortfolio");
const { getPortfolio, getPortfolioById } = require("./controller/portfolio/getPortfolio");
const { editPortfolio } = require('./controller/portfolio/editPortfolio');
const { deletetheportfolio } = require('./controller/portfolio/deletePortfolio');
const { editAbout } = require("./controller/About/editAbout");
const { deleteAbout } = require("./controller/About/deleteAbout");
const { addTeam, upload } = require('./controller/team/addTeam')
const { getTeam } = require('./controller/team/getTeam')
const { editTeam, updatedUpload } = require('./controller/team/editTeam')
const { deleteTeam } = require('./controller/team/deleteTeam');
const { contact } = require('./controller/Contact/contact');
const { addPackages } = require('./controller/packages/addPackage')
const { editPackages } = require('./controller/packages/editPackage');
const { getPackages,getPackagesByCategory } = require("./controller/packages/getPackage");
const { deletePackage } = require("./controller/packages/deletePackage");
const { createAdmin } = require("./controller/AdminLogin/createAdmin");
const { Login } = require("./controller/AdminLogin/Login");

//Admin
router.post('/sbt/admin/signup', createAdmin)
router.post('/sbt/admin/login', Login)
//About
router.get('/about', getAbout)
router.post('/add/about', Aboutme)
router.put('/edit/about/:id', editAbout)
router.delete('/delete/about/:id', deleteAbout)
//Portfolio
router.get('/get/portfolio', getPortfolio);
router.get('/get/portfolio/:id', getPortfolioById);
router.post('/add/portfolio', portfolio);
router.put('/update/portfolio/:id', editPortfolio);
router.delete('/delete/portfolio/:id', deletetheportfolio);
router.post('/create/category', createCategory);
router.get('/get/category', getAllCategory);

//LandingVideo  
router.post('/add/landing',landingUpload.array('images', 10), landingImage);
router.get('/get/landing', getLandingImage);

//highlights
router.post('/add/highlight', addHighlight)
router.get('/get/highlight', getHighlight)

//Team
router.post('/add/team', upload.single('image'), addTeam)
router.get('/get/team', getTeam)
router.put('/edit/team/:id', updatedUpload.single('image'), editTeam)
router.delete('/delete/team/:id', deleteTeam)

//Packages
router.post('/add/package', addPackages)
router.put('/edit/package/:id', editPackages)
router.get('/get/package', getPackages)
router.get('/get/package/:slug', getPackagesByCategory)
router.delete('/delete/package/:id', deletePackage)

//Contact
router.post('/contact', contact)
module.exports = router