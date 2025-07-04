import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/customerList/" + pageNumber)
            .then(res => res.json())
            .then(data => {
                setCustomerList(data.content);
                setTotalPages(data.totalPages);
            });
    }, [pageNumber]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">Customer List</h1>

            {/* 테이블 */}
            <table className="w-full table-fixed border-collapse shadow-sm mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="w-1/6 text-left px-4 py-2 border-b border-gray-300">Customer ID</th>
                        <th className="w-1/3 text-left px-4 py-2 border-b border-gray-300">First Name</th>
                        <th className="w-1/3 text-left px-4 py-2 border-b border-gray-300">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList.map((c) => (
                        <tr key={c.customerId} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-800">
                                {c.customerId}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-indigo-700 font-medium truncate">
                                <Link
                                    to={`/CustomerOne/${c.customerId}`}
                                    className="hover:underline block w-full"
                                    title={c.firstName}
                                >
                                    {c.firstName}
                                </Link>
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-indigo-700 font-medium truncate">
                                <Link
                                    to={`/CustomerOne/${c.customerId}`}
                                    className="hover:underline block w-full"
                                    title={c.lastName}
                                >
                                    {c.lastName}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-center space-x-4 mt-4">
                <button
                    onClick={() => setPageNumber(prev => (prev > 1 ? prev - 1 : 1))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
                >
                    이전
                </button>

                <span className="font-semibold">{pageNumber} / {totalPages}</span>

                <button
                    onClick={() => setPageNumber(prev => (prev < totalPages ? prev + 1 : totalPages))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
                >
                    다음
                </button>
            </div>
        </div>
    );
}
