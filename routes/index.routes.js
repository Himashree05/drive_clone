const express = require("express");
const authMiddleware = require('../middlewares/authe')

const router = express.Router();
const upload = require('../config/multer.config')
const fileModel = require('../models/files.models')

router.get('/home',authMiddleware, async (req,res)=>{
    const userFiles = await fileModel.find({
       user: req.user.userId
    })

    console.log(userFiles)
    res.render('home',{
        files: userFiles
    })
})



router.post('/upload',authMiddleware,upload.single('file'),async (req,res)=>{
  const newFile = await fileModel.create({
    path:req.file.path,
    originalname:req.file.originalname,
    user: req.user.userId
  })

  res.json(newFile)
})

module.exports = router;