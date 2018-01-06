$(function(){
  
     $("body").on("keyup",".rakam", function(){
       
       var text = $("#text").val();

       $("li").css("background-color","white");
       $("li").each(function(){
         var thisl = $(this).html()

         if (thisl==text){
          $("li").hide()
         	$(this).show()
         }

       });

     });




      $("body").on("click",".player_row,.player_row_active",function(){
     var this_attr = $(this).attr("muzik");
     $(".player_row_active").attr("class","player_row");

     $(this).attr("class","player_row_active");

     $("#my_player").attr("src","audios/"+this_attr);
     $("#my_player")[0].play();
  
     });


     $("body").on("click",".player_row",function(){
       var udalit = confirm("Удалить????");
       if(udalit){
       	$(this).fadeOut(600)
       }

     }); 






    $("body").on("click","#btn",function(){
       
       var random = Math.random()*4;
       var random = Math.floor(random)
       $(".box").css("background-color","green")
       $("#box_"+random).css("background-color","black")
});
$("body").on("click","#btn",function(){
    var words = ["Manchester City","Manchester United","Barcelona","Real Madrid da josh Rid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","Atletico Madrid","BVB	"]
       $("#word")
     var hisob = {
     	random:random
     }
            
      function random(rakam){
      	rakam = Math.random()*12;
      	rakam = Math.floor(rakam);
      	$("#word").html(words[rakam])
      }
      hisob.random(4)
      });    
  });

