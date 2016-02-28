var xyStore =
    {
        GetX: function () {
            return JSON.parse(localStorage.getItem("x"));                
        },
        GetY: function () {
            return JSON.parse(localStorage.getItem("y"));                
        },
        SetX: function (x) {
            localStorage.setItem("x", JSON.stringify(x));
        },
        SetY: function (y) {
            localStorage.setItem("y", JSON.stringify(y));
        },
   };
   
function setPet()
{
	var cat = getElementById("cat");
	if (cat.className && cat.className == "active")
	{
		SetX("cat");
	}
	var dinosaur = getElementById("dinosaur");
	if (dinosaur.className && dinosaur.className == "active")
	{
		SetX("dinosaur");
	}
	var dog = getElementById("dog");
	if (dog.className && dog.className == "active")
	{
		SetX("dog");
	}
}

function run(){
	var imgs = getElementByTag("img");
	var i = imgs.length;
	while ( i-- )
	{
		imgs[i].setAttribute("id",GetX());
	}
}