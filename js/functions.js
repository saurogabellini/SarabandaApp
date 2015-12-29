$(function() {        
       VisualizzalogoSquadra();
});
function VisualizzalogoSquadra()
{
       $("#logosquadra").css("visibility","hidden");
       
       if (( localStorage.getItem("foto_squadra") != '') &&   ( localStorage.getItem("foto_squadra") != null))
        {
        $("#logosquadra").attr("src",localStorage.getItem("foto_squadra"));                        
        $("#logosquadra").css("visibility","visible");
        }
        if (( localStorage.getItem("nome_squadra") != '') &&   ( localStorage.getItem("nome_squadra") != null))
        {          
           $("#nomesquadra").html(localStorage.getItem("nome_squadra"));                        
           $("#logosquadra").css("visibility","visible");
        }  
}

    
function elencoserate()
{           
                     
    var uri = 'http://www.chivuolessersarabanda.com/New_Serate.ashx';
    $.ajax({
      cache: false,
      //type: "POST",
      dataType: "text",
      url: uri,
      success: function (data) {            
                  localStorage.setItem("dataserate", data);
            $("#elencoserate").html(data);
          //$("#Mail").html(JData.Mail);
      },
      error: function (jqXHR, textStatus, errorThrown) {                    
        $("#elencoserate").html(localStorage.getItem("dataserate"));        
      }
    });
                              
}

function elencolocali()
{           
                     
    var uri = 'http://www.chivuolessersarabanda.com/New_Locali.ashx';
    $.ajax({
      cache: false,
      //type: "POST",
      dataType: "text",
      url: uri,
      success: function (data) {            
                  localStorage.setItem("dataserate", data);
            $("#elencolocali").html(data);
          //$("#Mail").html(JData.Mail);
      },
      error: function (jqXHR, textStatus, errorThrown) {                    
        $("#elencoserate").html(localStorage.getItem("dataserate"));        
      }
    });
                              
}

$(function(){  
  $('.splash').each(function(){        
    $(this).css('max-height', document.documentElement.clientHeight-56);
    $(this).css('min-height', document.documentElement.clientHeight-56);
  });
  $('.bottom').each(function(){            
        $(this).css('top', document.documentElement.clientHeight-114-56);        
  });        

});

$(function(){
  'use strict';

  $('ul.tabs').tabs(); 
  $('.collapsible').collapsible();
  $('.modal-trigger').leanModal();
  $(function () {
    var count = 0;
    var wordsArray = ["Creative", "Innovative", "Clean", "Beautiful"];
    setInterval(function () {
      count++;
      $("#changeText").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 3000);
  });

  var snapper = new Snap({
    element: document.getElementById('content'),
    hyperextensible: false
  });

  var addEvent = function addEvent(element, eventName, func) {
    if (element) {
      if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
      } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
      }
    }
  };

  addEvent(document.getElementById('open-left'), 'click', function(){
    if( snapper.state().state=="left" ){
      snapper.close('left');
      document.getElementById('blockui').style.display="none";
    } else {
      snapper.open('left');
      document.getElementById('blockui').style.display="block";
    }
  });

  var snapper2 = new Snap({
    element: document.getElementById('content'),
    hyperextensible: false
  });

  $('#open-right').click(function(){
    if( snapper2.state().state=="right" ){
      snapper2.close('right');
      document.getElementById('blockui').style.display="none";
    } else {
      snapper2.open('right');
      document.getElementById('blockui').style.display="block";
    }
  });    

  /* Prevent Safari opening links when viewing as a Mobile App */
  (function (a, b, c) {
    if(c in b && b[c]) {
      var d, e = a.location,
      f = /^(a|html)$/i;
      a.addEventListener("click", function (a) {
        d = a.target;
        while(!f.test(d.nodeName)) d = d.parentNode;
        "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
      }, !1)
    }

  })(document, window.navigator, "standalone");

  var duration_CONSTANT = 250;
  var options = {
    prefetch: true,
    cacheLength: 20,
    onStart: {
      duration: duration_CONSTANT,
      render: function ($container) {
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
        setTimeout(function () {
          if(initSidebar instanceof Function) {
            initSidebar();
          }
        },duration_CONSTANT*2);
      }
    },

    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        $container.removeClass('is-exiting');
        $container.html($newContent);
        try {
            VisualizzalogoSquadra();
        }
        catch(err) {
      
        }
        try {
            elencoserate();
        }
        catch(err) {
      
        }
        try {
            elencolocali();
        }
        catch(err) {
      
        }
      }
    },

    onAfter: function($container, $newContent) {
      // Recall plugin here
      $('ul.tabs').tabs(); 
      $('.collapsible').collapsible();
      var model_div = '<div id="modal1" class="modal bottom-sheet features"> <div class="modal-content"> <div class="row"> <div class="col s3"> <a href="profile.html"> <i class="close-opacity mdi mdi-account"></i> <p>About</p> </a> </div> <div class="col s3"> <a href="portfolio.html"> <i class="mdi mdi-file-image-box"></i> <p>Photos</p> </a> </div> <div class="col s3"> <a href="blog.html"> <i class="mdi mdi-book-multiple-variant"></i> <p>Blog</p> </a> </div> <div class="col s3"> <a href="news.html"> <i class="mdi mdi-rss"></i> <p>News</p> </a> </div> </div> <div class="row"> <div class="col s3"> <a href="timeline.html"> <i class="mdi mdi-timelapse"></i> <p>Timeline</p> </a> </div> <div class="col s3"> <a href="messages.html"> <i class="mdi mdi-bell"></i> <p>Chat</p> </a> </div> <div class="col s3"> <a href="todo.html"> <i class="mdi mdi-checkbox-marked-outline"></i> <p>To Do</p> </a> </div> <div class="col s3"> <a href="login.html"> <i class="mdi mdi-account-plus"></i> <p>Account</p> </a> </div> </div> </div> </div>';
      $('body').prepend(model_div);
      $('.modal-trigger').leanModal();
      $(function() {
          var div = $('.box');
          var width = div.width();
          div.css('height', width);
      });
    }
    
  };
  
  var smoothState = $('#main').smoothState(options).data('smoothState');

});


function get_foto() {        
        var login = "";
        var password = "";

        login = $("#login").val();
        password = $("#login-psw").val();
        var uri = 'http://www.chivuolessersarabanda.com/App_FotoSquadra.ashx?login=' + login + '&password=' + password;

    
        $.ajax({
            cache: false,
            //type: "POST",            
            dataType: "text",
            timeout: 30000,
            //beforeSend: function(x) {
            //    if (x && x.overrideMimeType) {
            //        x.overrideMimeType("application/json;charset=UTF-8");
            //    }
            //},
            url: uri,
            success: function(data) {
                localStorage.setItem("foto_squadra", data); 
                get_pin();                 
                
            },
            error: function(jqXHR, textStatus, errorThrown) {

                alert("Errore collegamento");
            }
        });
    }

    function get_pin() {        
        var login = "";
        var password = "";

        login = $("#login").val();
        password = $("#login-psw").val();
        var uri = 'http://www.chivuolessersarabanda.com/App_PinSquadra.ashx?login=' + login + '&password=' + password;

    
        $.ajax({
            cache: false,
            //type: "POST",            
            dataType: "text",
            timeout: 30000,
            //beforeSend: function(x) {
            //   if (x && x.overrideMimeType) {
            //        x.overrideMimeType("application/json;charset=UTF-8");
            //    }
            //},
            url: uri,
            success: function(data) {
                localStorage.setItem("codicelogged", data);                 
                get_nome();                 
                
            },
            error: function(jqXHR, textStatus, errorThrown) {

                alert("Errore collegamento");
            }
        });
    }

    function get_nome() {        
        var login = "";
        var password = "";

        login = $("#login").val();
        password = $("#login-psw").val();
        var uri = 'http://www.chivuolessersarabanda.com/App_NomeSquadra.ashx?login=' + login + '&password=' + password;

    
        $.ajax({
            cache: false,
            //type: "POST",            
            dataType: "text",
            timeout: 30000,
            //beforeSend: function(x) {
            //    if (x && x.overrideMimeType) {
            //        x.overrideMimeType("application/json;charset=UTF-8");
            //    }
            //},
            url: uri,
            success: function(data) {
                localStorage.setItem("nome_squadra", data);                    
                index_page();
            },
            error: function(jqXHR, textStatus, errorThrown) {

                alert("Errore collegamento");
            }
        });
    }

    function login() {        
        var login = "";
        var password = "";

        login = $("#login").val();
        password = $("#login-psw").val();
        var uri = 'http://www.chivuolessersarabanda.com/App_Login.ashx?login=' + login + '&password=' + password;

    
        $.ajax({
            cache: false,
            //type: "POST",            
            dataType: "text",
            timeout: 30000,
            //beforeSend: function(x) {
            //    if (x && x.overrideMimeType) {
            //        x.overrideMimeType("application/json;charset=UTF-8");
            //    }
            //},
            url: uri,
            success: function(data) {
                if (data != "OK") {
                    alert('PASSWORD ERRATA');
                }
                else {        
                     
                     
               
                     
                     localStorage.setItem("codicelogged",login);                    
                     localStorage.setItem("login",login);                    
                     localStorage.setItem("password",password);   

                    Timer1= setTimeout("get_foto()", 1500);
                    
               } 
            },
            error: function(jqXHR, textStatus, errorThrown) {

                alert("Non puoi usare questa funzione collegato alla wifi Sarabanda" + textStatus);
            }
        });
    }

function index_page()
{
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  
  {
       document.location.href = 'index.html';
  }  else
  {
       document.location.href = 'index.html?App=' + Math.random() * 10;
  }

}
      
