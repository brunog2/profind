const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: "../frontend/src/pages/assets/images",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("myImage");


module.exports = function (req, res) {
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        return res.json({file: req.file});/*Now do where ever you want to do*/
        if (!err)
            return res.send(200).end();
        
    });
};