import React, {useEffect} from "react";
// import postsArray from './posts.json';
import TuitsItemComponent
    from "../TuitsItem/index.js";
import {useDispatch, useSelector} from "react-redux";
import TuitStatsComponent from "../TuitStats";
import {findTuitsThunk, updateTuitThunk}
    from "../../../services/tuits-thunks.js";


const TuitsListComponent = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                <div className="mt-1">
                    {/*<i className="bi bi-x-lg float-end"*/}
                    {/*   onClick={() => deleteTuitHandler(post._id)}></i>*/}

                    <img alt="Spacex" className="rounded-circle float-start me-3" src="../../../images/spacex.jpg"
                         style={{width: '10%', height: '10%'}}/>
                    <div>
                        <h2 className="h6 fw-bold">Space <span className="fa fa-check-circle text-primary">
                            <span className="text-secondary float-right" style={{fontSize: '13px'}}> @spacex <span
                                className="text-secondary">&#x2022;</span> 2h</span>
                            </span></h2>
                    </div>
                    <div className="text-black mb-3 row">
                        You want to wake up in the morning and think the future is going to be great - and that’s what
                        being a spacefaring civilization is all about. It’s about believing in the future and thinking
                        that the future will be better than the past. And I can’t think of anything more exciting than
                        going out there and being among the stars
                    </div>
                </div>
            }
            {
                <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                <i className="fa fa-comment text-secondary"></i><span
                className="text-secondary me-5"> 123</span>
                <i className="fa fa-retweet text-secondary ms-5"></i><span
                className="text-secondary text-decoration-none me-5"> 432</span>

                <i className="bi bi-heart-fill me-2 text-danger"></i>
                <span className="text-secondary text-decoration-none me-5"> 2345</span>

                <i className="fa fa-thumbs-down me-2 text-primary"></i>
                <span className="text-secondary text-decoration-none me-5"> 100</span>
                <i className="fa fa-upload text-secondary ms-5"></i>
                </div>
            }
            {
                <div className="mt-1">
                    {/*<i className="bi bi-x-lg float-end"*/}
                    {/*   onClick={() => deleteTuitHandler(post._id)}></i>*/}

                    <img alt="traffic" className="rounded-circle float-start me-3" src="../../../images/traffic.jpg"
                         style={{width: '10%', height: '10%'}}/>
                    <div>
                        <h2 className="h6 fw-bold">Traffic <span className="fa fa-check-circle text-primary">
                            <span className="text-secondary float-right" style={{fontSize: '13px'}}> @boringcompany <span
                                className="text-secondary">&#x2022;</span> 2h</span>
                            </span></h2>
                    </div>
                    <div className="text-black mb-3 row">
                        The Boring Company (TBC) is an American infrastructure and tunnel construction services company founded by Elon Musk. Its ongoing and proposed projects are designed for intra-city ('loop') transit systems.
                    </div>
                </div>
            }
            {
                <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                    <i className="fa fa-comment text-secondary"></i><span
                    className="text-secondary me-5"> 123</span>
                    <i className="fa fa-retweet text-secondary ms-5"></i><span
                    className="text-secondary text-decoration-none me-5"> 432</span>

                    <i className="bi bi-heart-fill me-2 text-danger"></i>
                    <span className="text-secondary text-decoration-none me-5"> 2345</span>

                    <i className="fa fa-thumbs-down me-2 text-primary"></i>
                    <span className="text-secondary text-decoration-none me-5"> 100</span>
                    <i className="fa fa-upload text-secondary ms-5"></i>
                </div>
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