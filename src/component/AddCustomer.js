import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddCustomer() {
  const { addressId } = useParams();
  const nav = useNavigate();

  const [storeId, setStoreId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("");

  function addCustomer() {
    fetch("http://localhost/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        storeId: Number(storeId),
        firstName,
        lastName,
        email,
        addressId: Number(addressId),
        active: active,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("입력 성공");
        nav("/Customer");
      } else {
        alert("입력 실패");
      }
    });
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">고객 추가</h1>

      <div className="mb-6">
        <label htmlFor="storeId" className="block text-gray-700 font-medium mb-2">
          Store ID
        </label>
        <input
          id="storeId"
          type="number"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="숫자로 입력하세요"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="이름을 입력하세요"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="성을 입력하세요"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="이메일을 입력하세요"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="active" className="block text-gray-700 font-medium mb-2">
          Active
        </label>
        <input
          id="active"
          type="text"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="활성화 여부 입력"
        />
      </div>

      <button
        onClick={addCustomer}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
      >
        입력
      </button>
    </div>
  );
}
