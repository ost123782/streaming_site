import Button from '../../../ui/Button/Button'
import styles from './register_form.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'
import {IFormInputs} from '../registerInterfaces.ts'
import {Toaster} from 'react-hot-toast'



export default function RegisterForm({onSubmit}: {onSubmit: SubmitHandler<IFormInputs>}) {

	const {
		register,
		handleSubmit,
		formState: {errors},
		getValues
	} = useForm<IFormInputs>()

	return (
		<form
			className={styles.login__form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Toaster
				position={'top-center'}
			/>
			<label htmlFor="name">name</label>
			<p className={'text-red-700'}>{errors.name?.message}</p>
			<input
				{...register('name', {required: 'Name can\'t to be empty',})}
				type="text"
			/>
			<label htmlFor="user_name">user_name</label>
			<p className={'text-red-700'}>{errors.user_name?.message}</p>
			<input
				{...register('user_name', {required: 'Username can\'t to be empty'})}
				type="text"
			/>
			<label htmlFor="email">email</label>
			<p className={'text-red-700'}>{errors.email?.message}</p>
			<input
				{...register('email', {required: 'Email can\'t to be empty'})}
				type="email"
			/>
			<label htmlFor="password">password</label>
			<p className={'text-red-700'}>{errors.password?.message}</p>
			<input
				{...register('password', {
					required: 'Password can\'t to be empty',
					validate: (value) => value.length >= 8 ? true : 'Length of password must be >= 8'
				})}
				type="password"
			/>
			<label htmlFor="repeat_password">repeat password</label>
			<p className={'text-red-700'}>{errors.repeat_password?.message}</p>
			<input {...register('repeat_password', {
				required: 'Repeated can\'t to be empty',
				validate: (value) => value === getValues('password') ? true : 'Passwords doesn\'t Match!'
			})} type="password"/>
			<Button><h3>Log in</h3></Button>
			<p>Haven’t created account yet? <span className="text-blue-700">Create it!</span></p>
		</form>
	)
}