const itemShop = require('../json/item_shop.json')

// --------------------------------------------------------------------
function onRequestShop(resp)
{
    resp.write( JSON.stringify(itemShop))
}
// --------------------------------------------------------------------

module.exports = {
    onRequestShop
}
