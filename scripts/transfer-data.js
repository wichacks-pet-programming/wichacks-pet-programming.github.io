 function setPet(){
	var cat = getElementById("cat");
	if (cat.className && cat.className == "active")
	{
		localStorage.setItem("pet","cat")
	}
	var dinosaur = getElementById("dinosaur");
	if (dinosaur.className && dinosaur.className == "active")
	{
		localStorage.setItem("pet","dinosaur");
	}
	var dog = getElementById("dog");
	if (dog.className && dog.className == "active")
	{
		localStorage.setItem("pet","dinosaur");
	}
}

function run(){
	var imgs = getElementByTag("img");
	var i = imgs.length;
	while ( i-- )
	{
		imgs[i].setAttribute("id",localStorage.getItem("pet"));
	}
}