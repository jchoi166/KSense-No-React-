import * as API from "./api"
import { displayUser } from "./views/userView"
import { displayPost } from "./views/postView"
import { elements } from "./base"


const displayUsers = async () => {
   const userList = await API.getUsers()
   userList.forEach(user => displayUser(user))
   // console.log(userList)
}

const displayPosts = async (userID) => {
   const postList = await API.getPosts(userID)
   elements.postList.innerHTML = ''
   postList.forEach(post => displayPost(post))
   // console.log(postList)
}

elements.userList.addEventListener('click', event => {
   let user = event.target.closest(".user")
   if (user) {
      displayPosts(user.id)
   }
})



displayUsers()