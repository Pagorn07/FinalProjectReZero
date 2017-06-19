var theme = true;

Drupal.behaviors.reZero = {
  attach: function(context, settings) {

    jQuery('body').once('btnChangeTheme', function() {

      //add class to the content Types image to adapt the image to the size of the screen
      jQuery(".imageField img").addClass("imageVideogame col-sm-6 col-xs-12");
      jQuery(".user-picture img").addClass("imageVideogame col-sm-6 col-xs-12");
      jQuery(".imageTeaser img").addClass("col-sm-4 col-xs-6");
      jQuery(".listImage img").addClass("col-sm-6 col-xs-12");
      jQuery("#privatemsg-list-form .container-inline, #edit-filter").hide();
      jQuery(".privatemsg-header-participants,.privatemsg-header-subject, table.user-relationships-listing-table > thead > tr th").addClass("active");
      jQuery("table").addClass("table-bordered");
      jQuery("table > thead > tr").addClass("active ");
      //      jQuery(".listImage img").addClass("col-sm-6 col-xs-12");


      //add a button, in tablet and desktop to change the theme of the page
      if (jQuery(window).width() > 768) {
        jQuery("#navbar").append("<button class='btn' onClick='changeTheme()'>Cambiar tema</button>");
      }

      jQuery(".block-title").css("color", "grey");
      jQuery("#forum table").css("background", "#eee");
      jQuery("#forum table").addClass("table table-bordered table-hover");

      if(localStorage.themeColor) {
        if (localStorage.themeColor == "black") {
          jQuery("body").css("background-color", "#1D1E2C");
          jQuery(".page-header").css("color", "#E1E2EF");
          jQuery("#navbar").css("background", "#0B2C2A");
          jQuery(".well").css("background", "#0B2C2A");
          jQuery("p").removeClass("pT1").addClass("pT2");
          jQuery(".field-label").removeClass("field-labelT1").addClass("field-labelT2");
          jQuery(".field-items").removeClass("field-itemsT1").addClass("field-itemsT2");
          jQuery(".videogameType").removeClass("contentTypeT1").addClass("contentTypeT2");
          jQuery(".node-teaser header h2 a").removeClass("nodeTeaserT1").addClass("nodeTeaserT2");
          jQuery(".title").css("color","white", "!important");
          jQuery("a,span,ol a,.fieldset-legend,.active,#block-system-main li,#block-system-main h2").css("color","white ");
          jQuery(".username,.user_relationships_popup_link").css("color","white", "!important").css("text-decoration", "underline");
          jQuery(".privatemsg-list-subject a, .privatemsg-list-participants a").css("color","rgb(119, 119, 119)");
	  jQuery(".block-title").css("color", "white");


          //localStorage.themeColor = "white";
        }
      }

      showMoreInfo();
    })
  }
};

//function wich his functionality is to change the color theme
function changeTheme() {
  if (!localStorage.themeColor) {
    localStorage.setItem("themeColor" , "white");
  }

  var themeColor = localStorage.getItem("themeColor");
  if (themeColor == "black") {
    jQuery("body").css("background-color", "#E1E2EF");
    jQuery(".page-header").css("color", "#1D1E2C");
    jQuery("#navbar").css("background", "#f8f8f8");
    jQuery(".well").css("background", "#f8f8f8");
    jQuery("a").css("color", "#777");
    jQuery("p").removeClass("pT2").addClass("pT1");
    jQuery(".field-label").removeClass("field-labelT2").addClass("field-labelT1");
    jQuery(".field-items").removeClass("field-itemsT2").addClass("field-itemsT1");
    jQuery(".videogameType").removeClass("contentTypeT2").addClass("contentTypeT1");
    jQuery(".node-teaser header h2 a").removeClass("nodeTeaserT2").addClass("nodeTeaserT1");
    jQuery(".title").css("color","white", "!important");
    jQuery("span,ol a,.fieldset-legend,.active,#block-system-main li,#block-system-main h2").css("color","black");
    jQuery(".block-title").css("color", "grey");

    jQuery(".privatemsg-list-subject a, .privatemsg-list-participants a").css("color","rgb(119, 119, 119)");
    localStorage.themeColor = "white";

  } else {

    jQuery("body").css("background-color", "#1D1E2C");
    jQuery(".page-header").css("color", "#E1E2EF");
    jQuery("#navbar").css("background", "#0B2C2A");
    jQuery(".well").css("background", "#0B2C2A");
    jQuery("p").removeClass("pT1").addClass("pT2");
    jQuery(".field-label").removeClass("field-labelT1").addClass("field-labelT2");
    jQuery(".field-items").removeClass("field-itemsT1").addClass("field-itemsT2");
    jQuery(".videogameType").removeClass("contentTypeT1").addClass("contentTypeT2");
    jQuery("h3 a").css("color","white","!important");
    jQuery(".node-teaser header h2 a").removeClass("nodeTeaserT1").addClass("nodeTeaserT2");
    jQuery("a,span,ol a,.fieldset-legend,.active,#block-system-main li,#block-system-main h2").css("color","white");
    jQuery(".username").css("color","white", "!important").css("text-decoration", "underline");
    jQuery(".privatemsg-list-subject a, .privatemsg-list-participants a").css("color","rgb(119, 119, 119)");
    jQuery(".title").css("color", "white", "!important");	
    jQuery(".block-title").css("color", "white");

    localStorage.themeColor = "black";
  }
  //  <button class="btn btn-large" onClick='window.location="usergamelist?userid=<?php echo $path[1] ?>"'>Go to games list</button>
//<?php $userPath?>
//$path = current_path();
  //$path=explode('/',$path);

}

//function which create a button in appeared fields that redirect us to an another page with a list of complete info
function showMoreInfo(){
/*  
//add a button in the character field to show all list of characters that the game has in another page
  if(jQuery(".charactersField > .field-items div").length >4 && jQuery(window).width() > 768){
    jQuery(".charactersField").append("<button class='btn''>Show more characters</button>");

  }else if(jQuery(".charactersField > .field-items div").length >2 && jQuery(window).width() < 768){
    jQuery(".charactersField").append("<button class='btn'>Show more characters</button>");


  }

  //add a button in the character field to show all list of games that the person made in another page
  if(jQuery(".gamesField > .field-items div").length >4 && jQuery(window).width() > 768){
    jQuery(".gamesField").append("<button class='btn''>Show more games</button>");

  }else if(jQuery(".gamesField > .field-items div").length >2 && jQuery(window).width() < 768){
    jQuery(".gamesField").append("<button class='btn''>Show more games</button>");


  }

  //add a button in the character field to show all list of games that the character  appeared
  if(jQuery(".gamesAppearedField > .field-items div").length >4 && jQuery(window).width() > 768){
    jQuery(".gamesAppearedField").append("<button class='btn''>Show more game</button>");

  }else if(jQuery(".gamesAppearedField > .field-items div").length >2 && jQuery(window).width() < 768){
    jQuery(".gamesAppearedField").append("<button class='btn''>Show more games</button>");


  }*/
}
