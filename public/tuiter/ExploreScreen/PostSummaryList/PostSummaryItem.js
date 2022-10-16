const PostSummaryItem = (post) => {
    return(`
    <div class="row border-bottom border-secondary mt-2">
                        <div class="col-8">
                            <div class="text-secondary text-wrap">
                                ${post.topic}
                            </div>
                            <div class="fw-bolder text-wrap">
                                ${post.userName} <span class="fa fa-check-circle"></span>
                                <span class="text-secondary text-wrap">- ${post.time}</span>
                            </div>
                            <div class="fw-bold text-wrap">
                                ${post.title}
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end rounded mt-3 mb-3" src="${post.image}" height="100px">
                        </div>
                    </div>
    `)
}

export default PostSummaryItem;