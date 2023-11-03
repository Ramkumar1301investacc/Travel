import { Component } from '@angular/core';

@Component({
  selector: 'app-travellers-age',
  templateUrl: './travellers-age.component.html',
  styleUrls: ['./travellers-age.component.css']
})
export class TravellersAgeComponent {

  currentValue: number = 1;
  toggleClass(e: any, className: string) {
    const hasClass = e.target.classList.contains(className);
    this.currentValue = e.target.value;
    if (hasClass) {
      e.target.classList.remove("active")
    }
    else {
      e.target.classList.add("active");

      let allSibling = e.target.parentElement.children;

      let allSiblingArray = Array.from(allSibling);

      allSiblingArray.map((sibling: any) => {
        if (sibling.value != this.currentValue) {
          sibling.classList.remove("active")
        }
      })
    }



    // let getAllLists = document.getElementsByTagName('li');
    // let getAllListsArray = Array.from(getAllLists)
    // console.log(getAllListsArray)

    // getAllListsArray.map((list) => {
    //   list.addEventListener('click', () => {

    //   })
    // })
  }

  statusValue = false;

  
 


}
