import { useNavigate, useParams } from "react-router-dom"

export default function AddCity() {

    let city = "";
    const {countryId} = useParams();
    const nav = useNavigate();

    function addCity() {
        fetch("http://localhost/city", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({city: city, countryId: countryId})
        })
        .then((res) => {
            if (res.ok) {
                alert("입력성공");
                nav("/City");
            } else {
                alert("입력실패");
            }
        })
    }


    return (
        <div>
            <h1>AddCity</h1>
            <div>
                city: <input type="text" onChange={(e) => {
                    city = e.target.value;
                }}/>
                <br />
                <button onClick={addCity}>입력</button>
            </div>
        </div>
    )
}
