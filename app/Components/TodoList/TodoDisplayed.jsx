export default function TodoDisplayed({data}) {
  return (
    <main>
        <ul>
      
      {data.map((item,index)=>(

<li key={item.id}>{item.name}</li>

      ))}
      </ul>
    </main>
  );
}