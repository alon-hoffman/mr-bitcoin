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
                <Link to={`contact/${contact._id}`}  ><p>{contact.email}</p></Link>
            </td>
            <td>
                <Link to={`contact/${contact._id}`}  ><p>{contact.phone}</p></Link>
            </td>
        </tr>
    )
}