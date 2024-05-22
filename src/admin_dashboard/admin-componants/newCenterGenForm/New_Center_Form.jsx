import React,{useState} from 'react'
import './centerForm.css'

function New_Center_Form() {
    const [inputField , setInputField] = useState({
        center_name: '',
        Center_Owener: '',
        Center_Address:'',
        City:'',
        Dist:'',
        State:'',
        Country:'',
        email: '',
        password:''
    })
    function onChangeHandler(e){
        setInputField({...inputField,[e.target.name]: e.target.value})
    }
    async function handlesubmit(e){
        e.preventDefault();
        console.log(inputField)
        try {
            let response= await fetch('localhost:4000/api/newcenter',{
                method:'POST',
                body: JSON.stringify(inputField),
                headers:{"Content-Type":"appliction/json"}
            })
            response=await response.json()
            console.log(response)
        } catch (error) {
            throw error
        }
    }
  return (
    <div className='center-container'>
        <form action="" method="post" className='form' onSubmit={(e)=>handlesubmit(e)}>
            <div className="center-input">
                <label htmlFor="">Center Name</label>
                <input type="text" className='input' name='center_name' value={inputField.center_name} onChange={
                    onChangeHandler
                } />
            </div>
            <div className="center-input">
                <label htmlFor="">Center Owener</label>
                <input type="text" className='input' name='Center_Owener' value={inputField.Center_Owener} onChange={
                    onChangeHandler
                }/>
            </div>
            <div className="center-input">
                <label htmlFor="">Center Address</label>
                <input type="text" className='input' name='Center_Address' value={inputField.Center_Address}
                onChange={onChangeHandler}/>
                <label htmlFor="">City</label>
                <input type="text" className='input' name='City' value={inputField.City}
                onChange={onChangeHandler}/>
                <label htmlFor="">Dist</label>
                <input type="text" className='input' name='Dist' value={inputField.Dist}
                onChange={onChangeHandler}/>
                <label htmlFor="">State</label>
                <input type="text" className='input' name='State' value={inputField.State}
                onChange={onChangeHandler}/>
                <label htmlFor="">Country</label>
                <input type="text" className='input' name='Country' value={inputField.Country}
                onChange={onChangeHandler}/>
            </div>
            <div className="center-input">
                <label htmlFor="">Email</label>
                <input type="email" className='input' name='email' value={inputField.email}
                onChange={onChangeHandler}/>
            </div>
            <div className="center-input">
                <label htmlFor="">Create New Password</label>
                <input type="password" className='input' name='password' value={inputField.password}
                onChange={onChangeHandler}/>
            </div>
            <div className="center-input">
                <label htmlFor="">Confrume Password</label>
                <input type="password" className='input'/>
            </div>
            <div className="center-btn">
                <button type='submit' className='cent-btn' onClick={()=>alert("")}>Save</button>
                <button type='reset'className='cent-btn'>Reset All</button>
            </div>
        </form>
    </div>
  )
}

export default New_Center_Form