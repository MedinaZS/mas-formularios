import React, { useState } from 'react'

const Form = (props) => {

	//desestructuracion de propiedades
	const { inputs, setInputs } = props;

	//Validaciones
	const [errores, setErrores] = useState({
		firstNameError: false,
		lastNameError: false,
		emailError: false,
		passwordError: false,
		confirmPasswordError: false
	});

	//Funcion que se llamara cuando sucede el evento onchange en el input
	const onChange = (e) => {
		//Setear el valor del state con lo escrito en el input
		//Spread todos los inputs y modificar solo el necesario obteniendo el nombre del atributo name del input
		// setInputs({ ...inputs, [e.target.name]: e.target.value });
		setInputs({ ...inputs, [e.target.name]: e.target.value });

		handleErrors(e);

	};

	const handleErrors = (e) => {

		//Obtener el nombre y la longitud de la entrada
		let name = e.target.name;
		let valueLen = e.target.value.length;

		//Realizar las validaciones
		if ((name === 'firstName' || name === 'lastName') && valueLen < 2 && valueLen > 0) {
			setErrores({ ...errores, [name + 'Error']: true });
		} else if (name === 'email' && valueLen < 5 && valueLen > 0) {
			setErrores({ ...errores, [name + 'Error']: true });
		} else if (name === 'password' && valueLen < 8 && valueLen > 0) {
			setErrores({ ...errores, [name + 'Error']: true });
		} else if (name === 'confirmPassword' && e.target.value !== document.getElementsByName('password')[0].value && valueLen>0) {
			setErrores({ ...errores, [name + 'Error']: true });
			console.log([name + 'Error']);
		}
		else {
			//Si no entró en ningun if anterior es que en ese campo ya no hay errores, setear a falso para eliminar el mensaje
			setErrores({ ...errores, [name + 'Error']: false });
		}
	}

	return (
		<form>
			<div className='input-group'>
				<div className='form-group'>
					<label htmlFor="firstName">First Name</label>
					<input onChange={onChange} type="text" name='firstName' />
				</div>
				{
					errores.firstNameError ?
						<p className='errores'>First Name must be at least 2 characters</p> :
						""
				}
			</div>

			<div className='input-group'>
				<div className='form-group'>
					<label htmlFor="lastName">Last Name</label>
					<input onChange={onChange} type="text" name='lastName' />
				</div>
				{
					errores.lastNameError ?
						<p className='errores'>Last Name must be at least 2 characters</p> :
						""
				}
			</div>

			<div className='input-group'>
				<div className='form-group'>
					<label htmlFor="email">Email</label>
					<input onChange={onChange} type="email" name='email' />
				</div>
				{
					errores.emailError ?
						<p className='errores'>Email must be at least 5 characters</p> :
						""
				}
			</div>

			<div className='input-group'>
				<div className='form-group'>
					<label htmlFor="password">Password</label>
					<input onChange={onChange} type="password" name='password' />
				</div>
				{
					errores.passwordError ?
						<p className='errores'>Password must be at least 8 characters</p> :
						""
				}
			</div>

			<div className='input-group'>
				<div className='form-group'>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input onChange={onChange} type="password" name='confirmPassword' />
				</div>
				{
					errores.confirmPasswordError ?
						<p className='errores'>Password must match</p> :
						""
				}
			</div>

		</form>
	)
}

export default Form