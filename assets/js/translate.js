jQuery.noConflict();
jQuery(document).ready(
    function ($) {
        var $ = jQuery.noConflict();

$(document).ready(function(){
  

    $(document).click( function(e) {
         $('.translate_wrapper, .more_lang').removeClass('active');
    });
  
    $('.translate_wrapper .current_lang').click(function(e){
      e.stopPropagation();
      $(this).parent().toggleClass('active');
  
      setTimeout(function(){
        $('.more_lang').toggleClass('active');
      }, 5);
    });
    var lang = "en";
      $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
        
      });
    document.title=titleLang[lang];
    $("[data-placeholder]").each(function() {
      var placeholder = $(this).attr("data-placeholder");
      $(this).attr("placeholder", arrLang[lang][placeholder]);
    });
    /*TRANSLATE*/
  
  
    $('.more_lang .lang').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.more_lang').removeClass('active');
  
      var img = $(this).find('img').attr('src');
      var lang = $(this).attr('data-value');
    
      
  
      $('.current_lang .lang-txt').text(lang);
      $('.current_lang img').attr('src', img);
  
   
      $(".translate").click(function() {
        var lang = $(this).attr("id");
        if(lang )
        $(".lang").each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr("key")]);
        });
        document.title=titleLang[lang];
        $("[data-placeholder]").each(function() {
          var placeholder = $(this).attr("data-placeholder");
          $(this).attr("placeholder", arrLang[lang][placeholder]);
        });
      });
    });
  });
  
  
    var titleLang ={
      "en":"System Security 114 - Home",
      "cn":"忘记密码 114 - 首頁",
      "vn":"Hệ thống an toàn 114 - Trang chủ"
    }
    var arrLang ={
      en:{
        "inf": "Information",
        "sys":"System Security 114",
        "help": "\u2003Help",
        "ecus":"\u2003Ecusweb",
        "contact":"\u2003Contact",
        "email":"Email",
        "submit":"Submit",
        "string1":"Username : Card ID & Password : Last 6 digits of Identity Card"
      },
      cn:{
        "inf":"首頁",
        "sys":"忘记密码 114",
        "help":"\u2003用戶名",
        "ecus":"\u2003Ecusweb",
        "contact":"\u2003身份",
        "email":"電子郵件",
        "submit":"確認",
        "string1":"用户为工號初始密碼為身份證號碼后六位"
      },
      vn:{
        "inf":"Thông tin",
        "sys":"Hệ thống an toàn 114",
        "help":"\u2003Trợ giúp",
        "ecus":"\u2003Ecusweb",
        "contact":"\u2003Liên hệ",
        "email":"Email",
        "submit":"Xác nhận",
        "string1":"Tên đăng nhập là mã thẻ, mật khẩu mặc định là sáu số cuối CMND"
      }
    }
  
  var tran=[
    {
      "en":"Username",
      "cn":"阮公",
      "user":"Tên đăng nhập"
    }
  ]
});