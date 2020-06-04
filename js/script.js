/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//Global variables 
let list = document.getElementsByClassName('student-item');
let page = 9; //  !IMPORTANT index value - needs to be one less than target #
let min = 0;

// Function to show and hide elements, based on list length 
const showPage = (list, page, min) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= min && i <= page){
       list[i].style.display = "block";
    } else {
       list[i].style.display = "none";
    }
  }
}

// Function to create pagination links, based on list length 
const appendPageLinks = (list) => {
   let totalPages = Math.ceil(list.length/(page-1)); // makes sure link text starts with 1 
   let ul = document.createElement('ul');
   let div = document.createElement('div');
   div.className = 'pagination';
   let pageDiv = document.getElementsByClassName('page')[0];
   pageDiv.appendChild(div);
   div.appendChild(ul);

   // For loop to create links 
   for (let i = 1; i < totalPages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', "#");
      a.textContent = [i];
      ul.appendChild(li);
      li.appendChild(a);
      ul.firstElementChild.firstElementChild.className = 'active'; // sets first link to active 
   }

   let a = document.querySelectorAll('a'); // stores all links, after being created, into an array 

   for (let i = 0; i < a.length; i++ ) { 
      a[i].addEventListener('click', (e) => {
         e.preventDefault(); 
         for(let i = 0; i < a.length; i++){
            a[i].classList.remove('active');
         };
         a[i].className = 'active';
         text = parseInt(a[i].textContent);
         // if 1 page is selected it sets default values 
         if (text === 1){
            min = 0;
            max = page;
         } else {
            min = ((text * page) - (page) + 1);
            max = (text * page) + 1;
         };
         showPage(list, max, min);
      });
  }
}

// Initial call of functions on first page load 
showPage(list, page, min);
appendPageLinks(list);

