const rates = require('../json/gacha_rate.json')
const rands = require('../libs/random')

// --------------------------------------------------------------------
function onRequestGacha(resp)
{
    resp.write( JSON.stringify(rands.drawGacha(rates, warriors)) )
}
// --------------------------------------------------------------------

module.exports = {
    onRequestGacha
}
