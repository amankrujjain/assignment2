// import React, { useContext } from 'react'
// import FormContextProvider from './FormStore/FormContextProvider'
// import { Link } from 'react-router-dom'

// function UserDetails() {
//     const { userDetails, setUserDetails } = useContext(FormContextProvider)
//     const handleChange = (e) => {
//         setUserDetails({
//             ...userDetails,
//             [e.target.id]: e.target.value
//         })
//         console.log(userDetails)
//     }
//     return (
//         <div className='container-fluid' >
//             <form className='mt-4'>
//                 <div className="mb-3">
//                     <label className="form-label">Enter Name</label>
//                     <div className="input-group has-validation">
//                         <input id='name' type="text" className="form-control" onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email address</label>
//                     <div className="input-group has-validation">
//                         <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Enter Phone Number</label>
//                     <div className="input-group has-validation">
//                         <input id='phoneNumber' type="tel" className="form-control" onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <label  className="form-label">Pick Gender</label>
//                 <div className="form-check">
//                     <input className="form-check-input" type="radio" value='male' name="flexRadioDefault" id="male" onChange={handleChange} checked/>
//                     <label className="form-check-label">
//                         Male
//                     </label>
//                 </div>
//                 <div className="form-check">
//                     <input className="form-check-input" type="radio" value='female' name="flexRadioDefault" id="female" onChange={handleChange} />
//                     <label className="form-check-label">
//                         Female
//                     </label>
//                 </div>
//                 <div className="form-check">
//                     <input className="form-check-input" type="radio" value='others' name="flexRadioDefault" id="others" onChange={handleChange} />
//                     <label className="form-check-label" >
//                         Others
//                     </label>
//                 </div>
//                 <div className="mb-3 mt-4">
//                     <label className="form-label">Enter DOB</label>
//                     <div className="input-group has-validation">
//                         <input id='dob' type="date" className="form-control" onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <Link to='/showdata'><button  className="btn btn-primary">Next</button></Link>
//             </form>
//         </div>
//     )
// }

// export default UserDetails


import React, { useContext, useState } from 'react'
import FormContextProvider from './FormStore/FormContextProvider'
import { Link } from 'react-router-dom'

function UserDetails() {
    const { userDetails, setUserDetails } = useContext(FormContextProvider)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('male')


    const handleSubmit = (e) => {
        e.preventDefault
        const user ={
            name:name,
            email:email,
            phone:phone,
            gender:gender,
            dob:dob.toString()
        };
        setUserDetails(user)
    }
    return (
        <div className='container-fluid' >
            <form className='mt-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter Name</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} required />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <div className="input-group has-validation">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} required />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Phone Number</label>
                    <div className="input-group has-validation">
                        <input type="tel" className="form-control" onChange={(e)=>{setPhone(e.target.value)}} required />
                    </div>
                </div>
                <label  className="form-label">Pick Gender</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>{
                        console.log(e.target.value)
                        if(e.target.value==='on'){
                            setGender('male')
                        }
                    }}/>
                    <label className="form-check-label">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e)=>{
                        console.log(e.target.value)
                        
                        if(e.target.value==='on'){
                            setGender('female')
                        }
                    }} />
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={(e)=>{
                        console.log(e.target.value)
                        if(e.target.value==='on'){
                            setGender('others')
                        }
                    }} />
                    <label className="form-check-label" >
                        Others
                    </label>
                </div>
                <div className="mb-3 mt-4">
                    <label className="form-label">Enter DOB</label>
                    <div className="input-group has-validation">
                        <input type="date" className="form-control" onChange={(e)=>{
                            console.log(e.target.value)
                            setDob(e.target.value)}} required />
                    </div>
                </div>
                <Link to='/showdata'><button onClick={handleSubmit} className="btn btn-primary">Submit</button></Link>
            </form>
        </div>
    )
}

export default UserDetails