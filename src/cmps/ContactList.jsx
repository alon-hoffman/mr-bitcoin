
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, openUserDetails }) {
    return (
        <section className="contact-list">
            <table>
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <ContactPreview contact={contact} key={contact.id} openUserDetails={openUserDetails} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}