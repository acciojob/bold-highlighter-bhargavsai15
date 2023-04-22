const link = document.querySelector('p>a');

link.addEventListener('mouseover',highlight);
link.addEventListener('mouseout', return_normal)

// link.addEventListener('mouseout', return_normal);
const boldElements = document.getElementsByTagName('strong');
console.log(boldElements);
function highlight(event) {
  //Write your code here
  for (let i = 0; i < boldElements.length; i++){
    boldElements[i].style.color = 'rgb(0, 128, 0)';
  }
}


function return_normal() {
  //Write your code here
  for (let i = 0; i < boldElements.length; i++){
    boldElements[i].style.color = 'black';
  }
}
