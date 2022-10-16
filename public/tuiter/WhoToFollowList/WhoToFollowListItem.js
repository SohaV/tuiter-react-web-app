const WhoToFollowListItem = (who) => {
    return(`
<div class="list-group">
    <div class="list-group-item list-group-item-action col-4">
                    <div class="row">
                        <div class="col-3">
                            <img src="${who.avatarIcon}" class="w-75 h-75 rounded-circle">
                        </div>
                        <div class="col-6">
                            <span class="fw-bold text-wrap">${who.userName} <span class="fa fa-check-circle"></span></span><br>
                            <span class="text-white text-wrap">@${who.handle}</span>
                        </div>
                        <div class="col-3">
                            <button class="btn-primary rounded-pill float-end mt-2 border-0">Follow</button>
                        </div>
                    </div>
                </div>
               </div>
    
    `)
}

export default WhoToFollowListItem;