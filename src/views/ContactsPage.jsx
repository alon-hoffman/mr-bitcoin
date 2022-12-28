import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'

export class ContactsPage extends Component {
    state = {
        contacts: null,
        filterBy: {
            term: '',
        }
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <h1>Loading...</h1>
        return (
            <section className='contacts-page main-layout'>
                <h1 className='text-center'>Contacts</h1>
                <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
                <Link to='contact/edit'> <button>Add contact</button> </Link>
                <ContactList contacts={contacts} />
            </section>
        )
    }
}

