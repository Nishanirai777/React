import { useState } from "react";




export default function CommentsForm() {
    let [formData, setformData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setformData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };
    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setformData({
            username: "",
            remarks: "",
            rating: 5
        });
    }
    return (
        <div>
            <h4>
                Give me a Comments
            </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username" />
                <br></br>
                <br></br>
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks}
                    onChange={handleInputChange}
                    placeholder=" add a fewremarks"
                    id="remarks"
                    name="remarks"></textarea>
                <br></br>
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating "
                    type="number" min={1} max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                    name="rating" />
                <br></br>
                <br></br>
                <button>Add Comments</button>
            </form>
        </div>
    );
}
