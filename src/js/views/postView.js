import {elements} from "../base"


export const displayPost = (post) => {
   console.log('working')
   
   const markup = `
      <div class="post" data-id="${post.id}">
         <h2>${post.title}</h2>
         <p>${post.body}<p>
      </div>
   `
   
   elements.postList.insertAdjacentHTML("beforeend", markup)
}