
import { useParams } from 'react-router-dom'

const Users = () => {
  const {id} = useParams();
  
  return (
    <div>
        <h1 className='text-2xl'> Users Page </h1>
        {id}
    </div>
  )
}

export default Users