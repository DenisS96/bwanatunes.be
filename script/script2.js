var post = document.getElementById("post");
post.addEventListener("click", function () {
    var nameBoxValue = document.getElementById("name-box").value;

    var li = document.createElement("p");
    var text = document.createTextNode(nameBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);

});

var post = document.getElementById("post");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;

    var li = document.createElement("p");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);

});