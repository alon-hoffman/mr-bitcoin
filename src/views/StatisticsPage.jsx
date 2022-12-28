import { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Chart } from '../cmps/Chart'
import { bitCoinService } from '../services/bitCoin.service'

export class StatisticsPage extends Component {

    state = {
        contact: null,
        tradingVolume: null,
        coinEvaluation: null
    }

    async componentDidMount() {
        const tradingVolume = await bitCoinService.getVolume()
        const coinEvaluation = await bitCoinService.getValue()
        this.setState({ tradingVolume, coinEvaluation })
    }

    render() {
        const { tradingVolume, coinEvaluation } = this.state
        if (!tradingVolume || !coinEvaluation) return <h1>Loading</h1>
        return (
            <div className="statistic-page main-layout">
                <h1>STATISTICS</h1>
                {tradingVolume && <Chart data={tradingVolume} color="#004d40" />}
                {coinEvaluation && <Chart data={coinEvaluation} color='#444444' />}
            </div >
        )
    }
}