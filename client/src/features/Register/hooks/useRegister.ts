import {ICreateUser, IFormInputs} from '../registerInterfaces.ts'
import axios from 'axios'
import toast from 'react-hot-toast'

export default async function useRegister({name, email, user_name, password, repeat_password}: IFormInputs) {
    if(password !== repeat_password) {
        throw new Error('Passwords don\'t match!')
    }

    return await axios.post<ICreateUser>('http://localhost:5000/users/create', {
        name, user_name, email, password
    })
        .then(res => {
            toast.success('User successfully registered!')
            return res.data
        })
        .catch(err => {
            if (!err.response) {
              toast.error('Something has gone wrong :(')
              return err
            }
            toast.error(err.response.data.error)
            return err
        })
}
