import React from 'react'

const FormDetail = (props) => {

	//desestructuracion de propiedades
    const { firstName, lastName, email, password, confirmPassword } = props.data;

	return (
		<div className='userDetail'>

			<p id='formDetailTitle'>Your Form Data</p>

			<table>
				<tbody>

					<tr>
						<td className="itemTitle">First Name</td>
						<td>{firstName}</td>
					</tr>
					<tr>
						<td className="itemTitle">Last Name</td>
						<td>{lastName}</td>
					</tr>
					<tr>
						<td className="itemTitle">Email</td>
						<td>{email}</td>
					</tr>
					<tr>
						<td className="itemTitle">Password</td>
						<td>{password}</td>
					</tr>
					<tr>
						<td className="itemTitle">Confirm Password</td>
						<td>{confirmPassword}</td>
					</tr>
				</tbody>
			</table>

		</div>
	)
}

export default FormDetail