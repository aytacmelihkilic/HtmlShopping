var a="admin";
var b="aytacmelih@gmail.com";
var c="halilibrahim@gmail.com";
var d="umutgungor@gmail.com";
var e="dokuzeylul@gmail.com";
var f="weptasarimi@gmail.com";
var g="asliergun@gmail.com";
var h="deneme1@gmail.com";
var i="deneme2@gmail.com";
var j="denemeson@gmail.com";

var aa="123";
var bb="160";
var cc="wknhmhxnn7pf";
var dd="xyxyxy";
var ee="123456789";
var ff="987654321";
var gg="12345";
var hh="123456";
var ii="sifre";
var jj="password";

function Login(){
  eposta=(document.f.gir.value);
  sifre=(document.f.onay.value);

 if(eposta==a){ 
  if(sifre==aa){
              document.getElementById("p1").innerHTML = "admin";
              document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
              p1.setAttribute("class","degis")
              p2.setAttribute("class","duzen")
                $(".b-popup").hide(200);
              }
                else alert(" şifre hatalı")}
      

 else if(eposta==b){ 
  if(sifre==bb){
	 document.getElementById("p1").innerHTML = "Aytaç Melih Kılıç";
	 document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
  	p1.setAttribute("class","degis")
	  p2.setAttribute("class","duzen")
    $(".b-popup").hide(200); }
                else alert(" şifre hatalı")}

 else if(eposta==c){
 if(sifre==cc){
	document.getElementById("p1").innerHTML = "Halil ibrahim aydın";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==d){
 if(sifre==dd){
	document.getElementById("p1").innerHTML = "Umut güngörmez";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==e){  
 if(sifre==ee){
	document.getElementById("p1").innerHTML = "Dokuzeylül";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==f){ 
 if(sifre==ff){
	document.getElementById("p1").innerHTML = "wep tasarımı";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==g){  
 if(sifre==gg){
	document.getElementById("p1").innerHTML = "Aslı ergün";
	document.getElementById("p2").innerHTML = "merhaba hocam başka kullanıcılarıda deneyebilirsiniz";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==h){  
 if(sifre==hh){
	document.getElementById("p1").innerHTML = "deneme 1";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==i){  
 if(sifre==ii){
	document.getElementById("p1").innerHTML = "deneme 2";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
                else alert(" şifre hatalı")}

 else if(eposta==j){ 
 if(sifre==jj){
	document.getElementById("p1").innerHTML = "deneme son";
	document.getElementById("p2").innerHTML = "başka kullanıcıyla giriş yap";
	p1.setAttribute("class","degis")
	p2.setAttribute("class","duzen")
	  $(".b-popup").hide(200);
	}
      else alert(" şifre hatalı")}

 else{  alert("e-posta hatalı")}


}




  ////////////////anasayfa ortak lava////////////////////////
  $(".button1").on("click",function(e){
		$('.count').css({"display":"block"});
    	var itemvalue =  $(this).html();
		$('.list').append('<li style=" background-color: rgb(184, 182, 172); color: #fff"   class="item">'+$(this).html()+'</li>');
		
		
		var shoplistlocal = $('.list').html();
		localStorage.setItem('shoplistlocal', shoplistlocal);
		return false;
    });
  ////////////////anasayfa ortak lava////////////////////////



  ////////////////////anasayfa başlangıç//////////////////////
  
$(document).ready(function(){

	var textInput = $('#inputshop').val();
	
	$(".b-popup").hide();
	
	
	if (localStorage.getItem('shoplistlocal')) {
    	$('.list').html(localStorage.getItem('shoplistlocal'));
	}
			
	
    $(".items").on("click",function(e){
		$('.count').css({"display":"block"});
    	var itemvalue =  $(this).html();
		$('.list').append('<li style=" background-color: rgb(184, 182, 172); color: #fff"   class="item">'+$(this).html()+'</li>');
		
		
		var shoplistlocal = $('.list').html();
		localStorage.setItem('shoplistlocal', shoplistlocal);
		return false;
    });
	  			
	$(".list").on("click", ".item", function () {
    	$(this).remove();
		  $('.count').css({"display":"block"});
		  var itemlength = $(".app-body li").length;
		  $('.count').text(itemlength);
		  var shoplistlocal = $('.list').html();
    	localStorage.setItem('shoplistlocal', shoplistlocal);
		return false;
    });
	
	    			 
     $(".closepopup").click(function(){
	 $(".b-popup").hide(200);
    });
	

    $(".openpopup").click(function(){
	
		$(".b-popup").fadeIn(200);}
	
	);
    $("#send").click(function(){
		var itemname = $("#inputname").val();
		var itememail = $("#inputemail").val();
		var itemtel = $("#inputtel").val();
		var shopbox = $(".app-body").html();
		$.ajax({
			url: "sendmessege.php",
			type: "post",
			dataType: "json",
			  data: {
				 "itemname": user_name,
				 "itememail": user_email,
				 "itemtel": user_comment,
				 "shopbox": user_money
			  },
		
	});
		});
		
		$('.closewindow').click(function(){
			$('.app').fadeOut(500);
		});	
	    	$('#tray').click(function(){
			$('.app').fadeIn(500);
		});	
		
		
	$('.items').click(function() {
		var itemlength = $(".app-body li").length;
		$('.count').text(itemlength);	
	});
		
		
	$(".openpopup2").click(function() {
		alert("satın alma işlemi tamamlandı E-Postanı Kabul et");
   		window.localStorage.clear();
		$('.list').children().remove();
		$('.count').hide();
    	return false;
		
	});		
});
yonlendir();{
	let link="index.html";
                      window.location.href=link;
};




$(".login").click(function(){
  if ($('.item').is('li')) {
  $(".b-popup").fadeIn(200);}
else {
  $(".tooltipshop2").animate({marginLeft: "20px",easing: "easeout",opacity:"1"},300);
  $(".tooltipshop2").delay(900).animate({opacity:"0",marginLeft: "-90px"});
}
});


