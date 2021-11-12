import {elements} from "../base"

export const displayUser = (user) => {
   console.log('working')
   
   const markup = `
      <div class="user" data-id="${user.id}">
         <p>${user.name}</p>
      </div>
   `

   elements.userList.insertAdjacentHTML("beforeend", markup)
}

