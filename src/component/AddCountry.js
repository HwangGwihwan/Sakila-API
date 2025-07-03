import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {

    // let country = "";
    const [country, setCountry] = useState("");
    const nav = useNavigate();

    function addCountry() {
        //alert('addCountry');
        fetch("http://localhost/country", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({country: country})
        })
        .then((res) => {
            if (res.ok) {
                alert("입력성공");
                // Country 컴포넌트를 렌더링
                nav("/Country");
            } else {
                alert("입력실패");
            }
        })
    }

    return (
        <div>
            <h1>AddCountry</h1>
            <div>
                country: <input type="text" onChange={(e) => {
                    //country = e.target.value;
                    setCountry(e.target.value);
                }}/>
                <br />
                <div>상태변수 country: {country}</div>
                <button onClick={addCountry}>입력</button>
            </div>
        </div>

    )
}
