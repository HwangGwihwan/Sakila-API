import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function CustomerOne() {

    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch("http://localhost/customer/" + customerId)
        .then((res) => {return res.json();})
        .then((data) => {
            setCustomer(data);
        })
    })

    return (
        <div>
            <h1>CustomerOne(CustomerId: {customerId})</h1>
            <table border="1">
                <tr>
                    <th>customer_id</th>
                    <td>{customer.customerId}</td>
                </tr>
                <tr>
                    <th>store_id</th>
                    <td>{customer.storeEntity?.storeId}</td>
                </tr>
                <tr>
                    <th>first_name</th>
                    <td>{customer.firstName}</td>
                </tr>
                <tr>
                    <th>last_name</th>
                    <td>{customer.lastName}</td>
                </tr>
                <tr>
                    <th>email</th>
                    <td>{customer.email}</td>
                </tr>
                <tr>
                    <th>addressid</th>
                    <td><Link to={`/AddressOne/${customer.addressEntity?.addressId}`}>{customer.addressEntity?.addressId}</Link></td>
                </tr>
                <tr>
                    <th>active</th>
                    <td>{customer.active}</td>
                </tr>
                <tr>
                    <th>create_date</th>
                    <td>{customer.createDate}</td>
                </tr>
                <tr>
                    <th>last_update</th>
                    <td>{customer.lastUpdate}</td>
                </tr>
            </table>
        </div>
    )
}
