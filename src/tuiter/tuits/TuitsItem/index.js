import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";




const TuitsItemComponent = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 111,
            "retuits": 222,
            "likes": 333,
            "handle": "@test",
            "tuit": "Testing"

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <>
            <div className="mt-1">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(post._id)}></i>

                <img alt={post.userName} className="rounded-circle float-start me-3" src={post.image} style={{width: '10%', height: '10%'}}/>
                <div>
                    <h2 className="h6 fw-bold">{post.topic} <span className="fa fa-check-circle text-primary">
            <span className="text-secondary float-right" style={{fontSize: '13px'}}> {post.handle} <span className="text-secondary">&#x2022;</span> {post.time}</span>
            </span></h2>
                </div>
                <div className="text-black mb-3 row">
                    {post.tuit}
                </div>
            </div>
        </>
    );
};
export default TuitsItemComponent;