import React, {useEffect} from "react";
// import postsArray from './posts.json';
import TuitsItemComponent
    from "../TuitsItem/index.js";
import {useDispatch, useSelector} from "react-redux";
import TuitStatsComponent from "../TuitStats";
import {findTuitsThunk}
    from "../../../services/tuits-thunks.js";


const TuitsListComponent = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    })

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(post =>
                    <div>
                        <TuitsItemComponent
                            key={tuits._id} post={post}/>
                        <TuitStatsComponent
                            key={tuits._id} post={post}/>
                    </div>

                )
            }

        </ul>
    );
};
export default TuitsListComponent;