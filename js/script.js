/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


let list = document.getElementsByClassName('student-item');
const page = 9;

const showPage = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= 0 && i <= page){
       list[i].style.display = "block";
    } else {
       list[i].style.display = "none";
    }
  }
}

showPage(list, page);

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
      a.innerHTML = "<a href='#'>";
      console.log(a);
      a.textContent = [i];
      ul.appendChild(li);
      li.appendChild(a);
      ul.firstElementChild.firstElementChild.className = 'active';
   }
}

appendPageLinks(list);



/// Working adding a addeventlistener 
for(let i = 0; i < aloop.length; i++){
  let aloop = document.getElementsByTagName('a');

  a[i].addEventListener('clicked', (e) => {
    console.log('shit');
  });
}





// Remember to delete the comments that came with this file, and replace them with your own code comments.