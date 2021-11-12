import { elements } from "../base"
import { getPosts } from "../api"


const displayPost = (post) => {
   console.log('working')
   
   const markup = `
      <div class="post" data-id="${post.id}">
         <h2>${post.title}</h2>
         <p>${post.body}<p>
      </div>
   `
   
   elements.postList.insertAdjacentHTML("beforeend", markup)
}

export const displayAllPosts = async (userID) => {
   const postList = await getPosts(userID)
   elements.postList.innerHTML = ''
   postList.forEach(post => displayPost(post))
   console.log(`Post List for User ${userID}`)
   console.log(postList)
}