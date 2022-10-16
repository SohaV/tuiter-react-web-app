import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js";

const WhoToFollowList = () => {
    return (`
           <div class="list-group">
           <div class="fw-bold list-group-item list-group-item-action">Who to follow</div>
           <!-- continue here -->
           ${
        who.map(whos => {
            return(WhoToFollowListItem(whos));
        }).join('')
    }
           </div>
`); }

export default WhoToFollowList;