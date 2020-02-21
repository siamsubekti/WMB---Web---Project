
export async function list() {
    return await fetch ('http://localhost:8080/wmb/minuman')
    .then((res)=> res.json());
}