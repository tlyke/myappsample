$(document).ready( function () {
    $('#table1').DataTable();
} );





/*//creates accordian
$( function() {
	$( "#accordion" ).accordion({active: false,
	collapsible: true,});
} );

//creates tabs
$( function() {
	$( "#tabs" ).tabs();
} );

var numberOfCorrectAnswers = 0;
//drag and drop quiz
$(document).ready( function() {
  //initialize the quiz options
  $('.draggable').each( function(i) {
		var thisDraggable = $(this);
		//gets the draggable's target
		var answerValue = thisDraggable.data('target');
		//gets the answer slot corresponding with the draggable's target
		var targetSlot = $(' .target[data-accept="'+answerValue+'"]');
		//gets draggable's html to be inserted into the answer slot later
		var labelText = thisDraggable.html();
		//allows for draggable to be dragged
		thisDraggable.draggable( {
			//allows dragable to glide back to original position
			revert: "invalid"
		});
		
		//if there is an answer slot code runs
		if ( targetSlot.length > 0 ) {
			//allows for the droppable with the corresponding target to drop into the target slot
			targetSlot.droppable( {
				accept: '.draggable[data-target="'+answerValue+'"]',
				//on the dropping of the droppable into the target slot their abilities to drag and drop are destroyed
				//the draggable is hidden, the target slot gets the draggable's html and gets a green highlight
				//to show that it has the right answer
				drop: function( event, ui ) {
				    thisDraggable.draggable('destroy');
					targetSlot.droppable('destroy');
					thisDraggable.hide();
					targetSlot.find( "h5" ).html(labelText);
					targetSlot.addClass( "ui-state-highlight" );
					numberOfCorrectAnswers++;
					updateScore();
				}
			});
		}
   });
});

//answers to the quiz
var quizAnswers = ["jQuery is a concise JavaScript library that allows for a multitude of tasks to be carried out, making it much easier to use JavaScript on your website.","While onload() waits for all of the pages content to load, document.ready() wont wait for the resources like images to get loaded.","Some jQuery features include HTML/DOM manipulation, CSS manipulation, HTML event methods, Effects and animations, AJAX, Utilities","You can use many things as selectors such as * for all elements, # for ids, . for classes, element name for element, and many other css selectors.","Some advantages of jQuery are that it is light weight compared to other javascript libraries, there are varius plugins available for a large range of specific needs, and it is easier for a designer to learn jQuery since it is works with simple CSS.","While it is negligible on desktops and laptops, jQuery is slightly slower than JavaScript in some cases due to all of the checks that jQuery uses to maintain its integrity. This performance speed difference is noticeable on mobile devices because their weaker CPU takes longer for jQuery's demanding task."];

//fills out the quiz and erases the answers in the answer bank
function solveQuiz() {
	//modal/dialog that has the user confirm that the want to complete the quiz
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
	  //buttons to continue or cancel the filling out of the quiz
      buttons: {
        "Of course": function() {
			//closes dialog
			$( this ).dialog( "close" );
			//higlights all target slots
			$(".target").addClass( "ui-state-highlight" );
			
			numberOfCorrectAnswers = 6;
			updateScore();
			//inserts the correct answers into the correct spot and clears the answer bank
			var targetElements = document.getElementsByClassName("target");
			var answerElements = document.getElementsByClassName("answer");
			for(var i = 0; i < targetElements.length; i++){
				targetElements[i].innerHTML = "<h5>"+quizAnswers[i] +"</h5>";
				answerElements[i].innerHTML = ""
			}
        },
		//cancel button just closes the dialog
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }

$(function(){
	document.getElementById("quizScore").innerHTML = "You have "+numberOfCorrectAnswers + " out of 6 correct";
}	
);

function updateScore(){
	document.getElementById("quizScore").innerHTML = "You have "+numberOfCorrectAnswers + " out of 6 correct";
}
  
//adds theme to the gallery and has it run
$(function() { 
    Galleria.loadTheme('JS/galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');

});

//adds comment to forum
function addComment(){
	$("#forum").html($("#forum").html()+"<div class='media'><div class='media-left'><img src='karen.jpg' class='media-object' style='width:60px'></div><div class='media-body'><h3 class='media-heading'>"+document.getElementById("name").value+"</h3><p>"+document.getElementById("comment").value+"</p></div></div>")
	document.getElementById("comment").value = "";
}















$( function() {
    //$( "#draggable" ).draggable()
	
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });
	$('.draggable').each(function() {
    alert( this.id );
	$(this.id).draggable();
	$( "#a" ).draggable()
});
  } );*/
 