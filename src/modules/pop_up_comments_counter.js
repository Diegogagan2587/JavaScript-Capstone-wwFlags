const commentsCounter = () => {
    console.log('runing commentsCounter');
    let result = 0;
    const comments = document.querySelectorAll('.comments-list li');
    result = comments.length;
    console.log(result)
    return result;
}

export default commentsCounter;