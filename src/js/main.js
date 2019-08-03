let sliderBlock = document.getElementsByClassName('blog-slider_wrapper')[0],
		sliderRange = document.getElementsByClassName('blog-range_input')[0];

		sliderRange.addEventListener('input', () =>{
			sliderBlock.style.left = -((sliderBlock.offsetWidth / 100) * sliderRange.value) + "px";
		});