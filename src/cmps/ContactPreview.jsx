import { Link } from 'react-router-dom'

export function ContactPreview({ contact, openUserDetails }) {

    // goToDetails{
    //     const history = useHistory()
    //     history.push(`contact/${contact._id}`);
    // }
    return (

        <tr className="contact-preview">
            <td>
                <Link to={`contact/${contact._id}`}  > <p>{contact.name}</p></Link>
            </td>
            <td>
                <p>{contact.email}</p>
            </td>
            <td>
                <p>{contact.phone}</p>
            </td>
        </tr>
    )
}