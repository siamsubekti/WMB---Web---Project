import Api from '../../../../Api/Api'

export async function list(){
    return await Api.get(`/order`)
    .then((res)=>res.data)
}

export async function save(params){
    return await Api.post(`/order`,params)
    .then((resp)=>resp.data)
}

export async function update(params){
    console.log('serviceeeee', params)
    return await Api.patch(`/order`,params)
    .then((resp)=>resp.data)
}



// export async function list() {
//     return await fetch('')
//     .then((res)=> res.json());
// }

// export async function  get(id) {
//     return await fetch ('')
//     .then((res) => res.json());
// }

// export async function save(user , method = 'POST') {
//     const body = new FomData();

//     for (const [ key, value ] of Object.entries(user)) {
//         body.append(key, value);
//     }

//     console.log('before-request:', user, ', method:', method);
//     return await fetch('',
//     {
//         method,
//         body
//     }
//     ).then((res)=> {
//         return res.json();
//     })
// }