import { NavLink } from 'react-router-dom'

import { Component, createRef } from 'react'
import { userService } from '../services/user.service'
import { MoveList } from '../cmps/MoveList'

const bitCoinImg = require('../assets/img/bitcoin.png')


export class UserDetails extends Component {
    state = {
        contact: null,
        user: null
    }

    amountRef = createRef();

    async componentDidMount() {
        const user = userService.getUser()
        this.setState({ user })
    }

    render() {
        const { user } = this.state
        if (!user) return <h1>Loading</h1>
        const { moves, name, balance } = user
        return (
            <>
                <section className='user-details '>
                    <div>
                        <h2 className='text-center'>Hello {name}</h2>
                        <p>Your balance stands at: {balance}</p>
                        <MoveList moves={moves} />
                    </div>
                    <img src={bitCoinImg} alt="" className='secondary' />
                </section>
            </>
        )
    }
}
