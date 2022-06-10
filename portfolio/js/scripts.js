const nav = document.querySelector(".nav");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-nav-icon");



//Navigation
hamburgerIcon.addEventListener("click",openNav);
closeIcon.addEventListener("click",closeNav);

function openNav(){
	
	nav.classList.toggle("show-list");
}

function closeNav(){
	
	nav.classList.remove("show-list");
}





//PROJECT SECTION
//scroll project images
const arrowLeft = document.querySelectorAll(".arrow-left");
const arrowRight = document.querySelectorAll(".arrow-right");
const projectImage= document.querySelectorAll(".project-image");
var imageCounter = [1,1,1];




for(var r = 0; r < arrowRight.length; r++){
		arrowRight[r].addEventListener("click",((j) => {
			
			return function() {
				imageCounter[j]++;
				if(imageCounter[j] > 3){
					imageCounter[j] = 3;
					
				 }
          		projectImage[j].src = "images/projects/project1/project-1-image-" +imageCounter[j]+ ".jpg";
	
				
        	}
		})(r)
		)
	}



for(var l = 0; l < arrowLeft.length; l++){
		arrowLeft[l].addEventListener("click",((k) => {
			return function() {
				imageCounter[k]--;
				if(imageCounter[k] <  1){
					imageCounter[k] = 1;
				 }
          		projectImage[k].src = "images/projects/project1/project-1-image-" +imageCounter[k]+ ".jpg";
        	}
		})(l)
		)
	}




//collapsible more about

const projectAboutBtn = document.querySelectorAll(".project-about-btn");
const  moreAbout = document.querySelector(".project-more-about");

var i;

for (i = 0; i < projectAboutBtn.length; i++) {
  projectAboutBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
