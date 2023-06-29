const commentsCounter = () => {
    console.log('runing commentsCounter');
    let result = 0;
    const comments = document.querySelectorAll('.comments-list li');
    if(!comments){ return 0 }
    result = comments.length;
    console.log(result)
    return result;
}

export default commentsCounter;