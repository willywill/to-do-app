module.exports = {
  async register (req, res) {
    res.send({
      message: `Hello ${req.body.user}, welcome back. Your password appears to be ${req.body.password}`
    })
  }
}
