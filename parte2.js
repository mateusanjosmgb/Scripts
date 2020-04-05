$(window).load(function() {
if(_userdata["user_level"] == 1){
      var chatbox_script = function() {
      			
      $('#submit_button').click(function(){
       var atual = $('#message').val();
       if(atual.substring(0,7) == "/unmute"){
        alert("Chat normal");
        localStorage.clear();
       };

      });
		
     };

  var s=document.createElement('script');
  s.text="("+chatbox_script.toString()+")();";
  $('object[data^="/chatbox/index.forum"],iframe[src^="/chatbox/index.forum"]').each(function(){
	  try{
		  $(this.contentDocument||this.contentWindow.document).find("#chatbox").closest("html").find("head").first().each(function(){
			  this.appendChild(s.cloneNode(true))
			  })}catch(a){
				  
			  }});

}
});