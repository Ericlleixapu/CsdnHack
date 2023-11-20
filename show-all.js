window.addEventListener('load', function () {
    var pages = document.getElementsByClassName('article_content');
    for (i = 0; i < pages.length; i++) {
        pagecontent = pages[i].parentNode.childNodes;
        for (j = 0; j < pagecontent.length; j++) {
            if (pagecontent[j].className != "article_content") {
                pagecontent[j].parentNode.removeChild(pagecontent[j]);
            }
        }
        pages[i].classList.add("nofilter");
    }
    var hideBox = document.getElementsByClassName('hide-article-box')
    if (hideBox != null) {
        hideBox[0].remove();
    }
});