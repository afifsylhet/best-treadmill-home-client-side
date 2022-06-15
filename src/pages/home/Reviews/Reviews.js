import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {
    const [reviews, setreviews] = useState([]);


    useEffect(() => {
        const url = 'https://serene-fortress-61222.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [reviews])

    return (
        <div className="m-2" style={{ fontFamily: 'raleway' }}>
            <div>
                <br />
                <h1 className="text-center" style={{ color: '#534340' }}>Some Woderfull Words From Our Clients</h1>
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
                                    <Rating className="fs-1 text-center p-1 my-1" style={{ backgroundColor: '#F4FcD9', color: '#534340' }}

                                        emptySymbol="far fa-star fa-.4x"
                                        fullSymbol="fas fa-star fa-.4x"
                                        initialRating={review.rating}
                                        readonly
                                    />
                                    <Card.Body>
                                        <h4 style={{ color: '#534340' }}>{review.rev_name}</h4>
                                        <h5 style={{ color: '#bb9981' }}>{review.rev_address}</h5>
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