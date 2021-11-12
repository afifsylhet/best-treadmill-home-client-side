

import React, { useRef } from 'react';
import OffCanvas from '../OffCanvas/OffCanvas';

const ReviewD = () => {


    const ratingRef = useRef("")
    const rev_nameRef = useRef("")
    const rev_imgRef = useRef("")
    const rev_addressRef = useRef("")
    const rev_textRef = useRef("")


    const setToDatabase = (e) => {
        const rating = ratingRef.current.value;
        const rev_name = rev_nameRef.current.value;

        const rev_img = rev_imgRef.current.value;
        const rev_address = rev_addressRef.current.value;
        const rev_text = rev_textRef.current.value;


        const newReview = { rating, rev_name, rev_img, rev_address, rev_text }

        console.log(newReview)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    alert("Successfully added the review")
                }
            })

        e.target.reset();
        e.preventDefault();
        console.log(newReview)
    }



    return (
        <div>
            <h2 className="text-center my-2 text-success"> Give a Review, please drop your kind words</h2>

            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>


            <div>
                <div className="container p-3">
                    <div className=" border border-muted border-2 p-3">
                        <h2 className="text-muted my-3 text-center">Add a new review</h2>
                        <p>For providing a review, please fillup all the bellow form. In this form have to need fillup all input section. Please note that if you blank any input , then your data will not sent to server. </p>

                        <div>
                            <form onSubmit={setToDatabase}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Your Provided Ratings ( between 1 to 5)</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" placeholder=" type a number between 1 to 5" ref={ratingRef} required />
                                </div>

                                <div className="mb-3">
                                    <label for="imgUrl1" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="imgUrl1" placeholder="Please type your name" ref={rev_nameRef} required />
                                </div>
                                <div className="mb-3">
                                    <label for="imgUrl2" className="form-label">Your Photo Url</label>
                                    <input type="text" className="form-control" id="imgUrl2" placeholder=" Please type your img url" ref={rev_imgRef} required />
                                </div>
                                <div className="mb-3">
                                    <label for="imgUrl3" className="form-label">Your Country and City</label>
                                    <input type="text" className="form-control" id="imgUrl3" placeholder="EX: Sylhet, Bangladesh" ref={rev_addressRef} required />
                                </div>
                                <div className="mb-3">
                                    <label for="imgUrl3" className="form-label">Your Kind Words</label>
                                    <textarea type="text" className="form-control" id="imgUrl3" placeholder="Type your kind words" ref={rev_textRef} required />
                                </div>
                                <input type="submit" value="Submit" className="btn btn-secondary" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReviewD;