
// import { Link } from 'react-router-dom'

// export function ContactPreview({ contact, openUserDetails }) {
//     return (
//         <Link to={`contact/${contact._id}`} className='contact-preview'>
//             <h4>{contact.name}</h4>
//             <small>{contact.email}</small>
//         </Link>
//     )
// }

import { Link, useHistory } from 'react-router-dom'

export function ContactPreview({ contact, openUserDetails }) {

    // goToDetails{
    //     const history = useHistory()
    //     history.push(`contact/${contact._id}`);
    // }
    return (
        <tr className="contact-preview">
            <Link to={`contact/${contact._id}`}  >
                <td>
                    <p>{contact.name}</p>
                </td>
                <td>
                    <p>{contact.email}</p>
                </td>
                <td>
                    <p>{contact.phone}</p>
                </td>
            </Link>
        </tr>
    )
}