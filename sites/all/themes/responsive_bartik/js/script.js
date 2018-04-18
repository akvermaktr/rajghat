$(document).ready(function() {

$('.view-home-page-banner .views-slideshow-controls-text-previous a').prop('title', 'Previous');
$('.view-home-page-banner .views-slideshow-controls-text-pause a').prop('title', 'Stop');
$('.view-home-page-banner .views-slideshow-controls-text-next a').prop('title', 'Next');

 
           
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
		
		$('.webform-client-form-25 .form-submit').click(function(){
				 				 
				firstname =  $('#edit-submitted-first-name').val();
				lastname =  $('#edit-submitted-last-name').val();
				emailf =  $('#edit-submitted-email-address').val();
				addressf =  $('#edit-submitted-address').val();
				comments =  $('#edit-submitted-comments').val();

				
				re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
				if(firstname == "")
				{
				alert('Please enter first name.');
				$('#edit-submitted-first-name').focus();
				return false;
				}
				
				
				var isSplChar = re.test(firstname);
				if(isSplChar)
				{
					 alert('Special character not allowed in first name.');
						$('#edit-submitted-first-name').focus();
					 return false;
				}
				
  var firstname_length = firstname.length;
  
  if(firstname_length < 4)
				{
					 alert('Please enter min 4 and max 20 characters in the First Name field.');
						$('#edit-submitted-first-name').focus();
					 return false;
				}

				
				
				
				
				if(lastname == "")
				{
				alert('Please enter Last name.');
				$('#edit-submitted-last-name').focus();
				return false;
				}
				
				
				var isSplChar = re.test(lastname);
				if(isSplChar)
				{
					 alert('Special character not allowed in last name.'); 
					 $('#edit-submitted-last-name').focus();
					 return false;
				}
				 var lastname_length = lastname.length;
  
  if(lastname_length < 4)
				{
					 alert('Please enter min 4 and max 20 characters in the Last Name field.');
						$('#edit-submitted-last-name').focus();
					 return false;
				}
				
				
				
				if(emailf == "")
				{
				alert('Please enter Email address.');
				$('#edit-submitted-email-address').focus();

				return false;
				}
				
				 
				if( !validateEmail(emailf)) 
				{
				alert('Please enter valid Email address.'); 
				$('#edit-submitted-email-address').focus();
				return false;
				
				
				
				}
				
				
				
				
				
				
				if(addressf == "")
				{
				
					alert('Please enter Address.');
						$('#edit-submitted-address').focus();
					return false;
				
				
				}
				if(comments == "")
				{
				
					alert('Please enter Comments.');
						$('#edit-submitted-comments').focus();
					return false;
				
				}
				
				
				
				
				
				 			 
			}
		);
		
		
		
 }); 
 
    $('.bannerslider').carousel({
        interval: 5000 //changes the speed
    })
    
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
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}       