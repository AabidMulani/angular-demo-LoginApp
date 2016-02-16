// JavaScript Document 
window.onload = function () {
	var loader = null;
	var angle = 0;
	var roadpost = 0;
	var greenpost = 0;
	var mount1post = 0;
	var mount2post = 0;
	var increment = 5;
	var timer4 = null;
	var obj = "wheels";
	var obj2 = "road";
	var obj3 = "greenry";
	var obj4 = "mount2";
	var obj5 = "mount1";
	var miles_count=1;

	function start() {
		
		var interval = 5;
		var timer1 = null;
		var timer2 = null;
		function rotate() {
			$('.' + obj).css({
				'-moz-transform': 'rotate(' + angle + 'deg)',
				'msTransform': 'rotate(' + angle + 'deg)',
				'-webkit-transform': 'rotate(' + angle + 'deg)',
				'-o-transform': 'rotate(' + angle + 'deg)'
			});
			$('.' + obj2).css('background-position-x', roadpost);
			$('.' + obj3).css('background-position-x', greenpost);
			$('.' + obj4).css('background-position-x', mount1post);
			$('.' + obj5).css('background-position-x', mount2post);
			
			
			roadpost = roadpost-10;
			greenpost = greenpost-7;
			mount1post = mount1post-5;
			mount2post = mount2post-3;
			angle += increment;
			interval=interval+0.5;
			if(interval<50)
			{
				timer1 = setTimeout(rotate, interval);
			}
			else{
				$('.milestone').addClass('milestone-appears');
				if(miles_count<4){
					timer2 = setTimeout(stop, 6000);
				}
				else{return;}
			}
		}
		
		rotate(); //the function which rotates the div
	}

	function stop() {	
		miles_count++;
		if ( $('.milestone').hasClass('milestone-appears') )   
		{$('.milestone').removeClass('milestone-appears');
		 $('.milestone').addClass('milestone-disappears');
		}
		var interval = 100;
		var timer3 = null;
		var counter= 0;
		function rotate1() {
			
			$('.' + obj).css({
				'-moz-transform': 'rotate(' + angle + 'deg)',
				'msTransform': 'rotate(' + angle + 'deg)',
				'-webkit-transform': 'rotate(' + angle + 'deg)',
				'-o-transform': 'rotate(' + angle + 'deg)'
			});
			$('.' + obj2).css('background-position-x', roadpost);
			$('.' + obj3).css('background-position-x', greenpost);
			$('.' + obj4).css('background-position-x', mount1post);
			$('.' + obj5).css('background-position-x', mount2post);
			
			roadpost = roadpost-10;
			greenpost = greenpost-7;
			mount1post = mount1post-5;
			mount2post = mount2post-3;

			angle += increment;
			interval=interval-1;
			if(interval>5)
			{
				timer3 = setTimeout(rotate1, interval);
			}
			else {
				
				rotate2();
			}
		}
		function rotate2() {
			
			if(counter<1000) {
				$('.' + obj).css({
						'-moz-transform': 'rotate(' + angle + 'deg)',
						'msTransform': 'rotate(' + angle + 'deg)',
						'-webkit-transform': 'rotate(' + angle + 'deg)',
						'-o-transform': 'rotate(' + angle + 'deg)'
					});
					$('.' + obj2).css('background-position-x', roadpost);
					$('.' + obj3).css('background-position-x', greenpost);
					$('.' + obj4).css('background-position-x', mount1post);
					$('.' + obj5).css('background-position-x', mount2post);
					roadpost = roadpost-20;
					greenpost = greenpost-14;
					mount1post = mount1post-10;
					mount2post = mount2post-6;
					angle += increment+1;
					counter++;
					timer4 = setTimeout(rotate2, 5);
			}
			else {
				clearTimeout(timer4); 
				timer4=null;
               // alert("reached to destination...")
				//start();
			}
				
		}
		
		rotate1(); //the function which rotates the div
	}

loader = setTimeout(stop, 2000);
    
    $(".start").on("click",function(){
        loader = setTimeout(stop, 2000);
    });

}