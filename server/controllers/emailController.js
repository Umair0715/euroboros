const Email = require('./../models/emailModel');
const {sendNewEmail} = require('./../utils/email');

exports.sendEmail = async (req ,res ,next) => {
   const { email , description } = req.body;
   if(!email || !description){
      return res.status(400).json({
         status : 'error' ,
         message : 'Missing required credentials'
      })
   }
   try{
      const emailExist = await Email.findOne({ email });
      if(emailExist){
         emailExist.description.push(description);
         if(req.body.attachements){
            emailExist.attachements.push(req.body.attachements)
         }
         await emailExist.save();
      }else{
         await Email.create(req.body);
      }
      const name = req.body.name ? req.body.name : null;
      const attachements = req.body.attachements ? req.body.attachements : null;
      await sendNewEmail(email , name , description , attachements);
      res.status(200).json({
         status: 'success' ,
         message : 'Your message sended successfully.'
      })
   }catch(err){
      res.status(500).json({
         status : 'failed',
         message : 'internal server error'
      })
   }
}