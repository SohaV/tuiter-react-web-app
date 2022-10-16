const NavigationSidebar = (active) => {
        return(`
    
   <div>
            <div class="list-group">
                    <div class="fab fa-twitter fa-1x text-white list-group-item list-group-item-action"></div>
                <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
                    <div class="fa fa-home text-white"></div>
                    <span>Home</span>
                </a>
                <a href="../ExploreScreen/index.html"
                   class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
                    <div class="fa fa-hashtag"></div>
                    <span>Explore</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}">
                    <div class="fa fa-bell text-white"></div>
                    <span>Notifications</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}">
                    <div class="fa fa-envelope text-white"></div>
                    <span>Messages</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}">
                    <div class="fa fa-bookmark text-white"></div>
                    <span>Bookmarks</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}">
                    <div class="fa fa-list text-white"></div>
                    <span>Lists</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}">
                    <div class="fa fa-user text-white"></div>
                    <span>Profile</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}">
                    <div class="fa-stack" style="font-size: 8px;">
                        <div class="fas fa-circle fa-stack-2x"></div>
                        <div class="fa fa-ellipsis-h fa-stack-1x text-white"></div>
                    </div>
                    <span>More</span>
                </a>
            </div>
            <button class="btn btn-primary w-100 mt-1 rounded-pill col-lg-5">
                Tuit
            </button>

            <br/><br/><br/><br/><br/>

        </div>
 `);
}
export default NavigationSidebar;


