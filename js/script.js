$(document).ready(function(){

	$(window).scroll(function(){

		var scrol = $(window).scrollTop();

		if(scrol > 800){

			$(".scroling").fadeIn()

		}else{

			$(".scroling").fadeOut()

		}
		if(scrol >= 500){
			
			$(".fix").slideDown()
			
		}else{
			
			$(".fix").slideUp()
		}
	});
//###############################################

	$('.scroling').on('click', function(){

		$('body , html').animate({

			scrollTop : 0

		},800)
	});

//################################################

    $(".nav1 .option1 ul li a").on('click' , function(){

		$(this).addClass('active');

		$(".nav1 .option1 ul li a ").not($(this).addClass('active')).removeClass('active')

	});
	$(".option2 ul li a").on('click' , function(){

		$(this).addClass('active');

		$(".option2 ul li a").not($(this).addClass('active')).removeClass('active')

	});
	
//#################################################
	$('.nav1 .option1 .opt1 .fa-align-right').on('click' , function(){

		$('.option2').animate({

			left: 0

		});
		$('.nav1 .option1 .opt1 .fa-align-right').hide();

        $('.nav1 .option1 .opt1 .fa-times').fadeIn()

	});
	$('.nav1 .option1 .opt1 .fa-times').on('click' , function(){
		
		$('.option2').animate({

			left: '-100%'
		});

		$('.nav1 .option1 .opt1 .fa-times').hide();

        $('.nav1 .option1 .opt1 .fa-align-right').fadeIn()
	});

//################################################
    $('.body3 .dat2').on('click' , function(){

		$(this).addClass('activ').siblings().removeClass('activ')

	});

//####################################################33

    $('.match6,.match7,.match8,.match9,.match10').css('display','none')

	$('.num5').on('click' , function(){

        $('.match5').fadeIn(500).siblings().fadeOut(300)

	});

    $('.num6').on('click' , function(){

        $('.match6').fadeIn(500).siblings().fadeOut(300)

	});

	$('.num7').on('click' , function(){

        $('.match7').fadeIn(500).siblings().fadeOut(300)

	});

	$('.num8').on('click' , function(){

        $('.match8').fadeIn(500).siblings().fadeOut(300)

	});

	$('.num9').on('click' , function(){

        $('.match9').fadeIn(500).siblings().fadeOut(300)

	});

	$('.num10').on('click' , function(){

        $('.match10').fadeIn(500).siblings().fadeOut(300)

	})
//#######################################################################

	$('.egypt1').on('click' , function(){

		$('.egypt').fadeIn(500).siblings().fadeOut(300)

	});

	$('.Spain1').on('click' , function(){

		$('.Spain').fadeIn(500).siblings().fadeOut(300)

	});

	$('.England1').on('click' , function(){

		$('.England').fadeIn(500).siblings().fadeOut(300)

	});

	$('.Italy1').on('click' , function(){

		$('.Italy').fadeIn(500).siblings().fadeOut(300)

	});

	$('.France1').on('click' , function(){

		$('.France').fadeIn(500).siblings().fadeOut(300)

	});

	$('.German1').on('click' , function(){

		$('.German').fadeIn(500).siblings().fadeOut(300)

	});
	
})