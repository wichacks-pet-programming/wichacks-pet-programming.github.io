var pet = location.search.substr(location.search.indexOf("=")+1);

/* changeImage:
 *     id is the id of the image to change
 *	   class is the class to which to set the image
 */
function changeImage(id,class)
{
    var image = document.getElementById(id);
	image.className = class;
}