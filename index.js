//Trenton Lyke node.js Ex2 4/8/2019 this exercise test my proficiency with ther faker and fs modules 


//requires express for creating server
var express = require('express');


//requires fs because it was originally used to read html files to be used later
var fs = require('fs');

var faker = require('faker');

console.log("hi")

//creates express object 
var app = express();

//creates router object
var router = express.Router();

//creates path for html files
var path = __dirname + '/views/';



//user the router at the root of the directory
app.use("/", router)

//static directories for html,image, and css files
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/images'));
app.use(express.static(__dirname+'/JS'));

//requires ejs to be used in the rendering of html files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

console.log("listening at port 3000")
//creates fake data
var data = createFakeData();
   
//writes data in file
fs.writeFile('data.txt', data, function (err) {
  if (err) {
	throw err;
	console.log(err);
  }
  else{
  console.log('file written');
  }
}); 



//get the page2.html file when the user wants to access the root directory and generates random place holders and a random avatar
app.get('/', function(req, res){

	var entry = {fName : "Billy", lName : "Smith", city : "Aroura",state: "Illinois", zipCode : "60506", jobTitle: "Cool office guy", email : "apple@imsa.edu", phoneNumber : "758-908-9855", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vigobronx/128.jpg"}
	res.render("page2", {data: entry})
	
}).listen(3000)
//get the page2.html file when the user submits the form and generates random values and a random avatar image
router.post('/generate', function(req, res){

	var entry = {fName : faker.name.firstName(), lName :faker.name.lastName(), city : faker.address.city(),state: faker.address.state(), zipCode : faker.address.zipCode(), jobTitle: faker.name.jobTitle(), email : faker.internet.email(), phoneNumber : faker.phone.phoneNumber(), avatar: faker.image.avatar()}
	res.render("page2", {data: entry})
	
})


//creates random data using faker module
function createFakeData(){
	var data = "";
	for(var i = 0; i < 1000; i++){
		data += faker.name.firstName() + "\t";
		data += faker.name.lastName() + "\t";
		data += faker.address.city() + "\t";
		data += faker.address.state() + "\t";
		data += faker.address.zipCode() + "\t";
		data += faker.name.jobTitle() + "\t";
		data += faker.internet.email() + "\t";
		data += faker.phone.phoneNumber() + "\t";
		data += faker.image.avatar() + "\n";
	}
	return data;
}

/*
1. What is a fs module? What it is used for in nodejs?

The Node.js file system module allows you to work with the file system on your computer.

2. Write a line of code to open a file and print a message, “file is open successfully”.

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err){
	throw err
  }
  else{
	console.log('file is open successfully');
  }
});

3. Write a line of code that will tell you the type of a file that you are processing. 
var mime = require('mime-types')
mime.lookup(file)


4. Name at least 4 different methods for the fs module.
fs.appendFile()
fs.open()
fs.writeFile()
fs.unlink()


5. Create four diff variables to store faker company name, state abbreviation, password and street 
      address.
var companyName = faker.company.companyName();
var stateAbbreviation = faker.address.stateAbbr();
var password = faker.internet.password();
var streetAddress = faker.address.streetAddress();	  

*/