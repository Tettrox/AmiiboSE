function searchByName()
{
	let query = document.getElementById("Search").value;
	let FilterArray = document.getElementsByClassName("AmiiboDisplay");
	
	for (var i = 0; i < FilterArray.length; i++)
	{
		if (!FilterArray[i].title.includes(query))
		{
			FilterArray[i].style.display = "none";
		} else {
			FilterArray[i].style.display = "block";
		}
		
		if (query == " ")
		{
			FilterArray[i].style.display = "block";
		}
	}
}