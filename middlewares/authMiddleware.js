module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Basic ')) {
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
      const [username, password] = credentials.split(':');
  
      // Validate username and password
      if (username === process.env.USERNAME && password === process.env.PASSWORD) {
        return next();
      }
    }
    res.status(401).send('Unauthorized');
  };
  
  