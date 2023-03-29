const multer = require("multer");
// file system - read/write file
const fs = require("fs");
// path - access file path
const path = require("path");

const myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dest = "public/uploads";
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }

        cb(null, dest);
    },

    filename: function (req, file, cb) {
        // iphone.jpeg  - originalname
        // ext = jpg
        // basename = iphone
        let ext = path.extname(file.originalname);
        let basename = path.basename(file.originalname, ext);
        let filname = path;
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        let filename = basename + uniqueSuffix + ext;
        // iphone12344-11111.jpeg

        cb(null, filename);
    },
});

const myFileFilter = (req, file, cb) => {
    if (
        !file.originalname.match(
            /\.jpeg|JPEG|png|PNG|gif|GIF|jpg|JPG|jfif|JFIF/
        )
    ) {
        return cb(new Error("You can upload image files only"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: myStorage,
    limits: {
        fileSize: 2000000,
    },
    fileFilter: myFileFilter,
});

module.exports = upload;
