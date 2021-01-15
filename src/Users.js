import React,{ useEffect, useState } from 'react'
import fire from './firebases'
import db from './firebases'

export default function Users() {
    const [ contactObjects, setContactObjects] = useState()

    useEffect(() => {
       db.collection("contacts").onSnapshot((snapshot) => setContactObjects(snapshot.docs.map((doc) => ({id:doc.id,
    data: doc.data()}))))
    console.log(contactObjects)
       
    }, [])
    return (
        <div>
            <h1>Users List</h1>
            <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 contactObjects.map((contact) => (
                                    <tr key={contact.data.id}>
                                        <td>{ contact.data.name}</td>
                                        <td>{contact.data.email}</td>
                                        <td>{contact.data.message}</td>
                                        {/* <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
        </div>
    )
}
