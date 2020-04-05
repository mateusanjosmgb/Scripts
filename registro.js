$(function(){	
$('head').prepend('  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>');
var t = $('span[style="color:red"]:contains("As senhas digitadas não coincidem.")').size();



if(window.location.pathname =="/register" && window.location.search == "?agreed=true&step=2") {
  $('form#ucp fieldset').first().find('dl:last-of-type').after('<dl><dt><label>Confirmar senha: *</label></dt><dd><input class="left ltr" type="password" id="cm_reg" name="passwod" value="" size="25" maxlength="25" required></input></dd></dl>'); 
	
  $('head').after('<style>.panel .inner {padding: 50px !important;background: white;margin-top: 20px}#username_reg, #email, #password_reg, #sobrenome_reg, #cm_reg {background: black !important;border: none !important;height: 30px;}.inner p {margin-top: -35px !important;position: relative}.submit-buttons {position: relative;top: -25px !important}#cm_reg {width: 467px;}    input {color: white !important}</style>');
  $('input[value="Reiniciar"]').attr('value', 'Cancelar').addClass('rregister');
  $('input[value="Salvar"]').attr('value', 'Registrar').addClass('bregister');
  $('.panel .inner').prepend('<h1 class="viso">Preencha os dados</h1>');
  $('form#ucp fieldset dl').first().after('<dl><dt><label>Sobrenome : *</label></dt><dd><input class="inputbox post" type="text" id="sobrenome_reg" name="sobrename" value="" size="25" maxlength="25" required></dd></dl>'); 
  $('#form_register table.forumline tbody tr:eq(2)').after('<tr><td class="row1" width="38%"><span class="gen">Sobrenome *:</span></td><td class="row2"><input class="inputbox post" type="text" id="sobrenome_reg" name="sobrename" value="" size="25" maxlength="25" required></td></tr>');
  $('.ipbform .formcolumn1:last-of-type').after('<fieldset class="formcolumn1"><legend>Sobrenome: *</legend><div class="input-warn-content"></div><div class="form-box"><input type="text" value="" id="sobrenome_reg" name="sobrenome" required></div></fieldset>');
  $('input[value="Registrar"]').click(function(e){
    var valt = $("#sobrenome_reg").val(); 
      if(valt.length >= 4) {
         var valat = $('input[name="username"]').val();
         var valatt = $('#sobrenome_reg').val();
         $('input[name="username"]').val(' '+valat+'  '+valatt+' ');
     
     } 
	 else { 
        e.preventDefault();
        alert("Digite mais de 4 caracteres no sobrenome!");
  
     }

    }); 
	
 $('input[value="Registrar"]').click(function(e){
   var senh = $('#password_reg').val();
   var passwr = $("#cm_reg").val();
   if(passwr.length >= 7 && senh == passwr){ 
     window.localStorage.setItem('senhaconfirm', senh);
      console.log("Criando conta...");

    } 
	else if(passwr.length <= 6) {
		e.preventDefault();
       alert("Digite mais de 7 caracteres na senha!");
    } 
   else if($('#password_reg') != passwr) {
	   e.preventDefault(); alert("As senhas não coincidem!");
	}
 }); 
 
 setInterval(function(){
  var n = $("input[name='password_confirm']").size();
   if(n >= 1){
    $('head').prepend('<style type="text/css">body {visibility: hidden !important}</style>');
    var user = window.localStorage.getItem('senhaconfirm'); 
    $("input[type='password']").val(user);


  setTimeout(function(){
   window.location=window.location.origin;
  }, 10000);

  };

 }, 2000);

 var g = $("input[name='password_confirm']").size();
   if(g >= 1){

setTimeout(function(){
   $("input[value='Registrar']").click();
$('body').before('<center><h1 style="color: white">Criando a conta...</h1><img src="http://replygif.net/i/147.gif"></img></center>').hide();

  }, 2000);

};
	
	


}

});