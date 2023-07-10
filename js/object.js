let userProfile = [
	{id:10101,name:"Dhanush S",firstName:"Dhanush",lastName:"Sithananthan",mobile:"7358213126",eMail:"dhanush@gmail.com",experiance:"3",image:"./img/person-1.png",banner:"./img/person-1-bg.jpg",position:"frontend developer",hastag:"#frontend Developer / #Qc / #Designer / #fresher",userName:"dhan2023"},
	{id:10102,name:"Soniya V",firstName:"soniya",lastName:"vasu",mobile:"8637643719",eMail:"soniya@gmail.com",experiance:"2",image:"./img/person-3.jpg",banner:"./img/person-3-bg.jpg",position:"frontend developer",hastag:"#frontend Developer /#fresher",userName:"soni2023"},
	{id:10103,name:"Akash A",firstName:"Akash",lastName:"anbu",mobile:"8667370862",eMail:"akash@gmail.com",experiance:"4",image:"./img/person-2.jpg",banner:"./img/person-2-bg.jpg",position:"frontend developer",hastag:"#frontend Developer /#fresher",userName:"akas2023"},
	{id:10104,name:"Anu G",firstName:"anu",lastName:"sparw",mobile:"8124311701",eMail:"anu@gmail.com",experiance:"6",image:"./img/person-6.jpg",banner:"./img/person-6-bg.png",position:"frontend developer",hastag:"#frontend Developer / #Qc / #fresher",userName:"anug2023"},
	{id:10105,name:"Karthi R",firstName:"karthi",lastName:"kumar",mobile:"9751008258",eMail:"karthi@gmail.com",experiance:"5",image:"./img/person-4.jpg",banner:"./img/person-4-bg.jpg",position:"frontend developer",hastag:"#frontend Developer /#fresher",userName:"kart2023"},
	{id:10106,name:"Yogash R",firstName:"yogash",lastName:"raj",mobile:"9655306595",eMail:"yogash@gmail.com",experiance:"1",image:"./img/person-8.jpg",banner:"./img/person-8-bg.png",position:"frontend developer",hastag:"#frontend Developer / #Quality Control",userName:"yoga2023"},
	{id:10107,name:"Ragu P",firstName:"ragu",lastName:"parhi",mobile:"9095075260",eMail:"ragu@gmail.com",experiance:"6",image:"./img/person-5.jpg",banner:"./img/person-5-bg.jpg",position:"frontend developer",hastag:"#frontend Developer / #fresher",userName:"ragu2023"},
	{id:10108,name:"Hari K",firstName:"Hari",lastName:"kishor",mobile:"9500231059",eMail:"hari@gmail.com",experiance:"4",image:"./img/person-1.png",banner:"./img/person-1-bg.jpg",position:"frontend developer",hastag:"#frontend Developer / #Qc",userName:"hari2023"},
	{id:10109,name:"Elamugu K",firstName:"Elamugu",lastName:"kumar",mobile:"8667864991",eMail:"elamurugu@gmail.com",experiance:"2",image:"./img/person-7.jpg",banner:"./img/person-7-bg.jpg",position:"frontend developer",hastag:"#frontend Developer / #fresher",userName:"elam2023"}]

	let pageUrl = window.location.href;
	if(pageUrl.includes("login.html")){
	let getIssignout = localStorage.getItem("signIn");
	if(!getIssighout){
		window.location.replace("index.html");
		
	}} 
	function signOut(event){
		localStorage.clear();
		window.location.replace("login.html")};
	function gotohome(event){window.location.replace("index.html")};
	function profileView(event){window.location.replace("Profile.html")};
	function gotoecperiance(event){window.location.replace("experiance.html")};
	function gotoeducation(event){window.location.replace("education.html")};
	function goprofpageArrow(event){window.location.replace("Profile.html")};
	function gotohome(event){window.location.replace("index.html")
		// localStorage.remove("objectcreat")
	};

	let userObject = JSON.stringify(userProfile);
	localStorage.setItem("userProfile", userObject);
	let str = localStorage.getItem("userProfile");
	let parsedObject = JSON.parse(str);
	console.log(parsedObject);
		
	let localuser = parseInt(localStorage.getItem("userid"));
	let finduserid = parsedObject.find(function(user){
	return user.id == localuser;
	});
	
if (pageUrl.includes("index.html")) {
    if (finduserid) {
        let postBtn = document.getElementById("start_posting");
        postBtn.addEventListener("click", function (event) {
            event.preventDefault();
            // let qEle = document.getElementsByClassName("overlay");
            // qEle[0].style.display = "block";
            let psElements = document.getElementById("editintro");
            psElements.classList.add("visivle")
        });

        // var fileInput = document.getElementById('save_icon');
        // console.log(fileInput);
        // fileInput.addEventListener('change', function (event) {
            // event.preventDefault();
            // var file = event.target.files[0];
            // var reader = new FileReader();
            // reader.onload = function (event) {
                // event.preventDefault();
                // var imageSrc = event.target.result;
                // var imageElement = document.createElement('img');
                // imageElement.src = imageSrc;
                // imageElement.classList.add('uploaded-image');
                // var postPartContainer = document.getElementById('image-show');
                // postPartContainer.innerHTML = '';
                // postPartContainer.appendChild(imageElement);
            // };
            // reader.readAsDataURL(file);
			
			
			// let fileInput = document.getElementById('myFileInput');
// let postDescriptionTextarea = document.getElementById('nw-pst-des');

// Get selected file
// fileInput.addEventListener('change', function(event) {
  // let file = event.target.files[0]; 

  // FileReader object to read the file
  // let reader = new FileReader();

  // FileReader onload event
  // reader.onload = function(e) {
    // let imageSrc = e.target.result; // Get the image source data

    // Create an image element to display the selected image
    // let imageElement = document.createElement('img');
    // imageElement.src = imageSrc;
    // imageElement.classList.add('uploaded-image'); 

    
    // let postContainer = document.getElementById('img-shw');
    // postContainer.innerHTML = ''; // Clear any existing content
    // postContainer.appendChild(imageElement); // Append the image to the container
  // };

  // read file as a data URL
  // reader.readAsDataURL(file);
// });
        // });
    }

 
  let changename = document.getElementById("usrname").innerHTML = finduserid.name;
  let changehovername = document.getElementById("name1").innerHTML = finduserid.name;
  let bgimg = document.getElementById("dp").src = finduserid.banner;
  let profileimg = document.getElementById("log1").src = finduserid.image;
  let profileimg2 = document.getElementById("log2").src = finduserid.image;
  let hoverprofileimg = document.getElementById("log11").src = finduserid.image;
  let hoverprofileimg2 = document.getElementById("log111").src = finduserid.image;
  let createPostName = document.getElementById("createPostName").innerHTML = finduserid.name;
	
	
const objectcreat = JSON.parse(localStorage.getItem('loginuser'));
if(objectcreat){
	let changename = document.getElementById("usrname").innerHTML = objectcreat.firstName1;
	 let changehovername = document.getElementById("name1").innerHTML = objectcreat.firstName1;
	 let createPostName = document.getElementById("createPostName").innerHTML = objectcreat.firstName1;
}


}


if (pageUrl.includes("index.html")) {
    if (finduserid) {
		let userData = [
		{
			id:"saf5df4h5fgh45d4rf8e7h5f4g56h",
			userName: finduserid.name,
			position:finduserid.position,
		},
		{
			id:"kjfdlgjlfghgjh7656se79rt7h4fn",
			userName: "LinkedIn",
			position:"Promoted",
		}
	]
	let postArr = [
		{
			id: "46584789sadasdaf47",
			postText:"Here are some cool web development tricks you must try in your next project 🔥",
			postImg:"./img/5.jpg",
			postUserId:"saf5df4h5fgh45d4rf8e7h5f4g56h"
		},
		{
			id: "dlfkh58ghj7dd44gdfhy",
			postText:"Update your job preferences to let recruiters know what roles you're interested in.",
			postImg:"./img/6.jpg",
			postUserId:"kjfdlgjlfghgjh7656se79rt7h4fn"
		}
	]



	function postLoad(postObj){

		let postContainer = document.getElementById("post-container");
		postContainer.innerHTML = "";

		let setPost = postObj.map(function(item, indx){
			let findUser = userData.find(function(user){
				return user.id === item.postUserId;
			})
			return `
				<div class="posts">
					<div class="post-user-info2">
						<img src="./img/4.jpg" alt="fabevy" class="fabevy" style="width:50px;height:50px;">
						<div class="post-user-info">
						<h4>${findUser.userName}</h4>
						<h5>${findUser.position}</h5>
						</div>
					</div>
					<div class="post-info">
						<div class="post-txt">
							<p>${item.postText}</p>
						</div>
						<div class="post-img">
							<img src="${item.postImg}" alt="">
						</div>
						<div class="flex-container center_boxmain3">
					<div class="center_box">
						<div class="flex-item-3 flex-container logg"  style="justify-content: center; align-items:center;">
							<i class="fa fa-thumbs-o-up" aria-hidden="true" style="font-size:25px;"></i>
							<p class="d">Like</p>
						</div>
						<div class="flex-item-3 flex-container logg" style="justify-content: center; align-items:center;">
							<i class="fa fa-commenting-o" aria-hidden="true" style="font-size:25px;"></i>
							<p class="d">Comment</p>
						</div>
						<div class="flex-item-3 flex-container logg"style="justify-content: center; align-items:center;">
							<i class="fa fa-retweet" aria-hidden="true" style="font-size:25px;"></i>
							<p class="d">Repost</p>
						</div>
						<div class="flex-item-3 flex-container logg"style="justify-content: center; align-items:center;">
							<i class="fa fa-paper-plane" aria-hidden="true" style="font-size:20px;"></i>
							<p class="d">Send</p>
						</div>
					</div>
					<div class="center_box">
						<div class="flex-item-12 flex-container loggg" >
							<i class="fa fa-tumblr-square" aria-hidden="true"></i>
							<p class="d">Be the first to react</p>
						</div>
					</div>
				</div>
						<div class="post-actions">
							
						</div>
					</div>
				</div>
			`
		}).join("");

		postContainer.innerHTML = setPost;
	}
	
		window.load = postLoad(postArr);
	
	let postbtn = document.getElementById("postbtn");
	

	function addNewPost(event){
		event.preventDefault()
		let newPost = 
		{
			id: "fghdsjfdsffdg68dfd4gvd4gt98",
			postText:"“Yoga classes at Intel helped me keep my calm and focus, increasing my productivity at work. After a couple of years, I enrolled myself in a weekend teacher training course and I now share this amazing practice with others.”",
			postImg:"./img/7.jpg",
			postUserId:"saf5df4h5fgh45d4rf8e7h5f4g56h"
		}
		postArr.push(newPost);
		postLoad(postArr);
	}

	postbtn.addEventListener("click", addNewPost);
	 var saveBtn = document.getElementById('save_btn');
	 var editIntro = document.getElementById('editintro');
	 saveBtn.addEventListener("click",function(event){
		 event.preventDefault()
		 editIntro.classList.remove("visivle");
	 })
	}
}
	
if(pageUrl.includes("Profile.html")){
if(finduserid){
		let userimg = document.getElementById("img_icon").src = finduserid.image;
		let userimg2 = document.getElementById("log11").src = finduserid.image;
		let userbg = document.getElementById("img_bg").src = finduserid.banner;
		let username = document.getElementById("name").innerHTML = finduserid.firstName+" "+finduserid.lastName;
		let username2 = document.getElementById("name-b").innerHTML = finduserid.firstName;
		let contact = document.getElementById("con_info").innerHTML = " +91 "+finduserid.mobile;
		let position = document.querySelector(".work_knowlage").textContent = finduserid.position;
		let hastag = document.querySelector(".hastag").textContent = finduserid.hastag;
	}
	const objectcreat = JSON.parse(localStorage.getItem('loginuser'));
if(objectcreat){
	let username = document.getElementById("name").innerHTML = objectcreat.firstName1;
	 let username2 = document.getElementById("name-b").innerHTML= objectcreat.firstName1;
}
	
	
}	
	// let getidfromuser = parseInt(localStorage.getItem("userid"));
	// let finduser = userProfile.find(function(user){
	// return user.id == getidfromuser;
	// });
	// console.log(finduser)
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

	let fnameForm = document.getElementById("fname").value = finduserid.firstName;
	let snameForm = document.getElementById("sname").value = finduserid.lastName;
	let headnameForm = document.getElementById("headname").value = finduserid.hastag;
	let positionForm = document.getElementById("position").value = finduserid.position;

popClickAddExp.addEventListener("click", function(event){ popaddExp.classList.add("visivle")});
saveBtn3.addEventListener("click", function(event){ popaddExp.classList.remove("visivle") });
removeButton3.addEventListener("click", function(event){ popaddExp.classList.remove("visivle") });
plusbtn.addEventListener("click", function(event){ popSection2.classList.add("visivle") });
saveBtn2.addEventListener("click", function(event){ popSection2.classList.remove("visivle") });
removeButton2.addEventListener("click", function(event){ popSection2.classList.remove("visivle") });
pencilBtn.addEventListener("click", function(event){ popSection.classList.add("visivle")});
saveBtn.addEventListener("click", function(event){ popSection.classList.remove("visivle") });
removeButton.addEventListener("click", function(event){ popSection.classList.remove("visivle")});
let visible = false;
onoffbutton2.addEventListener("click",function(event){
	 onoffbutton2.classList.toggle("schal3")
	if(!visible) {
    onofftext2.innerHTML = 'OFF';
  } else {
    onofftext2.innerHTML = 'ON';
  }
	visible = !visible
});
let visible2 = false;
onoffbutton.addEventListener("click",function(event){ 
onoffbutton.classList.toggle("schal3")
	if(!visible2) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible2 = !visible2
	
	// localStorage.setItem("userProfile", JSON.stringify(newUserProfile));


// let myObject = JSON.parse(localStorage.getItem('userProfile'));
// if(myObject){
 // console.log(myObject);
// document.getElementById("name").innerHTML=myObject.firstName;
// document.getElementById("sname").innerHTML=myObject.lastName;
// document.getElementById("headname").innerHTML=myObject.hastag;
// document.getElementById("position").innerHTML=myObject.position;

});
// <----------  form creation  --------------->
}

}
if(pageUrl.includes("experiance.html")){
if (finduserid) {
let pencilExp = document.getElementById("penicon");
let pencilExp2 = document.getElementById("penicon2");
let pencilExp3 = document.getElementById("penicon3");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){ popExp.classList.add("visivle")});
pencilExp2.addEventListener("click",function(event){ popExp.classList.add("visivle") });
pencilExp3.addEventListener("click",function(event){ popExp.classList.add("visivle")});
removexicon.addEventListener("click",function(event){ popExp.classList.remove("visivle") });
savebtn.addEventListener("click",function(event){ popExp.classList.remove("visivle") });
onoffbutton.addEventListener("click",function(event){ onoffbutton.classList.toggle("schal3") });
let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});
}}
if(pageUrl.includes("experiance.html")){
if (finduserid) {
	let userimg2 = document.getElementById("log11").src = finduserid.image;
	let username2 = document.getElementById("name-b").innerHTML = finduserid.firstName;
	let head2name = document.getElementById("work_knowlage_name").innerHTML = finduserid.firstName+" "+finduserid.lastName;
	let head2img = document.getElementById("exp_img").src = finduserid.image;
}
const objectcreat = JSON.parse(localStorage.getItem('loginuser'));
if(objectcreat){
	let name = document.getElementById("work_knowlage_name");
let knowlage = document.querySelector(".work_knowlage");
	
	name.innerHTML = objectcreat.firstName1+" "+objectcreat.lastName1;
		
	knowlage.innerHTML = objectcreat.position1;	
}
}
//education section
if(pageUrl.includes("education.html")){
if (finduserid) {
let pencilExp = document.getElementById("penicon");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){ popExp.classList.add("visivle")});
removexicon.addEventListener("click",function(event){ popExp.classList.remove("visivle")});
savebtn.addEventListener("click",function(event){ popExp.classList.remove("visivle")});
onoffbutton.addEventListener("click",function(event){ onoffbutton.classList.toggle("schal3")});
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
}}
if(pageUrl.includes("education.html")){
if (finduserid) {
	let userimg2 = document.getElementById("log11").src = finduserid.image;
	let username2 = document.getElementById("name-b").innerHTML = finduserid.firstName;
	let head2name = document.getElementById("work_knowlage_name").innerHTML = finduserid.firstName+" "+finduserid.lastName;
	let head2img = document.getElementById("exp_img").src = finduserid.image;
}
const objectcreat = JSON.parse(localStorage.getItem('loginuser'));
if(objectcreat){
	let name = document.getElementById("work_knowlage_name");
let knowlage = document.querySelector(".work_knowlage");
	
	name.innerHTML = objectcreat.firstName1+" "+objectcreat.lastName1;
		
	knowlage.innerHTML = objectcreat.position1;	
}

}
// let locid = parseInt(localStorage.getItem("userid"));
// localStorage.setItem('userProfile', JSON.stringify(userNewObject));
// });

if(pageUrl.includes("Profile.html")){
if (finduserid) {
let formEle = document.getElementById("editintro");
let submitbtn = document.getElementById("save_btn");
let name = document.getElementById("name");
let hastag = document.querySelector(".hastag");
let knowlage = document.querySelector(".work_knowlage");
let Name1 = document.getElementById("headname");

formEle.addEventListener("submit", function(event) {
	event.preventDefault();
let firstName1 = document.getElementById("fname").value;
// console.log(firstName1)
if(firstName1.trim() === ""){
	document.getElementById("fname").value = finduserid.firstName;
}
let lastName1 = document.getElementById("sname").value;
let headName1 = document.getElementById("headname").value;
let position1 = document.getElementById("position").value;

let createLocal = {
	id:parseInt(localStorage.getItem("userid")),
	firstName1,
	lastName1,
	headName1,
	position1
}
localStorage.setItem("loginuser",JSON.stringify(createLocal))
});
 const objectcreat = JSON.parse(localStorage.getItem('loginuser'));
 
 console.log(objectcreat)
let formFirstname = document.getElementById("fname").value = objectcreat.firstName1;
// let defalt = finduserid.firstName;
if(formFirstname.trim() === ""){
	document.getElementById("fname").value = finduserid.firstName;
}
else{
	document.getElementById("fname").value = objectcreat.firstName1;
}
document.getElementById("sname").value = objectcreat.lastName1;
document.getElementById("headname").value = objectcreat.headName1;
document.getElementById("position").value = objectcreat.position1;

if(objectcreat){
	name.innerHTML = objectcreat.firstName1+" "+objectcreat.lastName1;
	hastag.innerHTML = objectcreat.headName1;	
	knowlage.innerHTML = objectcreat.position1;	
}


}
}