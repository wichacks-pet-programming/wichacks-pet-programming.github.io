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