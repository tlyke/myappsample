//variables used for edit schedule pages
var numberOfRows = 0;
var dataIndexes = [];

//functions called initially whe page loads
$(function(){
	changeBackground();
	numberOfRows = getNumberOfRows();
	getDataIndexes();
	tutorCheck();
	for(var i = 0; i < numberOfRows; i++){
		checkTimes(i);
	}
}
);

//makes datatables styled and gives them behaviour
$(function(){
	$("#dataTable").DataTable();
});

//allows user to discover tutors based on requirements
function discoverTutor(){
	
 
			$("#spinner").addClass("spinner-border");
			var json = "";
			
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var json = createJson();
				xmlhttp = new XMLHttpRequest();
				
			} else {
				// code for IE6, IE5
				var json = createJson();
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					$("#spinner").removeClass("spinner-border");
					$("#table").html(this.responseText);
					$("#dataTable").DataTable();
				}
			};
			xmlhttp.open("GET","discoverTutorDatabase.php?q="+json,true);
			xmlhttp.send();
		
  
}

//finds tutor based on email and name
function findTutor(){
	
 
		
			
			$("#spinner").addClass("spinner-border");
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				
				xmlhttp = new XMLHttpRequest();
				
			} else {
				// code for IE6, IE5
				
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var searched_info = this.responseText;
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						
						xmlhttp = new XMLHttpRequest();
						
					} else {
						// code for IE6, IE5
						
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							$("#searched_info").html(searched_info);
							$("#dataTable").DataTable();
							var jsonData = JSON.parse(this.responseText);
							
							drawSinglYGraph(jsonData[0].xDataArray, jsonData[0].yDataArray, jsonData[0].yLabel, jsonData[0].chart, jsonData[0].typeOfGraph, ['rgba(255, 99, 132, 0.2)', 'rgba(30, 20, 242, 0.2)', 'rgba(230, 89 , 102, 0.2)', 'rgba(90, 230, 20, 0.2)','rgba(99, 20, 232, 0.2)', 'rgba(242, 86, 50, 0.2)', 'rgba(100, 200, 50, 0.2)', 'rgba(70, 100, 230, 0.2)','rgba(200, 110, 32, 0.2)', 'rgba(50, 230, 120, 0.2)'], ['rgba(255, 99, 132, 1)', 'rgba(30, 20, 242, 1)', 'rgba(230, 89 , 102, 1)', 'rgba(90, 230, 20, 1)','rgba(99, 20, 232, 1)', 'rgba(242, 86, 50, 1)', 'rgba(100, 200, 50, 1)', 'rgba(70, 100, 230, 1)','rgba(200, 110, 32, 1)', 'rgba(50, 230, 120, 1)']);
					drawSinglYGraph(jsonData[1].xDataArray, jsonData[1].yDataArray, jsonData[1].yLabel, jsonData[1].chart, jsonData[1].typeOfGraph, ['rgba(30, 20, 242, 0.2)'], ['rgba(30, 20, 242, 1)']);
						$("#spinner").removeClass("spinner-border");
						}
					};
					xmlhttp.open("GET","personalTutorGraphDatabase.php?q="+$("#tutor").val(),true);
					xmlhttp.send();
				}
			};
			xmlhttp.open("GET","findTutorDatabase.php?q="+$("#tutor").val(),true);
			xmlhttp.send();
		

}

//autocompletes tutor search bar
function autocompleteTutor(){
	var tutors = [];
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		
		xmlhttp = new XMLHttpRequest();
		
	} else {
		// code for IE6, IE5
		
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			tutors = JSON.parse(this.responseText);
			$("#tutor").autocomplete({
				source: tutors,
				minLength: 0
			});
		}
	}
	xmlhttp.open("GET","findTutorAutocompleteDatabase.php?q="+$("#tutor").val(),true);
	xmlhttp.send();
	
}

//creates json used to format requirements for discover tutor
function createJson(){
	
	var json = "{";
	if($("#computer_science_inquiry").prop( "checked" )){
		json += '"computer_science_inquiry": "true",'
	}
	if($("#object_oriented_programming").prop( "checked" )){
		json += '"object_oriented_programming": "true",'
	}
	if($("#web_technologies").prop( "checked" )){
		json += '"web_technologies": "true",'
	}
	if($("#advanced_programming").prop( "checked" )){
		json += '"advanced_programming": "true",'
	}
	if($("#microcontroller_applications").prop( "checked" )){
		json += '"microcontroller_applications": "true",'
	}
	if($("#advanced_web_technologies").prop( "checked" )){
		json += '"advanced_web_technologies": "true",'
	}
	if($("#android_apps_development").prop( "checked" )){
		json += '"android_apps_development": "true",'
	}
	if($("#unix_linux_and_cybersecurity").prop( "checked" )){
		json += '"unix_linux_and_cybersecurity": "true",'
	}
	if($("#machine_learning").prop( "checked" )){
		json += '"machine_learning": "true",'
	}
	if($("#computational_science").prop( "checked" )){
		json += '"computational_science": "true",'
	}
	if($("#A").prop( "checked" )){
		json += '"letter_day_A": "true",'
	}
	if($("#B").prop( "checked" )){
		json += '"letter_day_B": "true",'
	}
	if($("#I").prop( "checked" )){
		json += '"letter_day_I": "true",'
	}
	if($("#C").prop( "checked" )){
		json += '"letter_day_C": "true",'
	}
	if($("#D").prop( "checked" )){
		json += '"letter_day_D": "true",'
	}
	if($("#S").prop( "checked" )){
		json += '"letter_day_S": "true",'
	}
	if($("#from_time0").length){
		json += '"from_time":"'+$("#from_time0").val()+'",';
		json += '"to_time":"'+$("#to_time0").val()+'",';
	}
	
	if($("#date").length){
		json += '"given_date":"'+$("#date").val()+'",';
	}
	json = json.substring(0, json.length-1);
	json += "}";
	
	return json;
}

//checks to see if time pairs are valid
function checkTimes(data)
{
	var submitButton = document.getElementById('submit');
    
    var time_from = document.getElementById('from_time'+data) ;
	var time_to = document.getElementById('to_time'+data) ;
	

    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
    
    if(time_from.valueAsNumber < time_to.valueAsNumber){
        
        time_from.style.backgroundColor = goodColor;
		time_to.style.backgroundColor = goodColor;
        
		submitButton.disabled = false;
		return true;
		
    }else{
        
		time_from.style.backgroundColor = badColor;
        time_to.style.backgroundColor = badColor;
        ;
		submitButton.disabled = true;
		return false;
    }
} 

//checks if date is not in the past
function checkDate()
{
	var submitButton = document.getElementById('submit');
    
    var date = document.getElementById('date') ;
	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

var todaysDate = new Date(yyyy + "-" + mm + "-" + dd);
var givenDate = new Date(date.value)
	
	
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    
    if(givenDate.valueOf() >= todaysDate.valueOf()){
        
        date.style.backgroundColor = goodColor;
		
        
		submitButton.disabled = false;
		return true;
		
    }else{
        
		date.style.backgroundColor = badColor;
		submitButton.disabled = true;
		return false;
    }
} 
//checks if dates and times are valid
function checkDateAndTime(){
	var submitButton = document.getElementById('submit');
	if(checkTimes(0) && checkDate()){
		submitButton.disabled = false;
	}
	else{
		submitButton.disabled = true;
	}
}

//checks dates and times if they exist
function checkExist(){
	
	var disableButton = false;
	if(document.getElementById('from_time0')){
		time = checkTimes(0);
		disableButton = !(disableButton == false && time);
	}

	
	if(document.getElementById('date')){
		date = checkDate();
		disableButton = !(disableButton == false && date);
		
	}
	else{}
	
	document.getElementById('submit').disabled = disableButton;
}

//changes background color of checkboxes
function changeBackground(){
	$(".whiteBackground ").css("background-color", "white");
}

//chcks to see if the tutor box is checked and changes form based on it intially
$(function(){
	tutorCheck()
}
);

//chcks to see if the tutor box is checked and changes form based on it
function tutorCheck(){
	if($("#is_tutor").is(':checked')){
		$(".tutor_input").show();
		$("#graduation_year").prop('required',true);
		
	}
	else{
		$(".tutor_input").hide();
		$("#graduation_year").prop('required',false);
		$(".tutor_input").prop("checked", false);
		$(".tutor_input").val("");
	}
}

//deletes checked rows in edit schedule
function deleteCheckRows(){
	$("[data]").each(function(){
		if($(this).prop("checked")){
			$("[data="+$(this).attr("data")+"]").remove()
		}
	});
	dataIndexes = getDataIndexesArray();
	getDataIndexes();
	for(var i = 0; i < dataIndexes.length; i++){
		
		checkTimes(dataIndexes[i]);
	}
	console.log(dataIndexes);
}

//gets the number of rows in a tutors schedule
function getNumberOfRows(){
	var numOfRows = 0;
	$("[data]").each(function(){
		numOfRows++;
	});
	numOfRows /= 2;
	return numOfRows;
}

//gets indexes of tutor's schedules inputs as string
function getDataIndexes(){
	var newDataIndexes = [];
	$("[data]").each(function(){
		newDataIndexes.push($(this).attr("data"))
	});
	newDataIndexes = Array.from(new Set(newDataIndexes));
	stringDataIndexes = "";
	for(var i = 0; i < newDataIndexes.length; i++){
		stringDataIndexes += newDataIndexes[i]+" ";
	}
	stringDataIndexes = stringDataIndexes.trim()
	$("#dataList").val(stringDataIndexes);
	return stringDataIndexes;
}

//gets indexes of tutor's schedules inputs as array
function getDataIndexesArray(){
	var newDataIndexes = [];
	$("[data]").each(function(){
		newDataIndexes.push($(this).attr("data"))
	});
	newDataIndexes = Array.from(new Set(newDataIndexes));
	
	return newDataIndexes;
}

//adds row to tutor's schedule
function addRow(){
	var data = numberOfRows;
	$("#appointments").append("<div class='input-group mb-3 container' data='"+data+"'><div class='input-group-prepend'><span class='input-group-text whiteBackground'><input id='checkbox"+data+"' type='checkbox' name='checkbox"+data+"' data='"+data+"'></span></div><div class='input-group-prepend'><span class='input-group-text'>Letter Day</span></div><select class='form-control' id='letter_day"+data+"'name='letter_day"+data+"'><option value='A' >A</option><option value='B' >B</option><option value='I' >I</option><option value='C' >C</option><option value='D' >D</option><option value='S' >S (Sunday)</option></select><div class='input-group-prepend'><span class='input-group-text'>From</span></div><input id='from_time"+data+"' onchange='checkTimes("+data+")' type='time' class='form-control' name='from_time"+data+"'  required><div class='input-group-prepend'><span class='input-group-text'>To</span></div><input id='to_time"+data+"' onchange='checkTimes("+data+")' type='time' class='form-control' name='to_time"+data+"'  required></div>");
	changeBackground();
	dataIndexes = getDataIndexes();
	console.log(dataIndexes);
	numberOfRows++;
}

//changes appearance of date input checkbox is checked on discover tutor page
function changeAppearanceDate(){
	if($("#date_checkbox").prop("checked")){
		$("#date_container").append("<input type='date' name='date' id='date' onchange='checkExist()' required>")
	}
	else{
		$("#date").remove();
	}
	checkExist();
}

//changes appearance of time input checkbox is checked on discover tutor page
function changeAppearanceTime(){
	if($("#time_checkbox").prop("checked")){
		$("#time_container").append("<div class='input-group-prepend time_info_container'><span class='input-group-text'>From</span></div><div class='time_info_container'><input id='from_time0' type='time' class='form-control' onchange='checkExist()' name='from_time0'  required></div><div class='input-group-prepend time_info_container'><span class='input-group-text'>To</span></div><div class='time_info_container'><input id='to_time0' type='time' class='form-control' onchange='checkExist()' name='to_time0'  required></div>");
	}
	else{
		$(".time_info_container").remove();
	}
	checkExist();
}

//checks the password and confirm password to see if they are the same
function checkPass()
{
	var submitButton = document.getElementById('submit');
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!";
		if(checkPassValid()){
			pass2.style.backgroundColor = goodColor;
			submitButton.disabled = false;
		}	
		
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!";
		submitButton.disabled = true;
    }
} 

//checks if the password is valid 
function checkPassValid()
{
	var submitButton = document.getElementById('submit');
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    //Store the Confimation Message Object ...
    var message = document.getElementById('validMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value.length > 7 && hasUpperCase(pass1.value) && hasLowerCase(pass1.value) && (/[0-9]/.test(pass1.value)) && !(/^[a-zA-Z0-9]*$/.test(pass1.value))){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Password is strong!";
		submitButton.disabled = false;
		return true;
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password is weak!";
		submitButton.disabled = true;
		return false;
    }
} 

//checks if a string has a lower case character
function hasLowerCase(str) {
    return str.toUpperCase() != str;
}

//checks if a string has a upper case character
function hasUpperCase(str) {
    return str.toLowerCase() != str;
}

//draws a graph based on info given
function drawSinglYGraph(xDataArray, yDataArray, yLabel, chart, typeOfGraph, colorFillArray, colorBorderArray){
	
	var ctx = document.getElementById(chart).getContext('2d');
	var myChart = new Chart(ctx, {
		type: typeOfGraph,
		data: {
			labels: xDataArray,
			datasets: [{
				label: yLabel,
				data: yDataArray,
				backgroundColor: colorFillArray,
				borderColor: colorBorderArray,
				borderWidth: 1
			}
			]
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
}
