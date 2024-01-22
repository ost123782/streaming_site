import Button from '../../../ui/Button/Button'
import styles from './login_form.module.css'

function LoginForm() {
  return (
	<form className={styles.login__form}>
		<label htmlFor="login">login</label>
		<input name="login" type="text"/>
		<label htmlFor="password">password</label>
		<input name="password" type="password"/>
		<Button type="submit">Log in</Button>
		<p>Haven’t created account yet? <span className="text-blue-700">Create it!</span></p>
	</form>
  )
}

export default LoginForm