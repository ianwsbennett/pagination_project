/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 

   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// This project can be completed with just two global variables
// Create a variable to store the student list item elements in the student list.
      // Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
// Create a variable to store the number of items to show on each “page”, which for this project, is 10.



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

let list = document.getElementsByClassName('student-item');
const page = 9;

const showPage = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= list[0] && list[i] <= list[page]){
       list[i].style.display = "block";
       console.log('test');
    } else {
       list[i].style.display = "none";
    }
  }
}

showPage(list, page);

// const showPage = (list, page) => {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] >= list[0] && list[i] <= list[page]){
//       list[i].style.display = "block";
//     } else {
//       list[i].style.display = "none";
//     }
//   }
//   return list 
// }




// /*** 
//    Create the `appendPageLinks function` to generate, append, and add 
//    functionality to the pagination buttons.
// ***/


// const appendPageLinks = (list) => {
//    let pageButtons = list/page;
//    const ul = document.createElement('ul');
//    const div = document.createElement('div');
//    div.className = 'pagination';
//    const pageDiv = document.querySelector('.page');
//    pageDiv.appendChild(div);
//    div.appendChild(ul);

//    for (let i = 0; i < page.length; i++) {
//       const li = document.createElement('li');
//       const a = document.createElement('a');
//       ul.appendChild(li);
//       ul.appendChild(a);
//    }
   
//    a.addEventListener('clicked', (e) => {
//       showPage();
//    });
// }






// Remember to delete the comments that came with this file, and replace them with your own code comments.