
import { useParams } from 'react-router-dom'
import Sessions from '../components/Sessions';

const Users = () => {
  const {id} = useParams();
  
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
          <Sessions />
        </div>
        
    </div>
  )
}

export default Users