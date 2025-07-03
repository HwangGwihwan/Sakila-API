import { useNavigate, useParams } from "react-router-dom"

export default function AddCustomer() {

    let storeId = "";
    let firstName = "";
    let lastName = "";
    let email = "";
    let active = "";

    const {addressId} = useParams();
    const nav = useNavigate();

    function addCustomer() {
        fetch("http://localhost/customer", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({storeId: storeId, firstName: firstName, lastName: lastName,
                email: email, addressId: addressId, activea: active})
        })
        .then((res) => {
            if (res.ok) {
                alert("입력성공");
                nav("/Customer")
            } else {
                alert("입력실패");
            }
        })
    }
    return (
        <div>
            <h1>AddCustomer</h1>
            <div>
                store_id: <input type="text" onChange={(e) => {
                    storeId = e.target.value;
                }} />
                <br />
                first_name: <input type="text" onChange={(e) => {
                    firstName = e.target.value;
                }} />
                <br />
                last_name: <input type="text" onChange={(e) => {
                    lastName = e.target.value;
                }} />
                <br />
                email: <input type="text" onChange={(e) => {
                    email = e.target.value;
                }} />
                <br />
                active: <input type="text" onChange={(e) => {
                    active = e.target.value;
                }} />
                <br />
                <button onClick={addCustomer}>입력</button>
            </div>
        </div>
    )
}
