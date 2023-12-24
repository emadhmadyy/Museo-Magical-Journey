const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "model") {
      cb(null, "uploads/3dmodels");
    } else if (file.fieldname === "texture") {
      cb(null, "uploads/textures");
    }
  },
  filename: (req, file, cb) => {
    const uniqueFilename = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueFilename + fileExtension);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
