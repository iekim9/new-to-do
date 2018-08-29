function newToDo()
{
    var task = document.getElementById("input").value;
    var todo = document.getElementById("list");
    var item = document.createElement("li");

    item.appendChild(document.createTextNode(task));
    todo.appendChild(item);
    document.getElementById("input").value = "";
    //li.onclick = deleteItem;
    document.getElementById("li").addEventListener("click", deleteItem(item));
}

document.body.onkeyup = function(el)
{
    if ( el.keyCode == 13 )
    {
        newToDo();
    }
};

function deleteItem(el)
{
    el.target.parentElement.removeChild(el.target);
}