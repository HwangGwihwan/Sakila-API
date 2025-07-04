import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    const [country, setCountry] = useState("");
    const nav = useNavigate();

    function addCountry() {
        fetch("http://localhost/country", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: country })
        })
        .then((res) => {
            if (res.ok) {
                alert("입력 성공");
                nav("/Country");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">나라 추가</h1>

            <div className="mb-6">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country Name</label>
                <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="나라 이름을 입력하세요"
                />
            </div>

            <button
                onClick={addCountry}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
            >
                입력
            </button>
        </div>
    );
}
