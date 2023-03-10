import React, { Component } from 'react'
import { contactService } from '../services/contact.service'

const userImg = require('../assets/img/user.png')


export default class ContactEdit extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        console.log('hi')
        const contact = (this.props.match.params.id) ? await contactService.getContactById(this.props.match.params.id) : contactService.getEmptyContact()
        this.setState({ contact })
    }

    handleChange = ({ target }) => {
        const { name: field, value } = target
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    submitContact = async (ev) => {
        ev.preventDefault()
        const { contact } = this.state
        try {
            await contactService.saveContact({ ...contact })
            const backUrl = contact._id ? `/contact/${contact._id}` : '/contact'
            this.props.history.push(backUrl)
        } catch (err) {
            console.log('err:', err)
        }
    }

    deleteContact = async () => {
        try {
            await contactService.deleteContact(this.state.contact._id)
            this.props.history.push('/contact')
        } catch (err) {
            console.log('error deleting contact:', err)
        }
    }

    render() {
        const { contact } = this.state
        if (!contact) return <h1>Loading</h1>

        const inputFields = [{ type: 'text', name: 'name' }, { type: 'email', name: 'email' }, { type: 'number', name: 'phone' }]
        const inputFieldsHtml = inputFields.map(input => <><h3 >
            {input.name}</h3><input value={contact[input.name]}
                onChange={this.handleChange} type={input.type} name={input.name} /></>)

        return (
            <section className='contact-edit'>
                <h1 className='text-center' >{contact._id ? 'Edit' : 'Add'}</h1>
                <form onSubmit={this.submitContact} className='flex column'>
                    {inputFieldsHtml}
                    <div className='flex justify-between buttons'>
                        <button className='save'>Save</button>
                        <button onClick={this.deleteContact} className='warning'>Delete</button>
                    </div>
                </form>
            </section>


        )
    }
}