$(function(){

						//Filter//
			$("body").on("keyup",".search_desk",function(){
				var search_desk = $(".search_desk").val();
				var videofiles = $("#videofiles").html();

				$(".videos").each(function(){

					if(search_desk==videofiles){
						$("#videofiles").hide()
						$(this).show()
					}else if(search_desk==""){
						$(".videos").show()
					}

				});

			});




					//CATEGORIES fn//
	$("body").on("click","#all_films",function(){
			$(".videos").show()
			$(".fut-man_video").hide()
			$(".univer_video").hide()
			$(".films").hide()
			$(".clips").hide()	
	})

	$("body").on("click","#fut-man_page",function(){
			$(".videos").hide()
			$(".fut-man_video").show()
			$(".univer_video").hide()
			$(".films").hide()
			$(".clips").hide()

	})
	$("body").on("click","#univer_page",function(){
			$(".videos").hide()
			$(".fut-man_video").hide()
			$(".films").hide()
			$(".clips").hide()
			$(".univer_video").show()
	})
	$("body").on("click","#films",function(){
			$(".films").show()
			$(".videos").hide()
			$(".fut-man_video").hide()
			$(".clips").hide()
			$(".univer_video").hide()
	})

	$("body").on("click","#clips",function(){
			$(".films").hide()
			$(".videos").hide()
			$(".fut-man_video").hide()
			$(".clips").show()
			$(".univer_video").hide()
	})

						//SLIDER_SUBMENU fn//

		$("body").on("mouseover",".slider",function(){
			$(".slider_submenu").show()
		})
		$("body").on("mouseleave",".slider",function(){
			$(".slider_submenu").hide()
		})						

							//ScrollTop fn//
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


								//Search & login fns//

		$("body").on("mouseover",".search_icon",function(){
			$(".search_desk").show(600)
		});

		$("body").on("mouseleave",".search_desk",function(){
			$(".search_desk").hide(600)
		});

		$("body").on("click",".login_cancel",function(){
			$(".login_content").hide(600)
		});

		login_func = false;

		$("body").on("click",".login_button",function(){
			var email = $(".email_address").val()
			var profile_name = $(".profile_name").val()
			var password = $(".password").val()
			var password_again = $(".password_again").val()

			if(email==""){
				$(".email_address").css("outline","1px solid blue")
				
			}else if(profile_name==""){
				$(".profile_name").css("outline","1px solid blue")
			}else if(password!=password_again){
				alert("Пароли не совподают")
				$(".password").css("outline","1px solid blue")
				$(".password_again").css("outline","1px solid blue")
			}else if(password=="" || password_again==""){
				$(".password").css("outline","1px solid blue")
				$(".password_again").css("outline","1px solid blue")
			}else{
				$(".email_address").css("outline","1px solid orange")
				$(".profile_name").css("outline","1px solid orange")
				$(".password").css("outline","1px solid orange")
				$(".password_again").css("outline","1px solid orange")

				$(".profile").html("Hello, "+profile_name)
			$(".login_content").fadeOut(1);
			$(".login_icon").html("Exit")
			login_func = true;
			}
		});
		$("body").on("click",".login_icon",function(){
			if(login_func==false){
			$(".login_content").fadeIn(600)
			  }
			  if(login_func==true){
			  	$(".login_exit_quest").fadeIn(100)
			  }
		});

		$("body").on("click",".login_exit_quest_no",function(){
			$(".login_exit_quest").fadeOut(100);
		});
		$("body").on("click",".login_exit_quest_yes",function(){
			$(".login_exit_quest").fadeOut(100);
			$(".profile").html("")
			$(".email_address").val("")
			$(".profile_name").val("")
			$(".password").val("")
			$(".password_again").val("")
			$(".login_icon").html("Login")
			login_func=false;
		});

						//Slide Shows fn//

		var slide_show = 0;
		slide_changer()

		function slide_changer(){
			slide_show++;
			if(slide_show==1){
           	$(".slide_photo1").fadeIn(750);
           	$(".slide_photo2").fadeOut(750);
           	$(".slide_photo3").fadeOut(750);
           	$(".slide_photo4").fadeOut(750);
           	$(".slide_photo5").fadeOut(750);
           }else if(slide_show==2){
           	$(".slide_photo1").fadeOut(750);
            $(".slide_photo2").fadeIn(750);
            $(".slide_photo3").fadeOut(750);
            $(".slide_photo4").fadeOut(750);
            $(".slide_photo5").fadeOut(750);
           }else if(slide_show==3){
           	$(".slide_photo1").fadeOut(750);
            $(".slide_photo2").fadeOut(750);
            $(".slide_photo3").fadeIn(750);
            $(".slide_photo4").fadeOut(750);
            $(".slide_photo5").fadeOut(750);
           }else if(slide_show==4){
           	$(".slide_photo1").fadeOut(750);
            $(".slide_photo2").fadeOut(750);
            $(".slide_photo3").fadeOut(750);
            $(".slide_photo4").fadeIn(750);
            $(".slide_photo5").fadeOut(750);
           }else if(slide_show==5){
           	$(".slide_photo1").fadeOut(750);
            $(".slide_photo2").fadeOut(750);
            $(".slide_photo3").fadeOut(750);
            $(".slide_photo4").fadeOut(750);
            $(".slide_photo5").fadeIn(750);
            slide_show=0
           }


			setTimeout(slide_changer,4500)
		};


			

});