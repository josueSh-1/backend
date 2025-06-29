export const isAdmin = (req, res, next) => {

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  if (req.user.role !== 1) { 
    return res.status(403).json({ message: "Forbidden: Admin access required" });
  }
  next();
};