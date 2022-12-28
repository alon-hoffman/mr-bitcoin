import { NavLink } from 'react-router-dom'

import { Component, createRef } from 'react'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'
import { MoveList } from '../cmps/MoveList'

const bitCoinImg = require('../assets/img/bitcoin.png')


export class ContactDetails extends Component {
    state = {
        contact: null,
        user: null
    }

    amountRef = createRef();

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        const user = userService.getUser()
        this.setState({ contact, user })
    }

    handleChange = ({ target }) => {
        const { name: field, value } = target
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    moveCoins = () => {
        const amount = this.amountRef.current.value
        const { user, contact } = this.state
        const move = {
            to: { _id: contact._id, name: contact.name }, amount, time: Date.now()
        }
        user.moves.push(move)
        user.balance -= amount
        this.setState({ user })
        console.log(this.state.user)
        userService.setUser(user)
    }

    render() {
        const { contact, user } = this.state
        console.log("🚀 ~ file: ContactDetails.jsx:43 ~ ContactDetails ~ render ~ user", user)
        if (!contact || !user) return <h1>Loading</h1>
        const { moves } = user
        return (
            <>
                <section className='contact-details main-layout flex justify-between'>
                    <div>
                        <h2>Name: {contact.name}</h2>
                        <NavLink to={`edit/${contact._id}`}><small> Click to edit contact</small></NavLink>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                        <form onSubmit={this.moveCoins}>
                            <p>Transfer coins to {contact.name} </p>
                            <label htmlFor="amount">Amount: </label>
                            <input type="number" ref={this.amountRef} />
                            <button>Transfer</button>
                        </form>

                        <NavLink to={'/'}> <small>Back to contacts</small></NavLink>
                        <MoveList moves={moves} />
                    </div>
                    <img src={bitCoinImg} alt="" className='secondary' />
                </section>
            </>
        )
    }
}
