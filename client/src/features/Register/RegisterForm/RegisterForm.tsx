import Button from '../../../ui/Button/Button'
import styles from './register_form.module.css'

export default function RegisterForm() {
  return (
	<form className={styles.login__form}>
		<label htmlFor="login">login</label>
		<input name="login" type="text"/>
		<label htmlFor="password">password</label>
		<input name="password" type="password"/>
		<Button ><h3>Log in</h3></Button>
		<p>Haven’t created account yet? <span className="text-blue-700">Create it!</span></p>
	</form>
  )
}