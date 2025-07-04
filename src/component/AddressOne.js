import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AddressOne() {
  const { addressId } = useParams();
  const [address, setAddress] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost/address/" + addressId)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, [addressId]);

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

  function removeAddress() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch("http://localhost/address/" + addressId, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          nav("/Address");
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
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Address 상세 정보</h1>

      {/* 고객 추가 링크 */}
      <div className="mb-4">
        <Link
          to={`/AddCustomer/${addressId}`}
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          고객 추가
        </Link>
      </div>

      {/* 정보 테이블 */}
      <table className="w-full border border-gray-300 rounded overflow-hidden mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border-b border-gray-300 w-1/3">Address ID</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.addressId}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-3 border-b border-gray-300">Address</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.address}</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border-b border-gray-300">District</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.district}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-3 border-b border-gray-300">City</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.cityEntity?.city}</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border-b border-gray-300">Country</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.cityEntity?.countryEntity?.country}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-3 border-b border-gray-300">Postal Code</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.postalCode}</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border-b border-gray-300">Phone</th>
            <td className="px-4 py-3 border-b border-gray-300">{address.phone}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-3">Last Update</th>
            <td className="px-4 py-3">{formatDateTime(address.lastUpdate)}</td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 영역 */}
      <div className="flex space-x-4">
        <button
          onClick={removeAddress}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          삭제
        </button>

        <button
          onClick={() => nav("/EditAddress/" + addressId)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          수정
        </button>
      </div>
    </div>
  );
}
