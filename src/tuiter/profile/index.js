import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

const ProfileComponent = () => {
    const profileArray = useSelector((state) => state.profiles);
    const navigate = useNavigate();
    const editProfileHandler = () => {
        navigate('/tuiter/edit-profile');
    }

        return(
            <>
                {
                    profileArray.map(profile =>

                            <div className="border border-secondary p-3">
                                <i className="fa fa-arrow-left float-start" aria-hidden="true"></i>
                                <div className="float-right ms-5">
                                    <h5>{profile.firstName} {profile.lastName}</h5>
                                    <h6 className="text-secondary">6,114 Tweets</h6>
                                </div>
                                <div>
                                    <img alt="profile" src={profile.profilePicture} className="rounded-circle position-absolute ms-4" style={{width: '25%', height: '30%', marginTop: '20%'}}/>
                                </div>
                                <img alt="profile" src={profile.bannerPicture} className="w-100 h-25"/>

                                <button className="rounded-pill float-end fw-bold mt-2 border border-secondary" onClick={editProfileHandler}>Edit Profile</button>
                                <div style={{marginTop: '20%'}}>
                                    <h3>{profile.firstName} {profile.lastName}</h3>
                                    <h6>{profile.handle}</h6>
                                    <br/>
                                    <p>{profile.bio}</p>
                                    <div>
                                        <span><i className="fa fa-map-marker" aria-hidden="true"></i> {profile.location}</span>
                                        <span className="ms-4"><i className="fa fa-birthday-cake" aria-hidden="true"></i> {profile.dateOfBirth}</span>
                                        <span className="ms-4"><i className="fa fa-calendar" aria-hidden="true"></i> Joined {profile.dateJoined}</span>
                                    </div>
                                    <span>
                                <p className="mt-2"><span className="fw-bold">{profile.followingCount}</span> Following<span className="fw-bold ms-3">{profile.followersCount}</span> Followers</p>
                            </span>
                                </div>
                            </div>




                    )
                }





            </>
        );
}

export default ProfileComponent;