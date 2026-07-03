const checkPermission =(requiredModule)=>{
    return (req,res,next)=>{
        const userPermissions= req.user.permissions;
        const hasAccess=userPermissions.includes(requiredModule);

        if(!hasAccess){
            return res.status(403).json({
                success:false,
                message:`You don't have access to ${requiredModule} module`
            })
        }
        next();
    }
}

module.exports= checkPermission;