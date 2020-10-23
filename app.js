
let quiz = {
	"landing" : [
		{
			"q":"Какой одъём страницы ?",
			"a":[
				"3 экрана",
				"4 экрана",
				"5 экрана",
				"6 экрана",
				"больше"
			]
		},
		{
			"q":"Есть ли у вас дизайн ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужна ли мобильная версия сайта ?",
			"a":[
				"Да",
				"Нет"
			]
		}
	],
	"internet_show" : [
		{
			"q":"Нужна ли главная страница ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужно ли наполнение товарми ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужна ли мобильная версия сайта ?",
			"a":[
				"Да",
				"Нет"
			]
		}
	],
	"vizitka":[
		{
			"q":"Сколько страниц должно быть на сайте ?",
			"a":[
				"3 страницы",
				"4 страницы",
				"5 страниц",
				"6 страниц",
			]
		},
		{
			"q":"Есть ли у вас дизайн ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужна ли мобильная версия сайта ?",
			"a":[
				"Да",
				"Нет"
			]
		}
	],
	"corp":[
		{
			"q":"Сколько страниц должно быть на сайте ?",
			"a":[
				"7 страниц",
				"8 страниц",
				"9 страниц",
				"10 страниц",
			]
		},
		{
			"q":"Есть ли у вас фирминный стиль ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужна ли мобильная версия сайта ?",
			"a":[
				"Да",
				"Нет"
			]
		}
	],
	"catalog":[
		
		{
			"q":"Нужна ли главная страница ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужно ли наполнение товарми ?",
			"a":[
				"Да",
				"Нет"
			]
		},
		{
			"q":"Нужна ли мобильная версия сайта ?",
			"a":[
				"Да",
				"Нет"
			]
		}
	]
}






$(document).ready(function () {
	 $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
	var tm = 0; 
	var tm1 = 0; 
	var tm2 = 0; 
	$(window).scroll(function(){
		if($(window).scrollTop()>350){
			$('.hreader-f').fadeIn(900)
		}else{
			$('.hreader-f').fadeOut(700)
		}

		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var et = $('#progressbar1').offset().top;
		var eh = $('#progressbar1').outerHeight();
		var et1 = $('#progressbar2').offset().top;
		var eh1 = $('#progressbar2').outerHeight();
		var et2 = $('#progressbar3').offset().top;
		var eh2 = $('#progressbar3').outerHeight();
		var dh = $(document).height();   
		if (wt + wh >= et || wh + wt == dh || eh + et < wh){
			
			var ic = setInterval(function(){
				if(tm===90){
					clearInterval(ic);
				}else{
				tm++;
				$('#progressbar1').val(tm);}
			},150);
		}
		if (wt + wh >= et1 || wh + wt == dh || eh1 + et1 < wh){
			var ic1 = setInterval(function(){
				if(tm1==61){
					window.clearInterval(ic1);
				}else{
				tm1++;
				$('#progressbar2').val(tm1);}
			},200);
		}
		if (wt + wh >= et2 || wh + wt == dh || eh2 + et2 < wh){
			var ic2 = setInterval(function(){
				if(tm2==31){
					clearInterval(ic2);
				}else{
				tm2++;
				$('#progressbar3').val(tm2);}
			},250);
		}
	});	
	var typed = new Typed('.mblock__second', {
	  strings: ["Хотите сайт который будет действительно приносить клиентов ? ","Хотите сайт который будет действительно приносить деньги ? "],
	  typeSpeed: 30,
	  loop:true,
	  typeSpeed:55,
	  backDelay: 5000,
	  backSpeed: 55
	});

	let bg = $('.parallax-layer');
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    bg.css({'transform':'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'});
	});
	$('.examples__wrapper-item').mouseenter(function(){
		var va = $(this).data('id');
		$('.example-overlay#'+va).show(100);
	}).mouseleave(function(){
		var va = $(this).data('id');
		$('.example-overlay#'+va).hide(100);
	});

	// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});













	var step = 0;
	var fo = ''; 
	var answers = '';



	function showQuestion(questionNumber){
		$('.qw__qestion').html(quiz[fo][step]['q']);
		let answer = '';
		for(let key in quiz[fo][step]['a']){
			answer += `<div class="qw__answer-item" data-v='${key}' >${quiz[fo][step]['a'][key]}</div>`;
		}
		$('.qw__answer').html(answer);
	}




	$('body').on('click','.qw__answer-item',function(){
		answers += $(this).text() +' ';
		console.log(answers)
		if(fo != '' ){
			if(step < quiz[fo].length-1){
				step++;
				showQuestion(step);
			}else{
				$('.qw__answer').remove();
				$('.qw__qestion').remove();
				$('.qw__btn').show();
			}
		}else{		
			var check = $(this).data('i');
			fo = check;
			console.log(fo);
			showQuestion(step);
			// step++;
		}
	});



	$('.qw__btn').click(function(){
		$('.qw__ovwerlay').fadeIn(100);
	});
	$('.qw__form-close').click(function(){
		$('.qw__ovwerlay').fadeOut(100);
	});


	$('form.ajax').on('submit',function(){
		var type = $(this).attr('method');
		var url = $(this).attr('action');
		var data = {};
		data['answers'] = answers;
		$(this).find('[name]').each(function(index,value){
			var name = $(this).attr('name');
			var val = $(this).val();
			data[name] = val;
		});

		$().ajax({
			url : url,
			type:type,
			data :data,
			success : function(response){
				console.log(response);
				$('.qw__ovwerlay').fadeOut(100);
			}
		});
		return false;
	});



});
