$(function(){
      
   $(document).scroll(function(){

    var toTop = $("body").scrollTop();

    if (toTop>60){
      $(".toTop").fadeIn(300)
    }else{
      $(".toTop").fadeOut(300)
    }

  });

    $("body").on("click",".toTop",function(){
      $("html, body").animate({scrollTop:0},500)
    });
     
        var profile_name = $(".profile_name").html();

            if (profile_name==""){
                $(".register").fadeIn(600)
            }
      

      

      $("body").on("click",".register_btn",function(){
            var login_name = $(".login_name").val();

            if (login_name==""){
                $(".login_name").css("border","2px solid red")
            }else{
                $(".profile_name").html(login_name)
                $(".register").fadeOut(600)
            }
      });

    $("body").on("click",".sendmes",function(){
            var textarea = $("textarea").val();
            var textwrapper = $(".wrapper").html();
            var profile_name = $(".profile_name").html();
            var login_name = $(".login_name").val();
            $(".wrapper").html(textwrapper+"<h5>"+profile_name+"</h5>"+"<li>"+textarea+"</li>");
          if (login_name==profile_name){
            $("li").css("float","right");
            $("h5").css("float","right");
          }
    });

});



/*$("class").prop("disabled","disabled")




*/