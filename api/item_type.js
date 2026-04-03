const itemType = require('../json/item_type.json')

// --------------------------------------------------------------------
function onRequestItemType(resp)
{
    resp.write( JSON.stringify(itemType))
}
// --------------------------------------------------------------------

module.exports = {
    onRequestItemType
}
