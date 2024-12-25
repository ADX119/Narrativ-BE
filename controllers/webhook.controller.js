import User from "../models/user.model.js";


export const clerkwebhook = async(req, res)=>{
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if(!WEBHOOK_SECRET){
    throw new Error("Webhook secret needed")
  }
   const payload = req.body;
   const headers = req.headers;

   const wh = new Webhook(WEBHOOK_SECRET);
   let event;
   try {
     event = wh.verify(payload, headers);
   } catch (err) {
     res.status(400).json({
      message : "Event Failed ..."
     });
   }
   if (event.type === "user.created") {
     const newUser = new User({
      clerkId : event.data.id,
      username : event.data.username || event.data.email_addresses[0].email_address,
      email : event.data.email_addresses[0].email_address,
      img : event.data.profile_img_url
      })
      await newUser.save();
      console.log(newUser)
    };
    return res.status(200).json({
      message : "User created successfully"
    })
    
}