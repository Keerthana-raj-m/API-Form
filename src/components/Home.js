// enter code here

// import React, { useState } from "react";
// import { Wrapper } from "./vehiclesTableStyles";
// import { PostData } from "./postData";

// function VehiclesTable() {
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const submitForm = e => {
// e.preventDefault();

// PostData(username, password).then(result => {
//   console.log(result);
// });
// console.log("username", username);
// console.log("password", password);
// };
// return (

// <Wrapper>
//   <div className="search_box">
//     <form onSubmit={submitForm}>
//       <input
//         name="name"
//         type="text"
//         placeholder="username"
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="search"
//         onChange={e => setPassword(e.target.value)}
//       />
//       <input type="submit" value="login" />
//     </form>
//   </div>
// </Wrapper>
// );
// }

// export default VehiclesTable;



// export function PostData(userData) {
// let BaseUrl = "https://reqres.in//api/login";
// console.log("userData", userData);
// return new Promise((resolve, reject) => {
// fetch(BaseUrl, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   }
//   // body: JSON.stringify(userData)
// })
//   .then(response => response.json())
//   .then(responseJson => {
//     resolve(responseJson);
//   })
//   .catch(error => {
//     reject(error);
//   });
// });
