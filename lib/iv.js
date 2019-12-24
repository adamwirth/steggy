const crypto = require('crypto')

const generateIV = (password='secrets', salt='pepper', keylen=64) => {
    const IV = crypto.scryptSync(password, salt, keylen)
    return IV
}

module.exports = {
    generateIV,
}