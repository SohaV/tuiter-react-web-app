import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const HomeComponent = () => {
    return (
        <>
            <div className="border border-secondary border-2 p-3">
                <div><i className="fa fa-retweet ms-5 mt-3"></i> Elon Musk retweeted</div>
                <span className="float-end text-secondary h5">&#8230;</span>
                <div className="mt-1">

                    <img alt="SpaceX" className="rounded-circle float-start me-3" src="../images/spacex.jpg" style={{width: '10%', height: '10%'}}/>
                    <div>
                        <h2 className="h6 fw-bold">SpaceX <span className="fa fa-check-circle text-primary">
                    <span className="text-secondary float-right" style={{fontSize: '13px'}}> @SpaceX <span className="text-secondary">&#x2022;</span> 23h</span>
                    </span></h2>
                    </div>
                    <div className="text-black mb-3">
                        Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon
                         &nbsp;<i className="fa fa-arrow-right"></i>
                        <span className="text-primary"> spacex.com/updates</span>
                    </div>

                    <img alt="DennisAkiko" className="rounded h-75" src="../images/DennisAkiko.jpg" style={{width: '80%', marginLeft: '70px'}}/>

                    <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                        <i className="fa fa-comment text-secondary"></i><span
                        className="text-secondary me-5"> 595</span>
                        <i className="fa fa-retweet text-secondary ms-5"></i><span
                        className="text-secondary text-decoration-none me-5"> 1,168</span>
                        <i className="fa fa-heart text-secondary ms-5"></i><span
                        className="text-secondary text-decoration-none me-5"> 11.1K</span>
                        <i className="fa fa-upload text-secondary ms-5"></i>
                    </div>

                </div>
                <span className="text-primary ms-5">Show this thread</span>

                <div className="mt-4">
                    <span className="float-end text-secondary h5">&#8230;</span>
                    <div className="mt-1">
                        <img alt="Elon Musk" className="rounded-circle float-start me-3" src="../images/elonMusk.jpg" style={{width: '10%', height: '10%'}}/>
                        <div>
                            <h2 className="h6 fw-bold">Elon Musk <span className="fa fa-check-circle text-primary">
                        <span className="text-secondary float-right" style={{fontSize: '13px'}}> @elonmusk <span className="text-secondary">&#x2022;</span> 15h</span>
                        </span></h2>
                        </div>
                        <div className="text-black mb-3">
                            We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.
                        </div>

                        <div className="border border-secondary rounded p-2" style={{marginLeft: '70px'}}>
                            <img alt="Space X" className="rounded-circle float-start me-3" src="../images/spacex.jpg" style={{width: '5%', height: '5%'}}/>
                            <div>
                                <h2 className="h6 fw-bold">SpaceX <span className="fa fa-check-circle text-primary">
                                <span className="text-secondary float-right" style={{fontSize: '13px'}}> @SpaceX <span className="text-secondary">&#x2022;</span> 16h</span>
                                </span></h2>
                            </div>

                            <div className="text-black mb-3">
                                Starlink for RV's now has over 100,000 customers! Access high-speed, low latency internet on an as-needed basis anywhere Starlink provides active
                                coverage&nbsp;<i className="fa fa-arrow-right"></i><span className="text-primary"> starlink.com/rv</span>
                            </div>
                        </div>

                        <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                            <i className="fa fa-comment text-secondary"></i><span
                            className="text-secondary me-5"> 5,346</span>
                            <i className="fa fa-retweet text-secondary ms-5"></i><span
                            className="text-secondary text-decoration-none me-5"> 1,101</span>
                            <i className="fa fa-heart text-secondary ms-5"></i><span
                            className="text-secondary text-decoration-none me-5"> 19.2K</span>
                            <i className="fa fa-upload text-secondary ms-5"></i>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default HomeComponent;
