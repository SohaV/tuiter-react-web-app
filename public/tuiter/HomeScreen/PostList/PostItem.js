const PostItem = (post) => {
    return (`
    <div class="border-bottom border-secondary">
        <span class="float-end text-secondary h5">&#8230;</span>
        <div class="mt-3">

        <img class="rounded-circle float-start me-3" src="${post.userImage}" style="width: 10%; height: 10%;"> 
        <div>
            <div>
                <h2 class="h6">${post.postName} 
                <span class="fa fa-check-circle">
                <span class="text-secondary float-right">@${post.handle} <span class="text-secondary">&#x2022;</span> ${post.time}</span>
                </span></h2>
            </div>
            <div class="text-white mb-3">
                ${post.description}
            </div>

            <div class="border border-secondary rounded ms-5">
                <img class="border-bottom border-secondary w-100 h-25" src="${post.postImage}">
                <div class="ms-2 mt-2 ${post.postHeading === '' ? 'd-none' : ''} ${post.postSubHeading === '' ? 'd-none' : ''}">
                    <h2 class="h5">${post.postHeading}</h2>
                    <p class="text-secondary h6">${post.postSubHeading}<br>
                        <span class="${post.link === '' ? 'd-none' : ''}">&#128279;</span>${post.link}
                    </p>
                </div>
            </div>

            <div class="mt-3 mb-3 ms-5">
                <i class="fa fa-comment text-secondary"></i><span class="text-secondary me-5"> ${post.tweets}</span>
                <i class="fa fa-retweet text-secondary ms-5"></i><span class="text-secondary text-decoration-none me-5"> ${post.retweets}</span>
                <i class="fa fa-heart text-secondary ms-5"></i><span class="text-secondary text-decoration-none me-5"> ${post.likes}</span>
                <i class="fa fa-upload text-secondary ms-5"></i>
            </div>
        </div>
    </div>
    </div>
    `)
}

export default PostItem;