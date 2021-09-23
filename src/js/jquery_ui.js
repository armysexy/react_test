/******************************
javascript language (jquery)
ui action jquery purblishing
Created by. webpublisher D.W,KIM 
*******************************/

$(document).ready(function(){
	//페이지에 따른 클래스 추가 LNB
	var url = window.location.pathname,
	urlRegExp = new RegExp(url.replace(/\/$/, '') + '$');
	$('.snb2 .snb_wrap ul li > a').each(function(){
		if(urlRegExp.test(this.href.replace(/\/$/, ''))){
			$(this).addClass('selected');
		}
	});
	//액션에 따른 뒷배경 스크롤 삭제 (레이어팝업 이나 뒷배경 마스킹 처리시 사용)
	var currentscroller = "";
	function bodyFix(){
		currentscroller = $(window).scrollTop();
		$('.wrap').css({'position' : 'fixed', 'top' : -currentscroller});
		$('.wrap').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		});
	}
	//액션에 따른 뒷배경 스크롤 재설정
	function bodyFixRelease(){
		$('.wrap').css({'position' : '', 'top' : 0});
		$(window).scrollTop(currentscroller);
		$('.wrap').off('scroll touchmove mousewheel');
	}

	//radio,checkbox,selectbox 관련 스크립트
	function inpSect(){
		$('input[type="radio"]').each(function(){
			$(this).css('display','none');
			$(this).wrap('<span class="radio"/>');
			$('input[type="radio"]:checked').parent().addClass('on');
			$('.radio').off('click').on('click', function(){
				if($(this).hasClass('on')){
					// $(this).removeClass('on').find('input[type="radio"]').removeAttr('checked');
				}else{
					$(this).siblings().removeClass('on').find('input[type="radio"]').removeAttr('checked');
					$(this).addClass('on');
					$(this).find('input').attr('checked','true');
				}
			});
			$('label[for=' + $(this).attr('id') + ']').html();
		});

		$('input[type="checkbox"]').each(function(){
			$(this).css('display','none');
			$(this).wrap('<span class="checkbox"/>');
			$('input[type="checkbox"]:checked').parent().addClass('on');
			$('.checkbox').off('click').on('click', function(){
				if($(this).hasClass('on')){
					$(this).removeClass('on').find('input[type="checkbox"]').removeAttr('checked');
				}else{
					$(this).addClass('on');
					$(this).find('input').attr('checked','true');
				}
			});
			$('label[for=' + $(this).attr('id') + ']').html();
		});

		var selectTarget = $('.selectBox select');
		selectTarget.on('blur', function(){
			$(this).parent().removeClass('focus');
		});
		selectTarget.change(function(){
			var select_name = $(this).children('option:selected').text();
			$(this).siblings('label').text(select_name);
		});

	}
	inpSect();

	//layer popup 열기
	$('.open_layer').off('click').on('click', function(event){
		event.preventDefault();
		var winheight = $('.wrap').outerHeight();
		$('<div class="popup_mask"></div>').show().prependTo('.wrap');
		$('.popup_mask').height(winheight);
		$('.layerpop').show();
		bodyFix();
	});
	//layer popup 닫기
	$('.popup_closebtn').click(function(e){
		e.preventDefault();
		$('.layerpop').hide();
		$('.popup_mask').remove();
		bodyFixRelease();
	});


	$('.bot_rights > a').off('click').on('click', function(e){
		e.preventDefault();
		$("body, html").animate({
			scrollTop : 0
		},400) ;
		return false ;
	});


	function mainSlider(){
		var swiper = new Swiper('.mainslide_cont', {
			effect : 'fade',
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
		});
	}

	$('.speed_form').off('click').on('click', function(event){
		event.preventDefault();
		var winheight = $('.wrap').outerHeight();
		$('<div class="popup_mask"></div>').show().prependTo('.wrap');
		$('.popup_mask').height(winheight);
		$('.quickBox').animate({'right':'0'},200);
		bodyFix();
	});

	$('.quick_cbtn').click(function(e){
		e.preventDefault();
		$('.quickBox').stop().animate({'right':'-310px'},200);
		$('.ing_List').stop().animate({'right':'-310px'},200);
		$('.popup_mask').remove();
		bodyFixRelease();
	});

	$('.ing_btn').off('click').on('click', function(event){
		event.preventDefault();
		var winheight = $('.wrap').outerHeight();
		$('<div class="popup_mask"></div>').show().prependTo('.wrap');
		$('.popup_mask').height(winheight);
		$('.ing_List').animate({'right':'0'},200);
		bodyFix();
	});

	
	if($('.mainslide_cont').length > 0){
		mainSlider();
	}

	function subpage(){
		$('.speed_form').off('click').on('click', function(event){
			event.preventDefault();
			var winheight = $('.wrap').outerHeight();
			$('<div class="popup_mask"></div>').show().prependTo('.wrap');
			$('.popup_mask').height(winheight);
			$('.quickBox').animate({'right':'0'},200);
			bodyFix();
		});

		$('.quick_cbtn').click(function(e){
			e.preventDefault();
			$('.quickBox').animate({'right':'-310px'},200);
			$('.ing_List').animate({'right':'-310px'},200);
			$('.popup_mask').remove();
			bodyFixRelease();
		});

		$('.ing_btn').off('click').on('click', function(event){
			event.preventDefault();
			var winheight = $('.wrap').height();
			$('<div class="popup_mask"></div>').show().prependTo('.wrap');
			$('.popup_mask').height(winheight);
			$('.ing_List').animate({'right':'0'},200);
			bodyFix();
		});
	}



	if($('.sub_header').length > 0){
		subpage();
	}

	function quick(t, n) {
		var t = $(t);
		var mt = t.position().top;
		if (n == null) n = 0;

		$(window).on("scroll", function() {
			var st = $(document).scrollTop();
			var v = st+mt-n;
			if (n==0 || st > n) { //딜레이 없거나 딜레이 이상의 높이일때
				t.stop().animate({top:v});
			} else { //딜레이 이하의 높이일때
				t.stop().animate({top:mt});
			}
		});
	}

	if($('body').length){
		quick("#quick_menu", 400);
	}else{
		quick("#quick_menu");
	}

	//view page section scroll move
	$('.snb ul li a').off('click').on('click', function(event){
		event.preventDefault();
		var actionscroll = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $("#scroll-" + actionscroll).offset().top
		}, 600);
	});


	// scroll에 따른 보여주고 안보여주기
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();


		if (scrollTop <= 450) {
			$('.snb').css('position', 'absolute');
		} else {
			$('.snb').css('position', 'fixed');
		}

		//scroll에 따른 class on / off 
		var j = 0 ;
		$('[id^=scroll-abouT_]').each(function(index) {
			if(Math.floor($(this).offset().top - 60) <= $(document).scrollTop()){
				$("[class^=abouT_]").removeClass("selected");
				if(index != 0){
					j++ ;
				}
			}
		});
		$(".abouT_"+j).addClass("selected");
	});
	$(".abouT_0").addClass("selected");


	//서브타이틀 글자갯수에 따른 스타일 제어 제이쿼리
	var titlewid = $('.subToptit > h2').width();
	var leftac = $('.subToptit > p');
	leftac.css({ left : titlewid+350});

	//height scroller
	var heiAuto = $(window).height();
	var contheight = $('.quickBox').height();
	if(contheight > heiAuto){
		$('.quickBox').css({'overflow-y' : ''});
	}else{
		$('.quickBox').css({'overflow-y' : 'auto'});
	}
	
	function popupSlide(){
		var popupSlide = new Swiper('.imgslide_wrap', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			centeredSlides: true,
			speed: 600,
			autoplayDisableOnInteraction: false,
			loop: true
		});
	}

	$('.portfolio_list > ul > li > a').off('click').on('click', function(e){
		e.preventDefault();
		var winheight = $('.wrap').outerHeight();
		$('<div class="popup_mask"></div>').show().prependTo('.wrap');
		$('.popup_mask').height(winheight);
		$(this).next('.portfolio_popup').show();
		bodyFix();
		popupSlide();
	});

	$('.slclose_Btn').off('click').on('click',function(popup){
		popup.preventDefault();
		$('.portfolio_popup').hide();
		$('.popup_mask').remove();
		bodyFixRelease();
	});

	if($('#grid').length > 0){
			biblelistBox();
	}

	//portfolio
	function biblelistBox(){

		var winWidth = window.outerWidth;
		var $container = $('#grid');
		
		$container.isotope({
			itemSelector: '#grid > li'
		});
		
		$container.isotope({
			masonry: { columnWidth: $container.width() /4 }
		});

		$('#grid').isotope({ sortBy : 'original-order' });

		var $optionSets = $('#options .option-set'),
			$optionLinks = $optionSets.find('a');
		
		$optionLinks.click(function(){
				var $this = $(this);
				// don't proceed if already selected
				if ($this.hasClass('selected')){
					return false;
				}
				
				var $optionSet = $this.parents('.option-set');
				
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
					// changes in layout modes need extra logic
					changeLayoutMode($this, options)
				} else {
					// otherwise, apply new options
					$container.isotope(options);
				}
				return false;
		});
	}

});
