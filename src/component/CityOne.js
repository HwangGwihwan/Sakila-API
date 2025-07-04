import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CityOne() {
    const { cityId } = useParams();
    const [city, setCity] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        fetch("http://localhost/city/" + cityId)
            .then((res) => res.json())
            .then((data) => setCity(data));
    }, [cityId]);

    // 날짜 포맷 함수
    function formatDateTime(isoString) {
        if (!isoString) return "";
        const date = new Date(isoString);
        const pad = (n) => n.toString().padStart(2, "0");
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    function removeCity() {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch("http://localhost/city/" + cityId, {
                method: "DELETE",
            }).then((res) => {
                if (res.ok) {
                    nav("/City");
                } else {
                    alert("삭제 실패");
                }
            });
        } else {
            alert("삭제 취소");
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">City 상세 정보</h1>

            {/* 주소 추가 링크 */}
            <div className="mb-4">
                <Link
                    to={`/AddAddress/${cityId}`}
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                >
                    주소 추가
                </Link>
            </div>

            {/* 정보 테이블 */}
            <table className="w-full border border-gray-300 rounded overflow-hidden mb-6">
                <tbody>
                    <tr className="bg-gray-100">
                        <th className="text-left px-4 py-3 border-b border-gray-300 w-1/3">City ID</th>
                        <td className="px-4 py-3 border-b border-gray-300">{city.cityId}</td>
                    </tr>
                    <tr>
                        <th className="text-left px-4 py-3 border-b border-gray-300">City</th>
                        <td className="px-4 py-3 border-b border-gray-300">{city.city}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <th className="text-left px-4 py-3 border-b border-gray-300">Country</th>
                        <td className="px-4 py-3 border-b border-gray-300">{city.countryEntity?.country}</td>
                    </tr>
                    <tr>
                        <th className="text-left px-4 py-3">Last Update</th>
                        <td className="px-4 py-3">{formatDateTime(city.lastUpdate)}</td>
                    </tr>
                </tbody>
            </table>

            {/* 버튼 영역 */}
            <div className="flex space-x-4">
                <button
                    onClick={removeCity}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                >
                    삭제
                </button>

                <button
                    onClick={() => nav("/EditCity/" + cityId)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                >
                    수정
                </button>
            </div>
        </div>
    );
}
