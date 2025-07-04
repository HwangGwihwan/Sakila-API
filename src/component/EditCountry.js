import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCountry() {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        fetch("http://localhost/country/" + countryId)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data);
            });
    }, [countryId]);

    function editCountry() {
        fetch("http://localhost/country", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ countryId: countryId, country: country.country })
        })
        .then((res) => {
            if (res.ok) {
                nav("/CountryOne/" + countryId);
            } else {
                alert('수정 실패');
            }
        });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">나라 이름 수정</h1>

            <div className="mb-4 flex items-center">
                <label className="text-gray-700 font-medium w-32">Country ID</label>
                <div className="text-gray-900">{countryId}</div>
            </div>

            {/* Country Name 입력 */}
            <div className="mb-6">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country Name</label>
                <input
                    id="country"
                    type="text"
                    value={country.country || ""}
                    onChange={(e) =>
                        setCountry({
                            ...country,
                            country: e.target.value
                        })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* 수정 버튼 */}
            <button
                onClick={editCountry}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
            >
                수정
            </button>
        </div>
    );
}
