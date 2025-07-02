import { useEffect, useState } from "react"

export default function Address() {

    const [addressList, setAddressList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

     useEffect(function() {
        fetch("http://localhost/addressList/" + pageNumber)
        .then(function(res) {return res.json();})
        .then(data => {
            setAddressList(data.content);
            setTotalPages(data.totalPages);
        });
    }, [pageNumber]); // 두 번째 인자가 []이면 처음 화면이 랜더링때 한번만 useEffect() 생성

    return (
        <div>
            <h1>Address (currentPage: {pageNumber})</h1>
            <table border="1">
                <tr>
                    <th>address_id</th>
                    <th>address</th>
                </tr>
                {
                    addressList.map((a) => (
                        <tr key={a.addressId}>
                            <td>{a.addressId}</td>
                            <td>{a.address}</td>
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
