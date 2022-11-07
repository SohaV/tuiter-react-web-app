import React from "react";

const TuitStatsComponent = (
    {
        post = {
            // "topic": "Space",
            // "userName": "SpaceX",
            // "time": "2h",
            // "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            // "image": "tesla.png",
            "liked": true,
            "replies": 111,
            "retuits": 222,
            "likes": 333,
            "handle": "@test",
            "tuit": "Testing"

        }
    }
) => {
    return (
        <>
            <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                <i className="fa fa-comment text-secondary"></i><span
                className="text-secondary me-5"> {post.replies}</span>
                <i className="fa fa-retweet text-secondary ms-5"></i><span
                className="text-secondary text-decoration-none me-5"> {post.retuits}</span>

                {
                    post.liked && <i className="fa fa-heart ms-5 text-danger"></i>
                }
                {
                    !post.liked && <i className="fa fa-heart ms-5 text-secondary"></i>
                }
                <span
                    className="text-secondary text-decoration-none me-5"> {post.likes}</span>
                <i className="fa fa-upload text-secondary ms-5"></i>
            </div>
        </>

    );
}


export default TuitStatsComponent;