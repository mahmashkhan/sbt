    const  About  = require('../../models/aboutmeModel');
    const getAbout = async(req,res)=>{
        const about = await About.findOne();
        if(!about){
            return res.status(400).json({message:'no about found'})
        }
        else{
            return res.status(200).json({message:'message from getAbout', data:about})
        }
    
    }
    module.exports = {getAbout};