/* changeImage:
 *     id is the id of the image being passed
 *     disabled is the URL string for the image when not active
 *     enabled is the URL string for the image upon click
 */
function changeImage(divid, id)
{
    var image = document.getElementById(id);
    var imgs = document.getElementById(divid).getElementsByTagName('img');
	var i = imgs.length;
	
	if ( image.className.match("inactive") )
	{
		while (i--)
		{
			if (imgs[i].className && imgs[i].className == 'active')
			{
				imgs[i].className = "inactive";
			}
		}
		image.className = "active";
	}
	else
	{
		image.className = "inactive";
	}
}

/* getPetNum:
 *     idpn is the id of the input for pet number
 *     iddn is the id of the input for difficulty number
 */
function getNums(idpn/*,iddn*/)
{
	var petNum = document.getElementById(idpn);
    /*var diffNum = document.getElementById(iddn);*/
	var selected = document.getElementsByClassName('active');
	var i = selected.length;
	while ( i-- )
	{
		if (imgs[i].src.match(document.getElementById("cat")))
		{
			petNum.value = 1;
		}
		else if (imgs[i].src.match(document.getElementById("dog")))
		{
			petNum.value = 2;
		}
		else if (imgs[i].src.match(document.getElementById("dinosaur")))
		{
			petNum.value = 3;
		}
/*		else if (imgs[i].src.match(document.getElementById("one")))
		{
			diffNum.value = 1;
		}
		else if (imgs[i].src.match(document.getElementById("two")))
		{
			diffNum.value = 2;
		}
		else if (imgs[i].src.match(document.getElementById("three")))
		{
			diffNum.value = 3;
		}*/
	}
}