$(document).ready(function() {

            $('#fullpage').fullpage({
				//Navigation
				menu:false,
				anchors:['firstSlide','secondSlide'],
				navigation: true,
				navigationPosition : 'left',
				navigationTooltips: ['Home','tamere'],
				slidesNavigation: true,
				slidesNavPosition: 'top',
				
				//Scrolling
				css3: true,
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
				scrollingSpeed: 0,
				
				        onSlideLeave: function( anchorLink, index, slideIndex, direction){
            //leaving the first slide of the 2nd Section to the right
            if(index == 2 && slideIndex == 0 && direction == 'right'){
                alert("Leaving the fist slide!!");
            }

            //leaving the 3rd slide of the 2nd Section to the left
            if(index == 2 && slideIndex == 2 && direction == 'left'){
                alert("Going to slide 2! ");
            }
        }



				
            });

        });
