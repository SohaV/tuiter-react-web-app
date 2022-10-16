import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js";


const PostSummaryList = () => {
    return(`
        <ul class="list-group">
                <li class="list-group-item">
               ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
    `)
}

export default PostSummaryList;