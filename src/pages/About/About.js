import React from 'react';
import QuickAccess from '../QuickAcces/QuickAccess';

const About = () => {
    return (
        <div>
            <div className="row p-5" style={{ backgroundColor: '#F4FCD9', fontFamily: 'raleway' }}>
                <div className="col-lg-7 col-md-6, col-sm-12">
                    <div className="m-2 p-4 border border-3 border-gray rounded-3">
                        <h3 className="border-bottom pb-2 border-3 border-gray " style={{ color: '#534340', fontWeight: 500 }}>About Us</h3>
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why_E-Learning_Insights_into_the_World_of_Online_Learning_and_Development.jpg" className="img-fluid" alt="hello Bangladehs"></img>
                        <div>
                            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id illo doloremque corrupti dolores voluptatem voluptate rem fugit quia reprehenderit mollitia, non pariatur ipsum soluta tenetur </p>
                            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id illo doloremque corrupti dolores voluptatem voluptate rem fugit quia reprehenderit mollitia, non pariatur ipsum soluta tenetur </p>
                            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id illo doloremque corrupti dolores voluptatem voluptate rem fugit quia reprehenderit mollitia, non pariatur ipsum soluta tenetur </p>
                            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id illo doloremque corrupti dolores voluptatem voluptate rem fugit quia reprehenderit mollitia, non pariatur ipsum soluta tenetur </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6, col-sm-12">
                    <div className="m-2 p-4 border border-3 border-gray rounded-3">
                        <h3 className="border-bottom pb-2 border-3 border-gray" style={{ color: '#534340', fontWeight: 500 }}>Quick Access</h3>
                        <QuickAccess></QuickAccess>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default About;