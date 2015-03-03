/*Lucia Madero 
Feb  2015*/

//GLOBALS
var banner = document.getElementById("banner");

function init(){
	var container = document.getElementById("container");	
	var library = document.getElementById("library");	
	var tango = document.getElementById("tango");	
	library.innerHTML='';
	tango.innerHTML='';
	container.innerHTML='';
}
function open_contact(){	
	init();
	container.innerHTML = '<br/> FOR ALL INQUIRIES<br/><br/><br/>';
	container.innerHTML += 'lu_bm@hotmail.com<br/><hr/>';		
}
function open_tango(){
	init();
	//tango.innerHTML = Tango("images/tango1_2015.jpg", "Tango1_2015", "600px", "500px");
	tango.innerHTML = "TEST2"+'<hr/>';
}
function open_library(){
	init();
	library.innerHTML = "TEST3"+'<hr/>';
	//library.innerHTML = Library("images/library1_2015.jpg", "library1_2015", "600px", "500px");
}

function Tango(href,alt,width,height){
			var tango_innerHTML = '<img src="'+ href + '"';
				tango_innerHTML += ' alt="'+ alt + '"';
				tango_innerHTML += ' width="'+ width+ '"';
				tango_innerHTML += ' height="'+ height+ '"';
			    tango_innerHTML += '/><br/> ';
			return tango_innerHTML;
					};
	
function Library(href,alt,width,height){
			var	library_innerHTML = '<img src="'+ href+ '"';
				library_innerHTML += ' alt="'+ alt+ '"';
				library_innerHTML += ' width="'+ width+ '"';
				library_innerHTML += ' height="'+ height+ '"';
			    library_innerHTML += '/><br/> ';
			return library_innerHTML;
					};
