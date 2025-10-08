import { useState } from 'react'
export default function ItemCount({ initial=1, min=1, max=10, onAdd }) {
  const [count, setCount] = useState(initial)
  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button className="btn" onClick={()=>setCount(c=>Math.max(min,c-1))} disabled={count<=min}>-</button>
      <span style={{minWidth:32, textAlign:'center'}}>{count}</span>
      <button className="btn" onClick={()=>setCount(c=>Math.min(max,c+1))} disabled={count>=max}>+</button>
      <button className="btn primary" onClick={()=>onAdd?.(count)}>Agregar</button>
    </div>
  )
}
