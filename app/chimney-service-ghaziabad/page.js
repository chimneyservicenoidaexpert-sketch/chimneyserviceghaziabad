
"use client"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function ServicePage(){
  const params = useSearchParams()
  const b = (params.get('brand') || 'faber').toLowerCase()
  const BrandName = b.charAt(0).toUpperCase() + b.slice(1)
  
  const [form, setForm] = useState({name:'', phone:'', brand:BrandName})

  const data = {
    faber: {
      h1:"Faber Chimney Service in Ghaziabad",
      why:"Faber chimney ke liye 10+ years expert team. Same day service in Vaishali, Indirapuram, Vasundhara.",
      service:"Faber deep cleaning, motor repair, suction issue, filter change - genuine parts ke saath.",
      issues:"Faber common issues: auto cut, noise, oil leakage, no suction - permanent solution."
    },
    hafele: {
      h1:"Hafele Chimney Service in Ghaziabad",
      why:"Hafele premium chimney specialist. Trained technicians, 90 days warranty.",
      service:"Hafele cleaning, PCB repair, oil collector, suction motor - full service.",
      issues:"Hafele PCB fault, touch not working, heavy noise - expert solution dete hain."
    },
    elica: {
      h1:"Elica Chimney Service in Ghaziabad",
      why:"Elica 12+ Services at one place. Full Ghaziabad coverage.",
      service:"Elica 12 Services: 1.Cleaning 2.Motor 3.Filter 4.PCB 5.Suction 6.Noise 7.Oil Leakage 8.Installation 9.Duct 10.Touch Panel 11.Wiring 12.General Service",
      issues:"Elica ke sabhi 12 issues ka solution - har service ka alag description."
    },
    aria: {
      h1:"Aria Anthem Chimney Service in Ghaziabad",
      why:"Aria Anthem builder series chimney expert. Google Ad leads ke liye same page.",
      service:"Aria Anthem chimney cleaning & repair - fast service.",
      issues:"Aria low suction, grease jam - instant fix."
    }
  }

  const curr = data[b] || data.faber

  return (
    <main style={{padding:'20px', maxWidth:'850px', margin:'0 auto', background:'white', borderRadius:'12px', marginTop:'20px'}}>
      <h1 style={{fontSize:'26px'}}>{curr.h1}</h1>
      <p style={{color:'green', fontWeight:'bold'}}>📞 8796284796 — Ghaziabad</p>

      <h2 style={{marginTop:'25px'}}>Why Choose {BrandName} Service?</h2>
      <p>{curr.why}</p>

      <h2 style={{marginTop:'25px'}}>{BrandName} Repair & Cleaning Details</h2>
      <p>{curr.service}</p>

      <h2 style={{marginTop:'25px'}}>Common {BrandName} Issues We Fix</h2>
      <p>{curr.issues}</p>

      <h2 style={{marginTop:'25px'}}>Service Process</h2>
      <p>1. Call Booking 2. Visit 3. Quote 4. Repair — 90 Days Warranty</p>

      <h2 style={{marginTop:'25px'}}>Service Areas</h2>
      <p>Vaishali, Indirapuram, Vasundhara, Raj Nagar, Kaushambi</p>

      <div style={{border:'2px solid black', padding:'20px', borderRadius:'14px', marginTop:'30px', background:'#f8fafc'}}>
        <h3>Book {BrandName} Service — Form</h3>
        <input placeholder="Your Name" style={{width:'100%', padding:'12px', marginTop:'10px', borderRadius:'8px', border:'1px solid #ccc'}} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input placeholder="Mobile Number" style={{width:'100%', padding:'12px', marginTop:'10px', borderRadius:'8px', border:'1px solid #ccc'}} onChange={e=>setForm({...form, phone:e.target.value})}/>
        <input value={BrandName} readOnly style={{width:'100%', padding:'12px', marginTop:'10px', borderRadius:'8px', background:'#e2e8f0', fontWeight:'bold'}}/>
        <a href="tel:8796284796" style={{display:'block', width:'100%', padding:'14px', marginTop:'14px', background:'black', color:'white', borderRadius:'8px', textAlign:'center', textDecoration:'none', fontWeight:'bold'}}>Book {BrandName} — 8796284796</a>
        <p style={{fontSize:'11px', marginTop:'12px', color:'gray'}}>Independent Provider. Not Authorized {BrandName}. For identification only. Noindex — Ad Safe</p>
      </div>
    </main>
  )
}

export default function Page(){
  return <Suspense fallback={<div style={{padding:'40px', textAlign:'center'}}>Loading...</div>}><ServicePage/></Suspense>
}
