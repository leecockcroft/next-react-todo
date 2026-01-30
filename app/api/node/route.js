import{promises as fs} from "fs"


const getData = async ()=>{

const data = await fs.readFile('data.json','utf8')
const response = JSON.parse(data)
return response


}

export async function GET(){

const data = await getData()
const response = Response.json(data)
return response


}


export async function POST(response){
    const data = await response.json() 
    console.log(data)
return Response.json(data)


}