import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function City() {
    const [cityList, setCityList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch("http://localhost/cityList/" + pageNumber)
            .then(res => res.json())
            .then(data => {
                setCityList(data.content);
                setTotalPages(data.totalPages);
            });
    }, [pageNumber]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">City List</h1>

            {/* 테이블 */}
            <table className="w-full table-fixed border-collapse shadow-sm mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="w-1/4 text-left px-4 py-2 border-b border-gray-300">City ID</th>
                        <th className="w-3/4 text-left px-4 py-2 border-b border-gray-300">City Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cityList.map((c) => (
                        <tr key={c.cityId} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-800">
                                {c.cityId}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-sm text-indigo-700 font-medium truncate">
                                <Link 
                                    to={`/CityOne/${c.cityId}`} 
                                    className="hover:underline block w-full"
                                    title={c.city}
                                >
                                    {c.city}
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
