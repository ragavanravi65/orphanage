var express=require("express");
var app=express();
var bodyParser=require("body-parser");
// var nodemailer=require("nodemailer");
 

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.render("home");
});

app.get("/image_gallery",function(req,res){
    res.render("image_gallery");
});
app.get("/achievements",function(req,res){
    res.render("achievements");
});
app.get("/news",function(req,res){
    res.render("news");
});

//contact form===================================================================================
// app.post("/sendmail",function(req,res){
//     var output=`<p>You have a new contact enrollment candidate</p>
//     <h3>Contact Details</h3>
//     <ul style="color:#5e038c;font-size:16px;">
//         <li><strong>NAME:</strong>${req.body.firstname}</li>
//         <li><strong>E-MAIL:</strong>${req.body.email}</li>
//         <li><strong>PHONE:</strong>${req.body.phone}</li>
//         <h4>Message</h4>
//         <h3 >${req.body.textarea}</h3>
//     </ul>`
//node to gmail account mail processing==================================================================
// var transporter=nodemailer.createTransport({
//     service:'gmail' ,
//     auth:{
//         user:'ragavkutti777@gmail.com' ,
//         pass:'ragavkutti777'
//     }
// });

// var mailOptions={
//     from:'"Donation Contact Portal"<ragavkutti777@gmail.com>',

//     to:'ragavanravi65@gmail.com',
//     subject:'Saravana contact portal',
//     html:output
// };


// transporter.sendMail(mailOptions,function(err,info){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("mail sent"+info.response);
//     }
// });

// res.redirect("/#contactdrive");
// });
app.post("/send",function(req,res){
res.redirect("/#contactdrive");
});
//==========================================================================


app.listen(process.env.PORT||3000,function(){
    console.log("app is live");
});