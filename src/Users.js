import React,{ useEffect, useState } from 'react'
import fire from './firebases'
import db from './firebases'

export default function Users() {
    const [ contactObjects, setContactObjects] = useState()
    const [ currentId, setCurrentId ] = useState()

    useEffect(() => {
       db.collection("contacts").onSnapshot((snapshot) => setContactObjects(snapshot.docs.map((doc) => ({id:doc.id,
    data: doc.data()}))))
     
       
    }, [])

    const onDelete = ( id ) => {
        if (window.confirm('Are you sure to delete this record?')) {
            db.collection("contacts").doc(id).delete().then(() => console.log("deleted successfully")).catch((err) => console.log(err))
               
        }
    }
    return (
        <div>
            <h1>Users List</h1>
            <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(contactObjects,"contactobjects")}
                            { 
                              contactObjects ?
                                 contactObjects.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{ contact.data.name}</td>
                                        <td>{contact.data.email}</td>
                                        <td>{contact.data.message}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(contact.data.id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(contact.id)}}>
                                                <i className="far fa-trash-alt"></i>
                                               {  console.log(contact.id,"yaha hu me") }
                                            </a>
                                        </td>
                                       
                                    </tr>
                                )) : "wait a sec"
                            }
                        </tbody>
                    </table>
        </div>
    )
}
