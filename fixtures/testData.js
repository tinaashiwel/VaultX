module.exports = {

  validUser: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  },

  invalidUser: {
    email: 'wrong@mail.com',
    password: 'Wrong123'
  },

  validOtp: process.env.VALID_OTP,

  invalidOtp: '000000',

  btcAddress: process.env.BTC_ADDRESS,

  invalidAddress: process.env.INVALID_ADDRESS
};