window.onload = function () {
	/*
		script for the click event on subsub cat and change of title on click
	*/
	var subsubcatUl = document.getElementsByClassName('subsubcategory-level');

	for( var i=0; i<subsubcatUl.length; i++ ) {
		var subsubcatLi = subsubcatUl[i].getElementsByTagName('li');

		for( var j=0; j<subsubcatLi.length; j++ ) {
			subsubcatLi[j].addEventListener('click', function( e ) {
				document.title = e.target.innerText;
				
				var thisLink = e.target.attributes['data-link'].value;
				var xmlHttpReq = new XMLHttpRequest();

				xmlHttpReq.onreadystatechange = function () {
                                    if (this.readyState === 4 && this.status === 200) {
                                        var container = document.getElementById("content");
                                        container.innerHTML = xmlHttpReq.responseText;
                                    }
				}
				xmlHttpReq.open('GET', thisLink, true);
				xmlHttpReq.send();
			});
		}
	}
}