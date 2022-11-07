import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addProfile} from '../profile.js';


const EditProfileComponent = () => {
    const profileArray = useSelector((state) => state.profiles);
    let firstname;
    let lastname;
    let bio;
    let loc;
    let website;
    let dateofbirth;
    profileArray.map(profile => {
        firstname = profile.firstName;
        lastname = profile.lastName;
        bio = profile.bio;
        loc = profile.location;
        website = profile.website;
        dateofbirth = profile.dateOfBirth;
    });
    const [firstName, setFirstName] = useState(firstname);
    const [lastName, setLastName] = useState(lastname);
    const [bio1, setBio] = useState(bio);
    const [loc1, setLocation] = useState(loc);
    const [website1, setWebsite] = useState(website);
    const [dob, setDob] = useState(dateofbirth);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const saveHandler = () => {
        const profileValues = {
            firstName: firstname,
            lastName: lastname,
            bio: bio,
            location: loc,
            website: website,
            dateOfBirth: dateofbirth
        }
        dispatch(addProfile(profileValues))
        navigate('/tuiter/profile');
    }

    const fnChangeHandler = (event) => {
        const fnValue = event.target.value;
        setFirstName(fnValue);
        console.log(fnValue);
    }

    const lnChangeHandler = (event) => {
        const lnValue = event.target.value;
        setLastName(lnValue);
        console.log(lnValue);
    }

    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        setBio(bioValue);
        console.log(bioValue);
    }

    const locChangeHandler = (event) => {
        const locValue = event.target.value;
        setLocation(locValue);
        console.log(locValue);
    }

    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        setWebsite(websiteValue);
        console.log(websiteValue);
    }

    const dobChangeHandler = (event) => {
        const dobValue = event.target.value;
        setDob(dobValue);
        console.log(dobValue);
    }

    const closeHandler = () => {
        navigate('/tuiter/profile');
    }

    // const lnChangeHandler = (event) => {
    //     const lnValue = event.target.value;
    //     const newlnValue = {
    //         lastName: lnValue
    //     };
    //     setProfile(newlnValue);
    // }
    //
    // const bioChangeHandler = (event) => {
    //     const bioValue = event.target.value;
    //     const newbioValue = {
    //         bio: bioValue
    //     };
    //     setProfile(newbioValue);
    // }

    return(
        <>

                    <div className="border border-secondary p-3 mb-2">
                        <i className="bi bi-x-lg float-start" onClick={closeHandler}></i>
                        <div className="float-right ms-5">
                            <button className="rounded-pill fw-bold border border-secondary float-end mt-0 mb-4 bg-black text-white"
                               onClick={saveHandler} >Save
                            </button>
                            <h5>Edit Profile</h5>

                        </div>

                        <div>
                            <img src="../../images/user.jpg" className="rounded-circle position-absolute ms-4"
                                 style={{width: '20%', height: '20%', marginTop: '20%'}}/>
                        </div>
                        <img src="../../images/bac.jpg" className="w-100 h-25"/>

                        <div style={{marginTop: '35%'}}>
                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="fn">First Name</label><br/>
                                <input type="text" placeholder="First Name" id="fn"
                                        value={firstName} onChange={fnChangeHandler}/>
                            </div>

                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="ln">Last Name</label><br/>
                                <input type="text" placeholder="Last Name" id="ln"
                                       value={lastName} onChange={lnChangeHandler}/>
                            </div>

                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="bio">Bio</label><br/>
                                <textarea className="w-100" placeholder="Bio" id="bio"
                                          value={bio1} onChange={bioChangeHandler}></textarea>
                            </div>

                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="loc">Location</label><br/>
                                <input type="text" placeholder="Location" id="loc"
                                       value={loc1} onChange={locChangeHandler}/>
                            </div>

                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="website">Website</label><br/>
                                <input type="text" placeholder="Website" id="website"
                                       value={website1} onChange={websiteChangeHandler}/>
                            </div>

                            <div className="mb-3 border border-secondary rounded p-3">
                                <label for="dob">Birth date <a href="#">Edit</a></label><br/>
                                <input type="text" placeholder="Website" id="dob"
                                       value={dob} onChange={dobChangeHandler}/>
                            </div>


                            {/*<div className="input-group mb-3">*/}
                            {/*    <span className="input-group-text">Select Date</span>*/}
                            {/*    <input type="text" className="form-control" value={profile.dateOfBirth}*/}
                            {/*           onChange={dobChangeHandler}/>*/}
                            {/*    <span className="input-group-text"><i className="fas fa-calendar"></i></span>*/}
                            {/*</div>*/}

                            <div className="mb-3">
                                <span>Switch to Professional</span>
                                <button className="float-end"><i className="fa fa-caret-right"></i>
                                </button>
                            </div>
                        </div>


                        {/*<button className="rounded-pill float-end fw-bold mt-2 border border-secondary">Edit Profile</button>*/}
                        {/*<div style={{marginTop: '20%'}}>*/}
                        {/*    <h3>Soha Vankudre</h3>*/}
                        {/*    <h6>@SohaV</h6>*/}
                        {/*    <br/>*/}
                        {/*    <p>Student, Web developer, MS CS, Fall 2022, Creative. Dedicated. Honest.</p>*/}
                        {/*    <div>*/}
                        {/*        <span><i className="fa fa-map-marker" aria-hidden="true"></i> Boston, MA</span>*/}
                        {/*        <span className="ms-4"><i className="fa fa-birthday-cake" aria-hidden="true"></i> 1998</span>*/}
                        {/*        <span className="ms-4"><i className="fa fa-calendar" aria-hidden="true"></i> Joined Sept 2022</span>*/}
                        {/*    </div>*/}
                        {/*    <span>*/}
                        {/*                <p className="mt-2"><span className="fw-bold">340</span> Following<span className="fw-bold ms-3">223</span> Followers</p>*/}
                        {/*            </span>*/}
                        {/*</div>*/}
                    </div>

        </>
    );
}

export default EditProfileComponent;