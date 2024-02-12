import RegisterForm from './RegisterForm/RegisterForm.tsx'
import useRegister from './hooks/useRegister.ts'

function RegisterFeature() {
  return (
	<RegisterForm onSubmit={useRegister} />
  )
}

export default RegisterFeature