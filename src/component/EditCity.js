import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCity() {
    const { cityId } = useParams();
    const [city, setCity] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        fetch("http://localhost/city/" + cityId)
            .then((res) => res.json())
            .then((data) => setCity(data));
    }, [cityId]);

    function editCity() {
        fetch("http://localhost/city", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cityId: cityId,
                city: city.city,
                countryId: city.countryEntity?.countryId
            })
        })
            .then((res) => {
                if (res.ok) {
                    nav("/CityOne/" + cityId);
                } else {
                    alert("수정 실패");
                }
            });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">도시 정보 수정</h1>

            <div className="mb-4 flex items-center">
                <label className="text-gray-700 font-medium w-32">City ID</label>
                <div className="text-gray-900">{cityId}</div>
            </div>

            {/* City Name 입력 */}
            <div className="mb-6">
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                    City Name
                </label>
                <input
                    id="city"
                    type="text"
                    value={city.city || ""}
                    onChange={(e) =>
                        setCity({
                            ...city,
                            city: e.target.value,
                        })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Country ID 입력 */}
            <div className="mb-6">
                <label htmlFor="countryId" className="block text-gray-700 font-medium mb-2">
                    Country ID
                </label>
                <input
                    id="countryId"
                    type="number"
                    value={city.countryEntity?.countryId || ""}
                    onChange={(e) =>
                        setCity({
                            ...city,
                            countryEntity: {
                                ...city.countryEntity,
                                countryId: Number(e.target.value),
                            },
                        })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* 수정 버튼 */}
            <button
                onClick={editCity}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
            >
                수정
            </button>
        </div>
    );
}
