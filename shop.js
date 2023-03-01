var input = document.getElementById("userinput");
var button = document.getElementsByTagName("button")[0];
var ul = document.querySelector("ul");

 function addList(){
	if(input.value.length > 0) {
	
     	var list = document.createElement("li");
     	list.appendChild(document.createTextNode(input.value));
 	    ul.appendChild(list);
 	    input.value ="";
		list.addEventListener("click", function() {

		   var remove = document.createElement("button");
	       remove.appendChild(document.createTextNode("remove"));
	       list.appendChild(remove);
	       remove.addEventListener("click", removeList);
	    })
	 }
 }

	
 	
function deleteList(){
	var remove = document.createElement("button");
	remove.appendChild(document.createTextNode("remove"));
	li.appendChild(remove);
	remove.addEventListener("click", removeList);

}

function removeList(){
	var list= document.getElementsByTagName("li")
	var parent = this.parentNode;
    parent.remove(list);
}

 button.addEventListener("click", addList);
