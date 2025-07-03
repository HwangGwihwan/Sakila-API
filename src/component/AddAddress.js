import { useNavigate, useParams } from "react-router-dom"

export default function AddAddress() {

    let address = "";
    let district = "";
    let postalCode = "";
    let phone = "";

    const {cityId} = useParams();
    const nav = useNavigate();

    function addAddress() {
        fetch("http://localhost/address", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({address: address, district: district, cityId: cityId,
                postalCode: postalCode, phone: phone})
        })
        .then((res) => {
            if (res.ok) {
                alert("입력성공");
                nav("/Address")
            } else {
                alert("입력실패");
            }
        })
    }

    return (
        <div>
            <h1>AddAddress</h1>
            <div>
                address: <input type="text" onChange={(e) => {
                    address = e.target.value;
                }}/>
                <br />
                district: <input type="text" onChange={(e) => {
                    district = e.target.value;
                }}/>
                <br />
                postal_code: <input type="text" onChange={(e) => {
                    postalCode = e.target.value;
                }}/>
                <br />
                phone: <input type="text" onChange={(e) => {
                    phone = e.target.value;
                }}/>
                <br />
                <button onClick={addAddress}>입력</button>
            </div>
        </div>
    )
}
