export const getUsers =async () => {
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await response.json()
     console.log(data)
   //   setUserList(data)
   } 
   
   catch (err) {
     console.log(err)
   }
}

export const getPosts = async (user) => {
   try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
      const data = await response.json()
      console.log(data)
      setPostList(data)
   }
   catch(err) {
      console.log(err)
   }
}