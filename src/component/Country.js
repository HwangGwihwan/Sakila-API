import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Country() {
    const [countryList, setContryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/countryList/" + pageNumber)
            .then(res => res.json())
            .then(data => {
                setContryList(data.content);
                setTotalPages(data.totalPages);
            });
    }, [pageNumber]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">Country List</h1>

            {/* 나라 추가 버튼 */}
            <div className="mb-4">
                <Link 
                    to="/AddCountry" 
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                >
                    나라 추가
                </Link>
            </div>

            {/* 테이블 */}
            <table className="w-full table-fixed border-collapse shadow-sm mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="w-1/4 text-left px-4 py-2 border-b border-gray-300">Country ID</th>
                        <th className="w-3/4 text-left px-4 py-2 border-b border-gray-300">Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {countryList.map((c) => (
                        <tr key={c.countryId} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-800">
                                {c.countryId}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-indigo-700 font-medium truncate">
                                <Link 
                                    to={`/CountryOne/${c.countryId}`} 
                                    className="hover:underline block w-full"
                                    title={c.country}
                                >
                                    {c.country}
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
