const element = require('../json/element.json')

// --------------------------------------------------------------------
function onRequestElement(resp)
{
    resp.write( JSON.stringify(element))
}
// --------------------------------------------------------------------

module.exports = {
    onRequestElement
}
