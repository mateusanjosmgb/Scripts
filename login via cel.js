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
	};
	
	function setCookie(c_name,value,expiresecs) {
	     var exdate = new Date();
	     exdate.setTime(exdate.getTime()+ ((expiresecs) ? expiresecs*1000: 0));
	     document.cookie = c_name+ "=" +escape(value)+
	        ((expiresecs==null) ? "" : ";expires="+exdate.toGMTString());
	    }; 
		
		

$(function(){
        name = _userdata["username"];
		cook = getCookie(name);
	    if(_userdata["session_logged_in"] == 1 && cook == null) {
	       var id = _userdata["user_id"];
	        $.get("/u" + id, function(tel) {
		       var tel = $('#field_id2 dd .field_uneditable', tel).text();
		      setCookie(_userdata["username"], tel);
		      alert("MENGOOOOOO");
	        });
        } 
  else { 
            if(window.location.pathname === "/login"){ 
             $('label[for="username"]').text('Nome de usuário ou telefone:');
             $('input[name="login"]').one('click', function(e){
				e.preventDefault();
	          var username = $('#username').val();
	          if(cook == username) {
		       $('#username').val(cook);
	           $('input[name="login"]').click();
	          }
	
            });
            };
			alert();
        }

});