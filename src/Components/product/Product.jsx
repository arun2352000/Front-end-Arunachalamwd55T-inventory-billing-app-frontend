import React, { useState } from 'react';
import '../style/productstyle.css'
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';

const product = ({token}) => {

    const [addSection,setAddSection] = useState(false)

    
console.log(token);
    const [productName, setProductName]= useState('')
    const [price, setPrice]= useState('')
    const [quantity, setQuantity]= useState('')
    const [brand, setBrand]= useState('')
    const [product_id, setproduct_id]= useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("reguster api payloads", productName, price, quantity, brand,product_id);
        const payloads={productName, price, quantity, brand,product_id}

    
        const data = await axios.post('http://localhost:4000/api/product/createproduct', payloads , {
            headers:{
                Authorization:`Bearer ${token}`
            }
        },)
        .then((res)=>SetResponseMsg(res.data.message))
        .catch((err)=>{
            console.log(err);
        })
        console.log(payloads)
        console.log(data);

        setProductName(' ')
        setPrice('')
        setQuantity('')
        setBrand('')
        setproduct_id('')
    }
    
    return (
        <div>
            <h1>product Components</h1>
            <div className='container'>
                <button className='btn btn-add' onClick={()=>setAddSection(true)}>Add</button>
                {
                    addSection&&(
                        <div className='addContainer'>
                        <div className="close-btn"onClick={()=>setAddSection(false)}><MdOutlineClose /></div>
                        <form onSubmit={handleSubmit}>
                            <label> username <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} required/></label>
                            {/* <label >Product Name : <input type="text" value={ProductName} onChange={(e)=>setProductName(e.target.value)} required/></label> */}
                            <label >Price : <input type="number" value={price} id='Price'name='Price'  onChange={(e)=>setPrice(e.target.value)} required/></label>
                            <label>Quantity : <input type="number" value={quantity} id='Quantity'name='Quantity' onChange={(e)=>setQuantity(e.target.value)} required/></label>
                            <label>Brand : <input type="text" value={brand} id='Brand'name='Brand' onChange={(e)=>setBrand(e.target.value)} required/></label>
                            <label >product_id : <input type="text" value={product_id}  id='product_id'name='product_id' onChange={(e)=>setproduct_id(e.target.value)} required/></label>
                            <button className='btn' type='submit'>Add Product </button>
                        </form>
                    </div>
                    )
                }
                
                
            </div>
        </div>
    );
};

export default product;