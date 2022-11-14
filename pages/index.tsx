import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [input,setInput] = useState(true)
  const [win,setWin] = useState("")
  const [data, setData] = useState<any>({
    0:"",
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:""
  })

  useEffect(()=>{
    checker();
  },[data])
  const update=(k:any)=>{
    if(!data[k] && !win){
      let value = input? "X":"O";
      setData({...data,[k]:value});
      setInput(!input)
    }
  }

  const checker=()=>{
    const arr=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    arr.map((bd)=>{
      const [a,b,c] = bd;
      if(
        data[a] &&
        data[a] === data[b] &&
        data[a] === data[c]
      )
      {
        setWin(`win ${!input?"X":"O"}`);
      }
    }
    )
  }

  return (
    <div>
      <p>{input?"run X":"run O"}</p>
      <p>{`${win}`}</p>
      <div className='box'>
        {[...Array(9)].map((v,k)=>{
          return(   
            <div className='sq' key={k} onClick={()=>update(k)}>{data[k]}</div>
          )
        })}
      </div>
    </div>
  )
}
