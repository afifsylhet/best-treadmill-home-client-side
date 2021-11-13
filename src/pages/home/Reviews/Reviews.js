import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {
    const [reviews, setreviews] = useState([]);

    console.log(reviews)

    useEffect(() => {
        const url = 'https://serene-fortress-61222.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <div className="m-2">
            <div>
                <br />
                <h1 className="text-primary text-center">Some Woderfull Words From Our Client</h1>
            </div>
            <div>
                <Row xs={1} sm={1} md={2} lg={3}>
                    {
                        reviews.map(review =>
                            <Col key={review._id} className="my-3">
                                <Card className="shadow ">
                                    <div className="d-flex justfy-content-around">
                                        <img src={review.rev_img} alt="sdf" className="rounded-circle w-50 img-fluid mx-auto p-2 border border-info m-2" />
                                    </div>
                                    <Rating className="fs-1 text-center bg-light p-1 my-1 text-success"

                                        emptySymbol="far fa-star fa-.4x"
                                        fullSymbol="fas fa-star fa-.4x"
                                        initialRating={review.rating}
                                        readonly
                                    />
                                    <Card.Body>
                                        <h4>{review.rev_name}</h4>
                                        <h5 className="text-muted">{review.rev_address}</h5>
                                        <p className="py-3">{review.rev_text}</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    }
                </Row>
            </div >
        </div >
    );
};


export default Reviews;