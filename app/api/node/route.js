import{promises as fs} from "fs"


const getData = async ()=>{

const data = await fs.readFile('data.json','utf8')
const response = JSON.parse(data)
return response


}

export async function GET(){

const data = await getData()
const response = Response.json(data)
console.log(response)
return response


}


export async function POST(response){
    const data = await response.json() 
    console.log(data)

    const dataFile = await getData()
    dataFile.push(data)
    const file = fs.writeFile('data.json',JSON.stringify(dataFile,null,2))
    return Response.json(data)


}