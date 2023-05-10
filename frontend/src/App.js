import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [note , setNote] = useState([])
  const [title , setTitle] = useState()
  const [des , setDes] = useState()

  useEffect(() => {
    getnotes()
  })

  const getnotes = () => {
    axios.get("http://localhost:5000/getnote").then((res) => {
        setNote(res.data);
      });   
  }

  const insertnote = () => {
    axios.post("http://localhost:5000/putnote", {
        title : title,
        des : des
      })
      .then((res) => {
        
      })
      document.getElementById('tit').value=""
      document.getElementById('des').value=""
      getnotes()
  }

  const deletenote = (del) => {
    axios.delete('http://localhost:5000/deletenote/' + del )
    .then((res) => {
        if (res.data) alert('Deleted Scccessfully')
        else alert('Some Error has occured')
      })
      setTitle()
      setDes()
      getnotes()
  }



  return (
    <div className='bg-slate-900 min-h-screen max-w-screen p-20 flex items-center'>
      <div className='min-h-[800px] h-full w-3/4 rounded-lg  shadow-md  bg-slate-800 grid grid-cols-3 gap-4 p-20'>
        {note && note.map((x,index)=>(
          <div className='bg-white h-[250px] rounded-lg px-4 py-6 flex flex-col items-center' id={x.id}>
            <h1 className='text-lg font-extrabold flex justify-center items-center'>{x.title}
            <p className='p-1'></p>
            <button onClick={()=>{deletenote(x.id)}}> <img src='trash.png' className='w-5 h-5 cursor-pointer' ></img></button>
            
            </h1>
            <p className='p-1'></p>
            <p className='w-full'>{x.des}</p>
          </div>
        ))}
        


      </div>
      <div className='min-h-[800px] h-full w-1/4  flex justify-center items-center text-white rounded-lg '>
          <form class="px-8 mb-4 w-full h-fit">
            <h1 className='w-full flex justify-center text-4xl font-bold'>Add Note</h1>
            <p className='p-2'></p>
            <div class="mb-4">
              <label class="block text-gray-400 text-lg font-bold mb-2" for="tit">
                Title
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tit" type="text" placeholder="Username" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <p className='p-2'></p>
            <div class="mb-6">
              <label class="block text-gray-400 text-lg  font-bold mb-2" for="des">
                Description
              </label>
              <textarea  class="shadow appearance-none border rounded w-full h-[150px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="des"  placeholder="Enter description... " onChange={(e)=>setDes(e.target.value)} />
            </div>
            <div className='flex justify-center'>
              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-xl text-sm px-4 py-2 text-center mr-2 mb-2" onClick={insertnote}>Add Note</button>
            </div>
          </form>
      </div>
    </div>

  );
}
const notes = [
  {
    title : "Title",
    des : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
  },
  {
    title : "Title",
    des : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
  },
  {
    title : "Title",
    des : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
  },
  {
    title : "Title",
    des : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
  },
  {
    title : "Title",
    des : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
  },
]
export default App;
