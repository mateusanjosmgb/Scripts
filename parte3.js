$(window).load(function() {
if(_userdata["user_level"] !== 1){
      var chatbox_script = function() {
      			var html = $('#chatbox_footer').html();
				var t2  = localStorage.getItem("mute");
				if(t2 !== null){
				setInterval(function(){
				$('#chatbox_footer').html('<center><h1>CHAT DESATIVADO</h1></center>');
				}, 1000);
       };
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