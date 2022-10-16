import PostSummaryList from "../PostSummaryList/index.js";
import posts from "../PostSummaryList/posts.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-10 col-sm-3 col-md-6 col-lg-8 col-xl-10 col-xxl-10">
                            <div class="position-relative mb-2">
                                <span class="fa fa-search position-absolute m-2 m-sm-2 m-lg-3 m-xl-3 m-xxl-3"></span>
                                <input class="ps-5 form-control rounded-pill " placeholder="Search Tuiter"/>
                            </div>
                        </div>
                <div class="col-2 mb-2">
                    <span class="fa fa-cog fa-2x text-primary mt-1"  style="font-size: 25px;"></span>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/Space.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-black fw-bold h2">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
