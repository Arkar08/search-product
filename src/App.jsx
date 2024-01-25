import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [record , setRecord] = useState([]);
 
  useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log(res.data)
      setRecord(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  },[])


    const filterChange = (event)=>{
      setData.filter((r)=>{
        return(r.category.tolowerCase().include(event.target.value));
      })
    }

  return (

    <div className='container'>
      <input type="text" placeholder='search product' className='input'onChange={filterChange}/>
      <div className="cards">
        {
          record.map((d,id)=>{
            return(
            <div className="card" key={id}>
          <img src={d.image} alt="" />
          <div className="text">
            <h2>{d.category}</h2>
            <p><span>$</span>{d.price}</p>
          </div>
          <button>Add To cart</button>
          </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default App
//https://fakestoreapi.com/products
