import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAddress() {
  const { addressId } = useParams();
  const [address, setAddress] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost/address/" + addressId)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, [addressId]);

  function editAddress() {
    fetch("http://localhost/address", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        addressId: addressId,
        address: address.address,
        district: address.district,
        cityId: address.cityEntity?.cityId,
        postalCode: address.postalCode,
        phone: address.phone,
      }),
    }).then((res) => {
      if (res.ok) {
        nav("/AddressOne/" + addressId);
      } else {
        alert("수정 실패");
      }
    });
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">주소 정보 수정</h1>

      <div className="mb-4 flex items-center">
        <label className="text-gray-700 font-medium w-32">Address ID</label>
        <div className="text-gray-900">{addressId}</div>
      </div>

      <div className="mb-6">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
          Address
        </label>
        <input
          id="address"
          type="text"
          value={address.address || ""}
          onChange={(e) =>
            setAddress({
              ...address,
              address: e.target.value,
            })
          }
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
          value={address.district || ""}
          onChange={(e) =>
            setAddress({
              ...address,
              district: e.target.value,
            })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="cityId" className="block text-gray-700 font-medium mb-2">
          City ID
        </label>
        <input
          id="cityId"
          type="number"
          value={address.cityEntity?.cityId || ""}
          onChange={(e) =>
            setAddress({
              ...address,
              cityEntity: {
                ...address.cityEntity,
                cityId: Number(e.target.value),
              },
            })
          }
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
          value={address.postalCode || ""}
          onChange={(e) =>
            setAddress({
              ...address,
              postalCode: e.target.value,
            })
          }
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
          value={address.phone || ""}
          onChange={(e) =>
            setAddress({
              ...address,
              phone: e.target.value,
            })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={editAddress}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
      >
        수정
      </button>
    </div>
  );
}
