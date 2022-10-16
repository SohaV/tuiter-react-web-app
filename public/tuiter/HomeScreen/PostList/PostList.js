import PostItem from "../PostList/PostItem.js";
import posts from "../PostList/posts.js";


const PostList = () => {
    return(`
        <ul class="list-group">
                <li class="list-group-item">
               ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
    `)
}

export default PostList;