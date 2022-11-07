import React from "react";
// import postsArray from './posts.json';
import TuitsItemComponent
    from "../TuitsItem/index.js";
import {useSelector} from "react-redux";
import TuitStatsComponent from "../TuitStats";

const TuitsListComponent = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(post =>
                    <div>
                        <TuitsItemComponent
                            key={tuitsArray._id} post={post}/>
                        <TuitStatsComponent
                        key={tuitsArray._id} post={post}/>
                    </div>

                )
            }

        </ul>
    );
};
export default TuitsListComponent;