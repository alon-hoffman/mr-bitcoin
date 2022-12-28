import React, { Component } from 'react'
import { userService } from '../services/user.service'
const bitCoinImg = require('../assets/img/bitcoin.png')
const safeImg = require('../assets/img/safe.png')

export default class SignUpPage extends Component {

    state = {
        user: { name: '', email: '', password: '', balance: 0, moves: [] }
    }

    handleChange = ({ target }) => {
        const { name: field, value } = target
        this.setState(({ user }) => ({ user: { ...user, [field]: value } }))
    }

    handleSubmit = event => {
        event.preventDefault();
        const { user } = this.state
        userService.setUser(user)
        this.props.history.push('contacts')
    };

    render() {
        const { name, email, password } = this.state.user;
        return (
            <div className="signup-page main-layout">
                <img src={bitCoinImg} alt="Bitcoin logo" />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Sign up</button>
                </form>
                <img src={safeImg} className='safeImg' alt="Secure icon" />
            </div>
        )
    }
}
