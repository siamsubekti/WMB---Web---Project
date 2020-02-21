import Api from '../../../../Api/Api'

export async function list(){
    return await Api.get(`/Alltable`)
    .then((res)=>res.data)
}


// export async function list() {
//     return await fetch ('http://10.10.12.62:8080/wmb/table')
//     .then((res)=> res.json());
// }

// export async function save(food){
//     let res = await fetch('http://localhost:8080/wmb/food',
//     {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body:JSON.stringify(food)
//     });
//     console.log("Service", res)
//     return res
// }