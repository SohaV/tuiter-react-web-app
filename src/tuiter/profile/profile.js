import { createSlice } from "@reduxjs/toolkit";
// import profiles from './profiles.json';

const profile = [{
        firstName: 'Soha',
        lastName: 'Vankudre',
        handle: '@sohav',
        profilePicture: '../../images/user.jpg',
        bannerPicture: '../../images/bac.jpg',
        bio: 'Student, Web development, MS CS, Fall 2022, Creative. Dedicated. Honest.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '05/12/1998',
        dateJoined: 'Sept 2022',
        followingCount: 340,
        followersCount: 223
}];

const profilesSlice = createSlice({
        name: 'profiles',
        initialState: profile,
        reducers: {
                addProfile(state, action) {
                        state = action.payload

                        // ({
                        //         firstName: action.payload.firstName,
                        //         // lastName: action.payload.lastName
                        // });
                },
        }

});

export const {addProfile} = profilesSlice.actions
export default profilesSlice.reducer;