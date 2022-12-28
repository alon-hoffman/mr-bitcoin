import axios from 'axios'

const VOLUME_URL = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
const VALUE_URL = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
export const bitCoinService = {
    getRate,
    getValue,
    getVolume
}

function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
}

async function getValue(time = 'months', count = 5) {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${count}${time}&format=json&cors=true`)
        return res.data
    } catch (err) {
        console.log('Couldnt get market price:', err)
        throw (err)
    }
}

async function getVolume(time = 'months', count = 5) {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=${count}${time}&format=json&cors=true`)
        return res.data
    } catch (err) {
        console.log('Couldnt get confirmed transactions:', err)
        throw (err)
    }
}