import { elements } from "../base"
import { getUsers } from "../api"

const displayUser = (user) => {
   console.log('working')
   
   const markup = `
      <div class="user" data-id="${user.id}">
         <p>${user.name}</p>
      </div>
   `

   elements.userList.insertAdjacentHTML("beforeend", markup)
}

export const displayAllUsers = async () => {
   const userList = await getUsers()
   userList.forEach(user => displayUser(user))
   console.log("User List")
   console.log(userList)
}