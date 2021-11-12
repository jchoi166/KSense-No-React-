import * as API from "./api"
import { displayAllUsers }from "./views/userView"
import { displayAllPosts }from "./views/postView"
import { elements } from "./base"


const removeActiveClass = () => {
   let allUsers = elements.userList.children
   for (let users of allUsers) {
      users.classList.remove('activeButton')
   }
}

elements.userList.addEventListener('click', event => {
   let user = event.target.closest(".user")
   if (user) {
      removeActiveClass()
      displayAllPosts(user.dataset.id)
      user.classList.add('activeButton')
   }
})



displayAllUsers()