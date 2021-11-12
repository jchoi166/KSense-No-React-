export const getUsers = async () => {
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')

     if (!response.ok) throw new Error ("Could not fetch user data!")

     const data = await response.json()

     return data
   }  
   catch (err) {
     console.log(err)
   }
}

export const getPosts = async (userId) => {
   try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

     if (!response.ok) throw new Error ("Could not fetch post data!")

      const data = await response.json()

      return data
   }
   catch(err) {
      console.log(err)
   }
}

