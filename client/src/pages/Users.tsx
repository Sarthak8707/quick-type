
import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios';

type UserData = {
  id: number,
  wordsID: number,
  wpm: number,
  accuracy: number,
  userID: number
}

const Users = () => {
  const {id} = useParams();
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`http://localhost:3000/sessions/users/${id}`);
      
      setUserData(response.data);
     
      console.log(response.data);
    }

    getUserData();

  }, [id])

  
  
  return (
    <div className='bg-neutral-900 min-h-screen text-center'>
        <div className='p-5'>
          <h1 className='text-3xl font-bold text-amber-50 text-center mt-8'> Your Current Stats </h1>
          <div className='flex flex-row justify-between'>
            <div className='text-amber-50 ml-10 mt-5 flex flex-row gap-5'>
              <div>BrownMuffin</div> <div> Current Level: Expert </div>
            </div>
            <div className='text-amber-50 mr-10'> Current Streak: 5 Days </div>
          </div>
        </div>

        {/* Recent Performances */}
        
        <div>
          <h1 className='text-2xl font-medium text-amber-50 text-center mt-16'>Recent Performances</h1>
          <div className='text-xl text-amber-50 mt-20'>
            <div className='grid grid-cols-3 text-center font-semibold mb-6'> <div>WPM</div> <div>Accuracy</div> <div>Difficulty</div> </div>
            <div>
              {userData.map((obj) => (
              <div key={obj.id} className='grid grid-cols-3 text-center'> 
                <div> {obj.wpm} </div>
                <div> {obj.accuracy} </div>
                <div> Medium </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Users