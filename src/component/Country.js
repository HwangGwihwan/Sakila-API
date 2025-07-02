import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Country() {

    //const countryList = [];
    const [countryList, setContryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(function() {
        fetch("http://localhost/countryList/" + pageNumber)
        .then(function(res) {return res.json();})
        .then(data => {
            setContryList(data.content);
            setTotalPages(data.totalPages);
        });
    }, [pageNumber]); // 두 번째 인자가 []이면 처음 화면이 랜더링때 한번만 useEffect() 생성

    return (
        <div>
            <h1>Country (currentPage: {pageNumber})</h1>
            <table border="1">
                <tr>
                    <th>country_id</th>
                    <th>country</th>
                </tr>
                {
                    countryList.map((c) => (
                        <tr key={c.countryId}>
                            <td>{c.countryId}</td>
                            <td><Link to="/CountryOne/{c.countryId}"></Link>{c.country}</td>
                        </tr>
                    ))

                }
            </table>
            <button onClick={() => {pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)}}>이전</button>
            {pageNumber}/{totalPages}
            <button onClick={() => {pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setPageNumber(totalPages)}}>다음</button>
        </div>
    )
}
