// middleware/multer.js
const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const allowedPdfTypes = ['application/pdf'];

  if (
    (file.fieldname === 'images' && allowedImageTypes.includes(file.mimetype)) ||
    (file.fieldname === 'resume' && allowedPdfTypes.includes(file.mimetype))
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
