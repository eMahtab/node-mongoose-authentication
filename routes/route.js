exports.home=function(req,res){
  res.render('home');
                  }


exports.register=function(req,res){
  res.render('register');
                  }


exports.createUser=function(req,res){
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    console.log("Username : "+username);
    console.log("Email : "+email);
    console.log("Password : "+password);
    
    var newUser=new User();
    newUser.username=username;
    newUser.email=email;
    newUser.password=password;
    
    newUser.save(function(err,savedObject){
        
        if(err){
            console.log(err);
            res.status(500).send();
        }else{
            res.send(savedObject);
        }
    });   
    
                  }