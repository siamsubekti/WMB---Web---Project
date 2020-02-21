import Api from '../../../../Api/Api'

export async function list(){
    // console.log('ini service')
    return await Api.get(`menu`)
    .then((res)=>res.data)
}

export async function save(params){
    return await Api.post(`menu`,params)
    .then((resp)=>resp.data)
}

// export async function post(user) {
//     const body = new FormData();
  
//     for (const [ key, value ] of Object.entries(user)) {
//       body.append(key, value);
//     }
  
//     const response = await fetch(
//         `http://localhost:8080/food`,
//         {
//           method: 'POST',
//           mode: 'no-cors',
//           body
//         }
//       );
  
//     return await response.json();
//   }
  

// export async function list() {
//     return await fetch ('http://localhost:8080/wmb/makanan')
//     .then((res)=> res.json());
// }