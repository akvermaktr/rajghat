
    
$(document).ready(function() {
    $(".messagenone").click(function(){
		$(".mobilesearchview").toggle("fast");
		});
		$(".navbar-toggle").click(function(){
		$(".mobilesearchview").css("display","none");
		});
});
 
$(document).ready(function() {




        if ($(window).width() < 767) {
            var newsslider = $('#newsslider .newsticker').newsTicker({
                row_height: 82,
                speed: 800,
                prevButton: $('#newsslider .prev-button'),
                nextButton: $('#newsslider .next-button'),
                stopButton: $('#newsslider .stop-button'),
                startButton: $('#newsslider .start-button'),
            });
        } else {
         var newsslider = $('#newsslider .newsticker').newsTicker({
                row_height: 32,
                speed: 800,
                prevButton: $('#newsslider .prev-button'),
                nextButton: $('#newsslider .next-button'),
                stopButton: $('#newsslider .stop-button'),
                startButton: $('#newsslider .start-button'),
            });
        }
    });
    


$(document).ready(function() {
           
 $('#search-block-form').submit(function(){
		 
			if(	$(this).find('.form-text').val() ==""){
				alert('Please enter your keywords.'); return false;
			}

			//return false;


			}
		);
		
				$('.ext').click(function(){
				alert('This link will take you to an external web site.'); return true;
			}
		);
		$('.hi a').click(function(){
				alert('This link will take you to Hindi version of this website.'); return true;
			}
		);
		$('.en a').click(function(){
				alert('This link will take you to English version of this website.'); return true;
			}
		);
 });
 
 
 
    $('.bannerslider').carousel({
        interval: 5000 //changes the speed
    })
          
         
         function openChild(file, windowmn, val) {
            if (parseInt(val) == 1) {
                if (!confirm('This link shall take you to a page/website outside this website.For any query regarding the contents of the linked page/website, please contact the webmaster of the concerned website.')) {
                    return false;
                }
            }
            else if (parseInt(val) != 0) {
                var arr = file.split(".");
                var ext = arr[arr.length - 1].toLowerCase();
                if (ext == "pdf" || ext == "doc" || ext == "xls" || ext == "ppt" || ext == "docx" || ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png" || ext == "txt") {
                }
                else {
                    if (!confirm('This link shall take you to a page/website outside this website.For any query regarding the contents of the linked page/website, please contact the webmaster of the concerned website.')) {
                        return false;
                    }
                }

            }
			childWindow = window.open(file, windowmn, 'width=600,height=500,screenX=100,screenY=0,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,resizable=yes');
            childWindow.focus();
			}
       