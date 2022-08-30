
// /**@type {import('./__types/[id]').RequestHandler} */
// export async function get({ params }) {
//     // log all headers
    
//     const url = `https://api.tfl.gov.uk/line/${params.id}`
//     const req = await fetch(url);
//     let line_info;

//     if(req.ok){
//       line_info = await req.json();
//     }

//     console.log(line_info)

//     return {
//         status: 200,
//         body: {id: params}
//     }
// }