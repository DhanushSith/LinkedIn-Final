let userProfile = [
	{
		id:10101,
		name:"Dhanush S",
		firstName:"Dhanush",
		lastName:"Sithananthan",
		mobile:"7358213126",
		eMail:"dhanush@gmail.com",
		experiance:"3",
		image:"./img/person-1.png",
		banner:"./img/person-1-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc / #Designer / #fresher",
		userName:"dhan2023"
		
	},
	{	
		id:10102,
		name:"Soniya V",
		firstName:"soniya",
		lastName:"vasu",
		mobile:"8637643719",
		eMail:"soniya@gmail.com",
		experiance:"2",
		image:"./img/person-3.jpg",
		banner:"./img/person-3-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"soni2023"
	},
	{
		id:10103,
		name:"Akash A",
		firstName:"Akash",
		lastName:"anbu",
		mobile:"8667370862",
		eMail:"akash@gmail.com",
		experiance:"4",
		image:"./img/person-2.jpg",
		banner:"./img/person-2-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"akas2023"
	},
	{
		id:10104,
		name:"Anu G",
		firstName:"anu",
		lastName:"sparw",
		mobile:"8124311701",
		eMail:"anu@gmail.com",
		experiance:"6",
		image:"./img/person-6.jpg",
		banner:"./img/person-6-bg.png",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc / #fresher",
		userName:"anug2023"
	},
	{
		id:10105,
		name:"Karthi R",
		firstName:"karthi",
		lastName:"kumar",
		mobile:"9751008258",
		eMail:"karthi@gmail.com",
		experiance:"5",
		image:"./img/person-4.jpg",
		banner:"./img/person-4-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"kart2023"
	},
	{
		id:10106,
		name:"Yogash R",
		firstName:"yogash",
		lastName:"raj",
		mobile:"9655306595",
		eMail:"yogash@gmail.com",
		experiance:"1",
		image:"./img/person-8.jpg",
		banner:"./img/person-8-bg.png",
		position:"frontend developer",
		hastag:"#frontend Developer / #Quality Control",
		userName:"yoga2023"
	},
	{
		id:10107,
		name:"Ragu P",
		firstName:"ragu",
		lastName:"parhi",
		mobile:"9095075260",
		eMail:"ragu@gmail.com",
		experiance:"6",
		image:"./img/person-5.jpg",
		banner:"./img/person-5-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #fresher",
		userName:"ragu2023"
	},
	{
		id:10108,
		name:"Hari K",
		firstName:"Hari",
		lastName:"kishor",
		mobile:"9500231059",
		eMail:"hari@gmail.com",
		experiance:"4",
		image:"./img/person-1.png",
		banner:"./img/person-1-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc",
		userName:"hari2023"
	},
	{
		id:10109,
		name:"Elamugu K",
		firstName:"Elamugu",
		lastName:"kumar",
		mobile:"8667864991",
		eMail:"elamurugu@gmail.com",
		experiance:"2",
		image:"./img/person-7.jpg",
		banner:"./img/person-7-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #fresher",
		userName:"elam2023"
	}]
	
		let pageUrl = window.location.href;
if(pageUrl.includes("login.html")){
	let getIssignout = localStorage.getItem("signIn");
	if(!getIssighout){
		window.location.replace("index.html");
	}

} 
	
	
	//localStorage set userdetails and find userid 
	
	let userObject = JSON.stringify(userProfile);

	// save to localStorage
	localStorage.setItem("userProfile", userObject);

	// get the JSON string from localStorage
	let str = localStorage.getItem("userProfile");
	// console.log(str);
	
	// convert JSON string to valid object
	let parsedObject = JSON.parse(str);
	console.log(parsedObject);
	

let localuser = parseInt(localStorage.getItem("userid"));

// console.log(localuser);

let finduserid = parsedObject.find(function(user){
	return user.id == localuser;
	
});
	console.log(finduserid)
	
if(pageUrl.includes("Profile.html")){
	// console.log(pageUrl)
if(finduserid){
		let userimg = document.getElementById("img_icon");
		userimg.src = finduserid.image;
		let userimg2 = document.getElementById("log11");
		userimg2.src = finduserid.image;
		let userbg = document.getElementById("img_bg");
		userbg.src = finduserid.banner;
		let username = document.getElementById("name");
		username.innerHTML = finduserid.firstName+" "+finduserid.lastName;
		let username2 = document.getElementById("name-b");
		username2.innerHTML = finduserid.firstName;
		let contact = document.getElementById("con_info");
		contact.innerHTML = " +91 "+finduserid.mobile;
		let position = document.querySelector(".work_knowlage");
		position.textContent = finduserid.position;
		let hastag = document.querySelector(".hastag");
		hastag.textContent = finduserid.hastag;

	}

}
	

function signOut(event){
	event.preventDefault();
	localStorage.removeItem("signIn");
	window.location.replace("login.html");
}


function gotohome(event){
	event.preventDefault();
	localStorage.removeItem("signIn");
	window.location.replace("index.html");
}

function profileView(event){
	event.preventDefault();
	localStorage.removeItem("index.html");
	window.location.replace("Profile.html")
}

function gotoecperiance(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("experiance.html");
}

function gotoeducation(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("education.html");
}

function goprofpageArrow(event){
	event.preventDefault();
	localStorage.removeItem("experiance.html");
	window.location.replace("Profile.html")
}

function gotohome(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("index.html")
}


// let profileimg = document.getElementById("img_icon");

// profileimg.src = "./img/person-8.jpg";

// console.log(localStorage.getItem("userid"));

let getidfromuser = parseInt(localStorage.getItem("userid"));

// console.log(getidfromuser);

let finduser = userProfile.find(function(user){
	return user.id == getidfromuser;
	// console.log(finduser)
});


if(pageUrl.includes("index.html")){
if (finduserid) {
  let changename = document.getElementById("usrname");
  changename.innerHTML = finduserid.name;
  let changehovername = document.getElementById("name1");
  changehovername.innerHTML = finduserid.name;
  let bgimg = document.getElementById("dp");
  bgimg.src = finduserid.banner;
  let profileimg = document.getElementById("log1");
  profileimg.src = finduserid.image;
  let profileimg2 = document.getElementById("log2");
  profileimg2.src = finduserid.image;
  let hoverprofileimg = document.getElementById("log11");
  hoverprofileimg.src = finduserid.image;
}
}



// pencil button click 
if(pageUrl.includes("Profile.html")){
if(finduserid){
let pencilBtn = document.getElementById("pencil_btn");
let popSection = document.getElementById("editintro");
let popSection2 = document.getElementById("editintro2");
let popaddExp = document.getElementById("editintro3");
let popClickAddExp = document.getElementById("opo_add_exp");
let saveBtn = document.getElementById("save_btn");
let saveBtn2 = document.getElementById("save_btn2");
let saveBtn3 = document.getElementById("save_btn3");
let removeButton = document.getElementById("removeBtn");
let removeButton2 = document.getElementById("removeBtn2");
let removeButton3 = document.getElementById("removeBtn3");
let blurdiv = document.getElementById("blurDiv");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onoffbutton2 = document.getElementById("schal4");
let onofftext = document.getElementById("schal_on_off");
let onofftext2 = document.getElementById("schal_on_off2");
let plusbtn = document.getElementById("plus");
let plusExpPlus = document.getElementById("exp_plus");
let plusExpHead = document.getElementById("pop_Exp_plus");
let formEle = document.getElementById("editintro");

let fnameForm = document.getElementById("fname");
fnameForm.value = localStorage.setItem("finduserid",firstName);
console.log(fnameForm);

let snameForm = document.getElementById("sname");
snameForm.value = finduserid.lastName;
console.log(snameForm);

let headnameForm = document.getElementById("headname");
headnameForm.value = finduserid.hastag;
console.log(headnameForm);

let positionForm = document.getElementById("position");
positionForm.value = finduserid.position;
console.log(positionForm);

formEle.addEventListener("submit", function(finduser) {
  event.preventDefault();

  let firstName1 = document.getElementById("fname").value;
  let lastName1 = document.getElementById("sname").value;
  let headName1 = document.getElementById("headname").value;
  let position1 = document.getElementById("position").value;
  
  console.log(firstName1)
  
 // let getuserProfile = localStorage.getItem('userProfile');
// let userNewObject = JSON.parse(getuserProfile);
console.log(finduser);

let locid = parseInt(localStorage.getItem("userid"));
console.log(locid);

// Update the value of firstName
// userNewObject[0].firstName = firstName1;

// Store the updated userNewObject back in localStorage
localStorage.setItem('userProfile', JSON.stringify(userNewObject));
  
  
  // let newObjForValue = {
	// id:parseInt(localStorage.getItem("userid")),
	// firstName:firstName1,
	// lastName:lastName1,
	// headName:headName1,
	// position:position1
// };

  // let userObjectTwo = JSON.stringify(newObjForValue);
  // localStorage.setItem('newObjForValue', userObjectTwo);
  // let getuserProfile = localStorage.getItem('newObjForValue');
  // let userNewObject = JSON.parse(getuserProfile);
	// console.log(userNewObject);

// let getold = localStorage.getItem("userProfile")

// getold = userNewObject;

	// let username = document.getElementById("name");
	// username.innerHTML = getold.firstName+" "+getold.lastName;
	// localStorage.setItem("userProfile",userObject)
	// let hastag = document.querySelector(".hastag");
	// hastag.textContent = getold.headName;
	// let position = document.querySelector(".work_knowlage");
	// position.textContent = getold.position;
	// console.log(username);


//finduserid.firstName+" "+finduserid.lastName = userNewObject.firstName+" "+userNewObject.lastName;
  // let fnameForm2 = document.getElementById("fname").value;
// fnameForm2 = localStorage("userNewObject",firstName);
// console.log(fnameForm2);
  
  
});


// plusExpPlus.addEventListener("click", function(event){
	// plusExpHead.classList.toggle("visivle");
// })

popClickAddExp.addEventListener("click", function(event){
	popaddExp.classList.add("visivle");
})

saveBtn3.addEventListener("click", function(event){
	popaddExp.classList.remove("visivle");
})
removeButton3.addEventListener("click", function(event){
	popaddExp.classList.remove("visivle");
})

plusbtn.addEventListener("click", function(event){
	popSection2.classList.add("visivle");
})

saveBtn2.addEventListener("click", function(event){
	popSection2.classList.remove("visivle");
})

removeButton2.addEventListener("click", function(event){
	popSection2.classList.remove("visivle");
})

pencilBtn.addEventListener("click", function(event){
	popSection.classList.add("visivle");
})

saveBtn.addEventListener("click", function(event){
	popSection.classList.remove("visivle");
})

removeButton.addEventListener("click", function(event){
	popSection.classList.remove("visivle");
})

onoffbutton2.addEventListener("click",function(event){
	onoffbutton2.classList.toggle("schal3");
})

let visible = false;
onoffbutton2.addEventListener("click",function(event){
	if(!visible) {
    onofftext2.innerHTML = 'OFF';
  } else {
    onofftext2.innerHTML = 'ON';
  }
	visible = !visible
});

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

let visible2 = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible2) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible2 = !visible2
});


// <----------  form creation  --------------->

// let getFormData = {};

// let a = document.getElementById("fname");
// console.log(a.value);
}
}

if(pageUrl.includes("experiance.html")){
if (finduser) {
let pencilExp = document.getElementById("penicon");
let pencilExp2 = document.getElementById("penicon2");
let pencilExp3 = document.getElementById("penicon3");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

pencilExp2.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

pencilExp3.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

removexicon.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

savebtn.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});

}
}


if(pageUrl.includes("experiance.html")){
if (finduserid) {
	let userimg2 = document.getElementById("log11");
	userimg2.src = finduserid.image;
	let username2 = document.getElementById("name-b");
	username2.innerHTML = finduserid.firstName;
	let head2name = document.getElementById("work_knowlage_name");
	head2name.innerHTML = finduserid.firstName+" "+finduser.lastName;
	let head2img = document.getElementById("exp_img");
	head2img.src = finduserid.image;
}
}


//education section



if(pageUrl.includes("education.html")){
if (finduser) {
let pencilExp = document.getElementById("penicon");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

removexicon.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

savebtn.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

//on off text

let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});

}
}

if(pageUrl.includes("education.html")){
if (finduser) {
	let userimg2 = document.getElementById("log11");
	userimg2.src = finduserid.image;
	let username2 = document.getElementById("name-b");
	username2.innerHTML = finduserid.firstName;
	let head2name = document.getElementById("work_knowlage_name");
	head2name.innerHTML = finduserid.firstName+" "+finduserid.lastName;
	let head2img = document.getElementById("exp_img");
	head2img.src = finduserid.image;
}
}
