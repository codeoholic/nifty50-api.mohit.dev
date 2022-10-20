const { STOCKS } = require("./constants")

const cron = async () => {

    var response = []
    await Promise.all(STOCKS.map( async ( stock ) => {

        const results = await fetch( "https://query1.finance.yahoo.com/v11/finance/quoteSummary/"+ stock.symbol +"?modules=price");
        const data = await results.json()
        const price = data.quoteSummary.result[0].price.regularMarketPrice.fmt
        const change_number = data.quoteSummary.result[0].price.regularMarketChange.fmt
        const change_percentage = data.quoteSummary.result[0].price.regularMarketChangePercent.fmt
        const market_cap = data.quoteSummary.result[0].price.marketCap.fmt
        const res = {

            price,
            change_number,
            change_percentage,
            market_cap,
            stock: stock.symbol,
            stock_name: stock.name

        }
        response.push( res )

    }))

    await NIFTY50.put("data", JSON.stringify(response))
    console.log( "cron called" )

}

module.exports = cron
