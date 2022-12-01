import React, {useEffect} from "react";
// import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks.js";

const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line
    }, [])
    return(
        <ul className="list-group">
            {
                tuits.map(post =>
                    <PostSummaryItem
                        key={tuits._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;