const today = new Date();

const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function Clock(){
  return <h1>THE TIME IS {time}</h1>
}


export default Clock