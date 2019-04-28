$( document ).ready(function() {
	loadJSON();
	loadPHPJSON();
	loadServerData();
	
});

function loadJSON() {
	/*
	
			UH OH SPAGHETTIOS the file below is really jacked up like my GPA :*)
			make sure your JSON teamates add the needed information 
			that follows the Schema's specified syntax.
	
	*/
	var file = "http://localhost/GIVE_'EM/data.json";
	
	/*
		Question with the ol' RAZZLE DAZZLE
		How do you comment in JSON >:^)?
	*/
	var rawFile = new XMLHttpRequest();
	/*
		Question with the ol' RAZZLE DAZZLE
		True or False? XMLHttpRequest objects can only be used to request XMHL data.
	*/
    rawFile.open("GET", file);
	/*
		Question with the ol' RAZZLE DAZZLE
		What is the difference between using GET and POST in the open function?
	*/
	
    rawFile.onreadystatechange = function ()
    {
		/*
			Question with the ol' RAZZLE DAZZLE
			List the meaning of each number value for http_request.readyState (*hint w3schools is pretty cool).
		*/
        if(rawFile.readyState === 4)
        {
			var rawJSONData = rawFile.responseText;
			
			/*Remember a JSON file is just text in a certain syntax so we must change
			it into compatible JavaScript arrays and objects to access the data with JavaScript efficiently. Therefore we use the built in JSON parse function*/
			
			/*
	
			OOPSIE DOOPSY Somethings wrong over here
			(I personally don't like my json as raw text I wish 
			their was someway to like *parse* and make it into JavaScript code)
	
			*/
            var data = rawJSONData;
			/*
				Question with the ol' RAZZLE DAZZLE
				Why do we have parse JSON data?
			*/
			
			var aContainer = document.getElementById("jsonExample");
            aContainer.innerHTML += "<h1>Booky Boys</h1>";
			var table = "<table id='table1' class='display' style='width:100%'><thead><tr><th>id</th><th>language</th><th>edition</th><th>author</th></tr></thead><tbody>";
			//using object's keys and array's indexes to get the information we want
			for(var i = 0; i < data.length; i++){
				table += "<tr><td>"+data[i].id+"</td><td>"+data[i].language+"</td><td>"+data[i].edition+"</td><td>"+data[i].author+"</td></tr>";
			}
			table += "</tbody></table>";
			aContainer.innerHTML = table + "<a href='data.json' target='blank' class='dataFiles' >Data file</a>";
			$('#table1').DataTable();
        }
    }
    rawFile.send();
	
}	
	
	
	
function loadPHPJSON() {
	//web server url
	var data_file = "http://localhost/GIVE_'EM/phpJSON.php";
	//creates a new object for the request for info that will be sent to the web server
	var http_request = new XMLHttpRequest();
	//find which type of object should be used for the request based on the browser
	try{
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	}catch (e) {
		// Internet Explorer Browsers
		try{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e) {
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	//specifies the type of request
	http_request.open("GET", data_file, true);
	/*
	
			OOPSIE DOOPSY DOO Somethings wrong over here and it's not just my sleep deprivation caused by me doing this at 3am the day before we present
			(Now this one is a big 'ol TRICKY boi. It might just be my tiredness or redbull induced hallucinations but I can't find my *http_request* it's like STUPID 'ol Amazon didn't *send* it)
	
	*/
	
	
	/*
	
	*/
	//Sets up a function to be called when the readyState property changes
	http_request.onreadystatechange = function() {
	//4: request finished and response is ready
	//if statment contains JSON stuff we already went over
	if (http_request.readyState == 4  ) {
			
			var rawJSONData = http_request.responseText;
			
			/*Remember a JSON file is just text in a certain syntax so we must change
			it into compatible JavaScript arrays and objects to access the data with JavaScript efficiently. Therefore we use the built in JSON parse function*/
            var data = JSON.parse(rawJSONData);
			var aContainer = document.getElementById("PHPJSONExample");
			
            aContainer.innerHTML += "<h1>Booky Boys</h1>";
			var table = "<table id='table2' class='display' style='width:100%'><thead><tr><th>id</th><th>language</th><th>edition</th><th>author</th></tr></thead><tbody>";
			//using object's keys and array's indexes to get the information we want
			for(var i = 0; i < data.books.length; i++){
				table += "<tr><td>"+data.books[i].id+"</td><td>"+data.books[i].language+"</td><td>"+data.books[i].edition+"</td><td>"+data.books[i].author+"</td></tr>";
			}
			table += "</tbody></table>";
			aContainer.innerHTML = table  + "<a href='phpJSON.php' target='blank' class='dataFiles' >Data file</a>";
			$('#table2').DataTable();
	   }
	}
}

function loadServerData() {
	//web server url
	var data_file = "http://localhost/GIVE_'EM/getUserTable.php";
	//creates a new object for the request for info that will be sent to the web server
	var http_request = new XMLHttpRequest();
	//find which type of object should be used for the request based on the browser
	try{
		// Opera 8.0+, Firefox, Chrome, Safari
		http_request = new XMLHttpRequest();
	}catch (e) {
		// Internet Explorer Browsers
		try{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e) {
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	//specifies the type of request
	/*
	
			OOPSIE DOOPSY DOO Somethings wrong over here, TIME TO GIVE 'EM THE 'OL RAZMATAZ
			(Wait what does AJAX stand for again?... *Asynchronous* JavaScript And XML I wonder if the request is *Truly* Asynchronous)
	
	*/
	http_request.open("GET", data_file, false);
	
	/*
		Question with the ol' RAZZLE DAZZLE
		How does the boolean parameter in the open function change how the function works?
	*/
	//sends request (since we are only getting data we don't need any arguments)
	http_request.send();
	//Sets up a function to be called when the readyState property changes
	http_request.onreadystatechange = function() {
	//4: request finished and response is ready
	//if statment contains JSON stuff we already went over
	if (http_request.readyState == 4  ) {
			
			var rawJSONData = http_request.responseText;
			
			
			var aContainer = document.getElementById("serverDataExample");
			aContainer.innerHTML = rawJSONData  + "<a href='getUserTable.php' target='blank' class='dataFiles' >Data file</a>";
			$('#table3').DataTable();
            
	   }
	}
}

$(document).ready(function(){
	setInterval(loadServerData,5000);
});
/*The revolution is coming how will you prepare?*/