const roles={
  admin: 1,
  nurse: 2,
  user: 3
}

export const isAdmin = (req, res, next) => {

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  if (req.user.role !== roles.admin) { 
    return res.status(403).json({ message: "Forbidden: Admin access required" });
  }
  next();
};

export const isNurseOrAdmin = (req, res, next)=>{
  if(!req.user){
    return res.status(401).json({ message: "Unauthorized"})
  }
  if(req.user.role !== roles.nurse && req.use.role !== roles.admin){
    return res.status(403).json({ message: "Forbidden: Nurse or Admin access required"})
  }
  next()
}