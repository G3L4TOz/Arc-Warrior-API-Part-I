const http = require('http')
const api_gacha = require('./api/gacha')
const api_shop = require('./api/shop')

const api_item_type = require('./api/item_type')
const api_element = require('./api/element')
const api_rarity = require('./api/rarity')
const api_item = require('./api/item')
const api_character = require('./api/character')

// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    const pathname = req.url.split('?')[0]

    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    if(req.method === 'POST' && pathname === '/api/gacha/open')
    {
        api_gacha.onRequestGacha(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/shop/list')
    {
        api_shop.onRequestShop(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/item_type/list')
    {
        api_item_type.onRequestItemType(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/element/list')
    {
        api_element.onRequestElement(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/rarity/list')
    {
        api_rarity.onRequestRarity(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/item/list')
    {
        api_item.onRequestItem(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/character/list')
    {
        api_character.onRequestCharacter(resp)
    }

    else
    resp.write(JSON.stringify({messages: [
            'Hello Vercel class [2310511105001 ARC WARRIOR - API]',
            'FOR ITEM TYPE [GET = /api/item_type/open]',
            'FOR ELEMENT [GET = /api/element/open]',
            'FOR RARITY [GET = /api/rarity/open]',
            'FOR ITEM [GET = /api/item/open]',
            'FOR CHARACTER [GET = /api/character/list]'
        ]
        }))

    resp.end()
}
// ---------------------------------------------------------------
const server = http.createServer( onClientRequest )
server.listen(PORT)
console.log('running on '+PORT)
