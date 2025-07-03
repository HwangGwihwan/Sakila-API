import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CountryOne() {

    const {countryId} = useParams();
    const [country, setContry] = useState({});

    useEffect(function() {
        fetch("http://localhost/country/" + countryId)
        .then(function(res) {return res.json();})
        .then(data => {
            setContry(data);
        });
    }, []);
    
    return (
        <div>
            <h1>CountryOne(countryId: {countryId})</h1>

            {/* City 입력 */}
            <Link to={`/AddCity/${countryId}`}>add City</Link>

            <table border="1">
                <tr>
                    <th>country_id</th>
                    <td>{country.countryId}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{country.country}</td>
                </tr>
                <tr>
                    <th>last_update</th>
                    <td>{country.lastUpdate}</td>
                </tr>
            </table>
            <button>삭제</button>
            <button>수정</button>
        </div>
    )
}
