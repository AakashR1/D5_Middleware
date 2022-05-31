const DetailsValidate = (req,res,next)=>{
    try {
        let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let dateRegex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;

        if(req.body.email == "" || req.body.email == undefined){
            res.send('Please enter the email..');
            return
        }
        else if(!emailRegex.test(req.body.email)){
            res.send('Please enter valid email id');
            return
        }
        
        if(req.body.name == "" || req.body.name == undefined){
            res.send('Please enter the name..');
            return
        }
        
        if(req.body.dob == "" || req.body.dob == undefined){
            res.send('Please enter the dob..');
            return
        }
        else if(dateRegex.test(req.body.dob) ){
            res.send('Please enter date of birth in YYYY-MM-DD formate');
            return
        }
        if(req.body.date_of_joining == "" || req.body.date_of_joining == undefined){
            res.send('Please enter the date of joining..');
            return
        }
        else if(dateRegex.test(req.body.date_of_joining)){
            res.send('Please enter joining date in YYYY-MM-DD formate');
            return
        }
        next()
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = DetailsValidate