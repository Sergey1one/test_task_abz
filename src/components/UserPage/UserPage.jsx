import axios from "axios"
import { Button } from "components/UI/Button/Button"
import { useState } from "react"

const UserPage = () => {

    const [data, setData] = useState({});
    const [users, setUsers] = useState([]);


    

    const fetchContacts = async(page,count) => {
        const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
        try {
            const resp = await axios.get(`${BASE_URL}/users?page=${page}&count=${count}`)
            console.log(resp.data.users);
            setData(resp.data);
             setUsers([...resp.data.users])
          
            return resp.data
         }
        catch (e) {
            console.log(e)
        }
    }
    
    console.log(users)


    const handleOnClick = () => {
        console.log("HIIII!!!")
        fetchContacts(1,6)
        
    }
console.log(users)

    return (<div>
        <h1>Contacts </h1>
        <Button text='Try me' loadMore={handleOnClick} />
        <ul> 
        {users.map(el => {
           const {id,photo,name,position,email,phone}=el 
            console.log(el)
            return (
                <li key={id}> dfghj
                    <img src={photo} alt='user' />
                    <p> {name}</p>
                    <div>
                        <p>{position}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>

            </li>
        )
        })}
            </ul>
    </div>)
}

export default UserPage