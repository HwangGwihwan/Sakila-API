import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CityOne() {

    const {cityId} = useParams();
    const [city, setCity] = useState({});

    useEffect(() => {
        fetch("http://localhost/city/" + cityId)
        .then((res) => {return res.json();})
        .then((data) => {
            setCity(data);
        })
    }, [])

    return (
        <div>
            <h1>CityOne(cityId: {cityId})</h1>

            {/* Address 입력 */}
            <Link to={`/AddAddress/${cityId}`}>add Address</Link>

            <table border="1">
                <tr>
                    <th>city_id</th>
                    <td>{city.cityId}</td>
                </tr>
                <tr>
                    <th>city</th>
                    <td>{city.city}</td>
                </tr>
                <tr>
                    <th>country_id</th>
                    <td><Link to={`/CountryOne/${city.countryEntity?.countryId}`}>{city.countryEntity?.countryId}</Link></td>
                </tr>
                <tr>
                    <th>last_update</th>
                    <td>{city.lastUpdate}</td>
                </tr>
            </table>
        </div>
    )
}
