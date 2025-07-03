import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function AddressOne() {

    const {addressId} = useParams();
    const [address, setAddress] = useState({});

    useEffect(() => {
        fetch("http://localhost/address/" + addressId)
        .then((res) => {return res.json();})
        .then((data) => {
            setAddress(data);
        })
    }, [])

    return (
        <div>
            <h1>AddressOne(AddressId: {addressId})</h1>

            {/* Customer 입력 */}
            <Link to={`/AddCustomer/${addressId}`}>add Customer</Link>

            <table border="1">
                <tr>
                    <th>address_id</th>
                    <td>{address.addressId}</td>
                </tr>
                <tr>
                    <th>address</th>
                    <td>{address.address}</td>
                </tr>
                <tr>
                    <th>district</th>
                    <td>{address.district}</td>
                </tr>
                <tr>
                    <th>city_id</th>
                    <td><Link to={`/CityOne/${address.cityEntity?.cityId}`}>{address.cityEntity?.cityId}</Link></td>
                </tr>
                <tr>
                    <th>postal_code</th>
                    <td>{address.postalCode}</td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td>{address.phone}</td>
                </tr>
                <tr>
                    <th>last_update</th>
                    <td>{address.lastUpdate}</td>
                </tr>
            </table>
        </div>
    )
}

