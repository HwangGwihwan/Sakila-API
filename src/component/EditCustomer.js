import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCustomer() {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        fetch("http://localhost/customer/" + customerId)
            .then((res) => res.json())
            .then((data) => {
                setCustomer(data);
            });
    }, [customerId]);

    function editCustomer() {
        fetch("http://localhost/customer", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                customerId: customerId,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                storeId: customer.storeEntity?.storeId,
                addressId: customer.addressEntity?.addressId,
                active: customer.active,
            }),
        }).then((res) => {
            if (res.ok) {
                nav("/CustomerOne/" + customerId);
            } else {
                alert("수정 실패");
            }
        });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">고객 정보 수정</h1>

            <div className="mb-4 flex items-center">
                <label className="text-gray-700 font-medium w-32">Customer ID</label>
                <div className="text-gray-900">{customerId}</div>
            </div>

            {/* First Name */}
            <div className="mb-6">
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    value={customer.firstName || ""}
                    onChange={(e) =>
                        setCustomer({ ...customer, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Last Name */}
            <div className="mb-6">
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    value={customer.lastName || ""}
                    onChange={(e) =>
                        setCustomer({ ...customer, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={customer.email || ""}
                    onChange={(e) =>
                        setCustomer({ ...customer, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Store ID */}
            <div className="mb-6">
                <label htmlFor="storeId" className="block text-gray-700 font-medium mb-2">
                    Store ID
                </label>
                <input
                    id="storeId"
                    type="number"
                    value={customer.storeEntity?.storeId || ""}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            storeEntity: {
                                ...customer.storeEntity,
                                storeId: Number(e.target.value),
                            },
                        })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Address ID */}
            <div className="mb-6">
                <label htmlFor="addressId" className="block text-gray-700 font-medium mb-2">
                    Address ID
                </label>
                <input
                    id="addressId"
                    type="number"
                    value={customer.addressEntity?.addressId || ""}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            addressEntity: {
                                ...customer.addressEntity,
                                addressId: Number(e.target.value),
                            },
                        })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Active */}
            <div className="mb-6">
                <label htmlFor="active" className="block text-gray-700 font-medium mb-2">
                    Active
                </label>
                <input
                    id="active"
                    type="text"
                    value={customer.active !== undefined ? String(customer.active) : ""}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            active: e.target.value,
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
            </div>

            {/* 수정 버튼 */}
            <button
                onClick={editCustomer}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
            >
                수정
            </button>
        </div>
    );
}
