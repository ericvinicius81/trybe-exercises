const generateJWT = require('../utils/generateJWT');

// const validateLogin = (username, password) => {
//   const errMissUserOrPass = { status: 400, message: 'username e password requeridos' };

//   if (!username || !password) {
//     throw errMissUserOrPass;
//   }
// };

const userLogin = async (req, res) => {
    // const { username, password } = req.body;
    // validateLogin(username, password);
    const token = generateJWT(req.body);
    return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};