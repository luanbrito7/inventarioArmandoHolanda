const user = require('../controllers/userController')
const express = require('express')
const auth = require('../auth')
let firebase = require('firebase')
const googleStorage = require('@google-cloud/storage');
const Multer = require('multer');
const router = express.Router({mergeParams:true})

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
  });

router.post('/login', (req, res) => {
    let user = auth.login(req.body)
    return res.send(user).status(200)
})

router.post('/register', (req, res) => {
    let user = auth.register(req.body)
    return res.send(user).status(200)
})

router.post('/create', (req, res) => {

	var userName = req.body.UserName;
	var name = req.body.Name;
	var age = req.body.Age;

	var referencePath = '/Users/'+userName+'/';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({Name: name, Age: age}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});

router.get('/', (req, res) => {

    var userReference = firebase.database().ref("/Users/");
    
	userReference.on("value", 
			  (snapshot) => {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

module.exports = router

app.listen(3000, () => {
  console.log('App listening to port 3000');
});

/**
 * Adding new file to the storage
 */
app.post('/upload', multer.single('file'), (req, res) => {
  console.log('Upload Image');

  let file = req.file;
  if (file) {
    uploadImageToStorage(file).then((success) => {
      res.status(200).send({
        status: 'success'
      });
    }).catch((error) => {
      console.error(error);
    });
  }
});

const uploadImageToStorage = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No image file');
    }
    let newFileName = `${file.originalname}_${Date.now()}`;

    let fileUpload = bucket.file(newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    blobStream.on('error', (error) => {
      reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
      resolve(url);
    });

    blobStream.end(file.buffer);
  });
}