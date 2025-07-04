import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Address() {
    const [addressList, setAddressList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/addressList/" + pageNumber)
            .then((res) => res.json())
            .then((data) => {
                setAddressList(data.content);
                setTotalPages(data.totalPages);
            });
    }, [pageNumber]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">Address List</h1>

            <table className="w-full table-fixed border-collapse shadow-sm mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="w-1/4 text-left px-4 py-2 border-b border-gray-300">Address ID</th>
                        <th className="w-3/4 text-left px-4 py-2 border-b border-gray-300">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {addressList.map((a) => (
                        <tr key={a.addressId} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-800">
                                {a.addressId}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-indigo-700 font-medium truncate">
                                <Link 
                                    to={`/AddressOne/${a.addressId}`} 
                                    className="hover:underline block w-full"
                                    title={a.address}
                                >
                                    {a.address}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex items-center justify-center space-x-4 mt-4">
                <button
                    onClick={() => setPageNumber((prev) => (prev > 1 ? prev - 1 : 1))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
                >
                    이전
                </button>

                <span className="font-semibold">
                    {pageNumber} / {totalPages}
                </span>

                <button
                    onClick={() => setPageNumber((prev) => (prev < totalPages ? prev + 1 : totalPages))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
                >
                    다음
                </button>
            </div>
        </div>
    );
}
