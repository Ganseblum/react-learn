import axios from "axios"
// import store from "../store.js"

//reduxThunk
// function getList () {
//   return (dispatch) => {
//     axios({
//       url: "http://jsonplaceholder.typicode.com/posts",
//       method: 'GET',
//     }).then(res => {
//       console.log(res.data)
//       dispatch({
//         type: 'change-list',
//         payload: res.data
//       })
//     })
//   }
// }

//reduxPromise
function getList () {
  return axios({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: 'GET',
  }).then(res => {
    return {
      type: 'change-list',
      payload: res.data
    }
  })
}

//async
// async function getList () {
//   var list = await axios({
//     url: "http://jsonplaceholder.typicode.com/posts",
//     method: 'GET',
//   }).then(res => {
//     return {
//       type: 'change-list',
//       payload: res.data
//     }
//   })

//   return list
// }



export default getList