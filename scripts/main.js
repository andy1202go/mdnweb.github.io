let myHeading = document.querySelector('h1');
myHeading.textContent='Hello World!';

let img = document.querySelector('img');
img.onclick = function(){
	let src = img.getAttribute('src');
	if(src === 'images/test1.png'){
		img.setAttribute('src','images/th.jpg');
	}else{
		img.setAttribute('src','images/test1.png');
	}
}
let myButton = document.querySelector('button');
myButton.onclick = function() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
	if(myName) {
		  myHeading.textContent = 'Hello World!' + myName;
	}

}