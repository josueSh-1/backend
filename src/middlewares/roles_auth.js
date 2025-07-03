const roles={
  admin: 1,
  nurse: 2,
  user: 3
}
export const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Solo admin
  if (req.user.role === roles.admin) {
    return next();
  }
  return res.status(403).json({ message: "Forbidden: Admin access required" });
};

export const isNurseOrAdmin = (req, res, next)=>{
  if(!req.user){
    return res.status(401).json({ message: "Unauthorized"})
  }
  // Nurse o admin
  if(req.user.role === roles.admin || req.user.role === roles.nurse){
    return next();
  }
  return res.status(403).json({ message: "Forbidden: Nurse or Admin access required"})
}

export const isSomeone = (req,res,next)=>{
  if(!req.user){
    return res.status(401).json({ message: "Unauthorized"})
  }
  // Cualquier usuario válido (admin, nurse, user)
  if([
    roles.admin,
    roles.nurse,
    roles.user
  ].includes(req.user.role)){
    return next();
  }
  return res.status(403).json({ message: "Forbidden: Invader"})
}