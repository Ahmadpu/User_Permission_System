const { ROLE } = require("./data");

function authUser(req,res,next){
    if(req.user== null ){
        res.status(403)
        return res.send("You need to Sign in")
    }
    
    next()
}
function authRole(role){
    console.log(role);
    return(req,res,next)=>{
        if(req.user.role !== role)
        {
            res.status(404);     
            return res.send("Role not Found")
        }
        next()
    }
}

module.exports = {authUser,authRole}