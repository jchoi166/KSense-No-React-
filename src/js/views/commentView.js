import { getComments } from "../api"

const displayComment = (comment) => {
   const post = document.querySelector(".post")
   
   const markup = `
      <div class=".comment" data-id="${comment.id}">
         <h2>${comment.email}</h2>
         <p>${comment.body}<p>
      </div>
   `
   
   post.insertAdjacentHTML("beforeend", markup)
}

export const displayAllComments = async (postId) => {
   const commentList = await getComments(postId)
   // console.log(commentList)
   commentList.forEach(comment => displayComment(comment))
   // console.log(`Post List for User ${userID}`)
   // console.log(postList)
}