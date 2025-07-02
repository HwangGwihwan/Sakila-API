import { useEffect, useState } from "react"

export default function City() {

    const [cityList, setCityList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(function() {
        fetch("http://localhost/cityList/" + pageNumber)
        .then(function(res) {return res.json();})
        .then(data => {
            setCityList(data.content);
            setTotalPages(data.totalPages);
        });
    }, [pageNumber]); // 두 번째 인자가 []이면 처음 화면이 랜더링때 한번만 useEffect() 생성

    return (
        <div>
            <h1>City (currentPage: {pageNumber})</h1>
            <table className="border-collapse border border-gray-400">
                <tr>
                    <th className="border border-gray-300">city_id</th>
                    <th className="border border-gray-300">city</th>
                </tr>
                {
                    cityList.map((c) => (
                        <tr key={c.cityId}>
                            <td className="border border-gray-300 text-center">{c.cityId}</td>
                            <td className="border border-gray-300 text-center">{c.city}</td>
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
