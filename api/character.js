const character = require('../json/character.json')

// --------------------------------------------------------------------
function onRequestCharacter(resp)
{
    resp.write( JSON.stringify(character))
}
// --------------------------------------------------------------------

module.exports = {
    onRequestCharacter
}
