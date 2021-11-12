import React, { useRef } from 'react';
import OffCanvas from '../OffCanvas/OffCanvas';

const AddProduct = () => {


    const nameRef = useRef("")
    const imgRef = useRef("")
    const brandRef = useRef("")
    const totalRatingsRef = useRef("")
    const ourRatingsRef = useRef("")
    const priceRef = useRef("")
    const disRef = useRef("")
    const glance_1Ref = useRef("")
    const glance_2Ref = useRef("")
    const glance_3Ref = useRef("")
    const glance_4Ref = useRef("")
    const glance_5Ref = useRef("")
    const glance_6Ref = useRef("")

    const setToDatabase = (e) => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const brand = brandRef.current.value;
        const totalRatings = totalRatingsRef.current.value;
        const ourRatings = ourRatingsRef.current.value;
        const price = priceRef.current.value;
        const dis = disRef.current.value;
        const glance_1 = glance_1Ref.current.value;
        const glance_2 = glance_2Ref.current.value;
        const glance_3 = glance_3Ref.current.value;
        const glance_4 = glance_4Ref.current.value;
        const glance_5 = glance_5Ref.current.value;
        const glance_6 = glance_6Ref.current.value;

        const newProduct = { name, img, brand, totalRatings, ourRatings, price, dis, glance_1, glance_2, glance_3, glance_4, glance_5, glance_6 }

        console.log(newProduct)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    alert("Successfully added the product")
                }
            })

        e.target.reset();
        e.preventDefault();
    }



    return (
        <div>
            <h2 className="text-center my-2 text-success"> Add Product Section</h2>

            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>


            <div>
                <div className="container p-3">
                    <div className=" border border-muted border-2 p-3">
                        <h2 className="text-muted my-3 text-center">Add a new product</h2>
                        <p>For adding a product, please fillup all the bellow form. In this form have to need fillup all input section. Please note that if you blank any input , then your data will not sent to server. </p>

                        <div>
                            <form onSubmit={setToDatabase}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name </label>
                                    <input type="Text" className="form-control" id="exampleInputEmail1" placeholder=" type the product name" ref={nameRef} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="imgUrl1" className="form-label">Image Url</label>
                                    <input type="text" className="form-control" id="imgUrl1" placeholder="Please type image url" ref={imgRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl2" className="form-label">Brand Name</label>
                                    <input type="text" className="form-control" id="imgUrl2" placeholder=" Please the brand name of the product" ref={brandRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl3" className="form-label">Total Ratings of this Product</label>
                                    <input type="number" className="form-control" id="imgUrl3" placeholder="Total Ratings of this product" ref={totalRatingsRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl4" className="form-label">Company Ratings of this Product</label>
                                    <input type="number" className="form-control" id="imgUrl4" placeholder="Type a number between 1 to 5" ref={ourRatingsRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl5" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="imgUrl5" placeholder="Type product price" ref={priceRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl6" className="form-label">Despriction of this product</label>
                                    <textarea type="text" className="form-control" id="imgUrl6" placeholder="Type main discription of ths product" ref={disRef} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl7" className="form-label">Key fetures 1</label>
                                    <input type="text" className="form-control" id="imgUrl7" placeholder="Type a key feature" ref={glance_1Ref} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl8" className="form-label">Key fetures 2</label>
                                    <input type="text" className="form-control" id="imgUrl8" placeholder="Type a key feature" ref={glance_2Ref} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl9" className="form-label">Key fetures 3</label>
                                    <input type="text" className="form-control" id="imgUrl9" placeholder="Type a key feature" ref={glance_3Ref} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUr20" className="form-label">Key fetures 4</label>
                                    <input type="text" className="form-control" id="imgUr20" placeholder="Type a key feature" ref={glance_4Ref} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUr21" className="form-label">Key fetures 5</label>
                                    <input type="text" className="form-control" id="imgUr21" placeholder="Type a key feature" ref={glance_5Ref} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUr22" className="form-label">Key fetures 6</label>
                                    <input type="text" className="form-control" id="imgUr22" placeholder="Type a key feature" ref={glance_6Ref} required />
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

export default AddProduct;