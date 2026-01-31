import{promises as fs} from "fs"


const getData = async ()=>{

const data = await fs.readFile('data.json','utf8')
const response = JSON.parse(data)
return response


}



export async function PUT(request, content) { //content is the param promise
  const params = await content.params   //params.params
  const data= await getData()
  const id =Number(params.id)
const objToChange = data.find(item => item.id === id)
console.log(objToChange,'we are changing',id)


  const body = await request.json()
objToChange.name=body.name
const writeFile = await fs.writeFile('data.json',JSON.stringify(data,null,2))

  return Response.json(writeFile)
}


export async function DELETE(res,content){
    const params = await content.params;
    const id = Number(params.id);
    const data= await getData()

    const objectRemoved = data.filter(item => item.id !==id)
    const writeFile = fs.writeFile('data.json',JSON.stringify(objectRemoved,null,2))

return Response.json(writeFile)

}