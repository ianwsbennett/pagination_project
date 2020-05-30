/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


let list = document.getElementsByClassName('student-item');
let page = 9;
let min = 0;

const showPage = (list, page, min) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= min && i <= page){
       list[i].style.display = "block";
    } else {
       list[i].style.display = "none";
    }
  }
}

const appendPageLinks = (list) => {
   let totalPages = list.length/page + 1;
   let ul = document.createElement('ul');
   let div = document.createElement('div');
   div.className = 'pagination';
   let pageDiv = document.getElementsByClassName('page')[0];
   pageDiv.appendChild(div);
   div.appendChild(ul);

   for (let i = 1; i < totalPages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', "#");
      a.textContent = [i]
      ul.appendChild(li);
      li.appendChild(a);
      ul.firstElementChild.firstElementChild.className = 'active';
   }

   let a = document.querySelectorAll('a');

   for (let i = 0; i < a.length; i++ ) { 
    a[i].addEventListener('click', (e) => {
      e.preventDefault();
      for(let i = 0; i < a.length; i++){
         a[i].classList.remove('active');
      }
      a[i].className = 'active';
      pageNum = a[i].textContent;
      max = pageNum * page; 
      min = (pageNum * page) - page;
      showPage(list, max, min);
    });
  }
}

showPage(list, page, min);
appendPageLinks(list);

// Remember to delete the comments that came with this file, and replace them with your own code comments.