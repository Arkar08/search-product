import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [record , setRecord] = useState([]);
  const [data , setData] = useState([]);
 
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


  const filterProdcut = (e) =>{
    setData(e.target.value);
  }
  let dataSearch = record.filter((item)=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(data.toString().toLocaleLowerCase()));
  })

  return (

    <div className='container'>
      <input type="text" placeholder='search product' className='input'value={data} onChange={filterProdcut}/>
      <div className="cards">
        {
          dataSearch.map((d,id)=>{
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
