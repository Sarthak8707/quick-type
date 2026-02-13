
import { useParams } from 'react-router-dom'

const Users = () => {
  const {id} = useParams();
  
  return (
    <div>
        <h1 className='text-2xl'> Users Page </h1>
    </div>
  )
}

export default Users