import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddAddress() {
  const { cityId } = useParams();

  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  const nav = useNavigate();

  function addAddress() {
    fetch("http://localhost/address", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address,
        district,
        cityId,
        postalCode,
        phone,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("입력 성공");
        nav("/Address");
      } else {
        alert("입력 실패");
      }
    });
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">주소 추가</h1>

      <div className="mb-6">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
          Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="주소를 입력하세요"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="district" className="block text-gray-700 font-medium mb-2">
          District
        </label>
        <input
          id="district"
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          placeholder="구역을 입력하세요"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">
          Postal Code
        </label>
        <input
          id="postalCode"
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="우편번호를 입력하세요"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호를 입력하세요"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={addAddress}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
      >
        입력
      </button>
    </div>
  );
}
