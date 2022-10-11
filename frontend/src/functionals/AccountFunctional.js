import React, { useState, useEffect } from 'react'
import AccountService from '../services/AccountService'

function AccountFunctional() {
    const [accounts, setAccounts] = useState([])
    useEffect(() => {
        getAccounts
    }, [])
    function getAccounts() {
        AccountService.getAccounts().then((response) => {
            setAccounts(response.data)
            console.log(response.data)
        })
    }
    return (
        <div className='container'>
            <h1>Accounts List</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th> Account Id</th>
                        <th> Account Name</th>
                        <th> Account Last Name</th>
                        <th> Account Email</th>
                        <th> Account Password</th>
                    </tr>
                </thead>
                <tbody>
                    { accounts.map(account =>
                        <tr key={account.id}>
                            <td> {account.id} </td>
                            <td> {account.name} </td>
                            <td> {account.lastName} </td>
                            <td> {account.email} </td>
                            <td> {account.password} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default AccountFunctional