// Navbar - KS & BC - April 5 2022 
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }
//Scroll Back to Top Button - BC 
var mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ks april 14 

var slider_img = document.querySelector('.slider-img');
var images = [ 'S1_1.jpg', 'S2_2.jpg', 'S1_3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "Images/"+images[i]);
	
}

// ks april 17 slider 2 & 3 

var slider_img1 = document.querySelector('.static-img');
var images1 = [ 'static_elements.jpg', 'static_1.jpg'];
var k = 0;

function prev1(){
	if(k <= 0) k = images1.length;	
	k--;
	return setImg();			 
}

function next1(){
	if(k >= images1.length-1) k = -1;
	k++;
	return setImg();			 
}

function setImg(){
	return slider_img1.setAttribute('src', "Images/"+images1[k]);
	
}



// 2 ks

var slider_image2 = document.querySelector('.dynamic-img');
var img2 = [ 'dynamic_elements.jpg', 'dynamic_1.jpg'];
var l = 0;

function prev2(){
	if(l <= 0) l= img2.length;	
	l--;
	return setImg();			 
}

function next2(){
	if(l >= img2.length-1) l = -1;
	l++;
	return setImg();			 
}

function setImg(){
	return slider_image2.setAttribute('src', "Images/"+img2[l]);
	
}