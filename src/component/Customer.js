import { useEffect, useState } from "react"

export default function Customer() {

    const [customerList, setCustomerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(function() {
        fetch("http://localhost/customerList/" + pageNumber)
        .then(function(res) {return res.json();})
        .then(data => {
            setCustomerList(data.content);
            setTotalPages(data.totalPages);
        });
    }, [pageNumber]); // 두 번째 인자가 []이면 처음 화면이 랜더링때 한번만 useEffect() 생성


    return (
        <div>
            <h1>Customer (currentPage: {pageNumber})</h1>
            <table className="border-collapse border border-gray-400">
                <tr>
                    <th className="border border-gray-300">customer_id</th>
                    <th className="border border-gray-300">firstName</th>
                    <th className="border border-gray-300">lastName</th>
                </tr>
                {
                    customerList.map((c) => (
                        <tr key={c.customerId}>
                            <td className="border border-gray-300 text-center">{c.customerId}</td>
                            <td className="border border-gray-300 text-center">{c.firstName}</td>
                            <td className="border border-gray-300 text-center">{c.lastName}</td>
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
