import { useState } from 'react'
import axios from 'axios'

export default function RequestForm({ }) {
    //temporary test data to check if the request is working
    //have to remove when actual data is being passed
    const currentUser = {
        _id: '625791120b051077ce14fb04',
        userName: 'Juz'
    }
    const [form, setForm] = useState({
        // userId: currentUser._id,
        userId: currentUser._id,
        userName: currentUser.userName,
        message: '',
        isApproved: false
    })
    const [requests, setRequests] = useState([])

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // await axios.put(`${process.env.REACT_APP_SERVER_URL}/party/${req.params.id}/request`, form)
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/party/62587b139f2149f1af02efae/request`, form)
                .then(response => {
                    setRequests(response)
                })
        } catch (err) {
            console.log(err)
        }
        console.log(requests)
    }

    return (
        <>
            <div className='user-forms-card'>
                <h1>Request to join</h1>

                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor='message'>Message:</label>
                        <input
                            type='text'
                            id='requestMsg'
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                        />
                    </p>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}