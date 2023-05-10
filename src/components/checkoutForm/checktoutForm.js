import { useState } from 'react'
import './checkoutForm.css'

const CheckOutForm = ({ onConfirm }) => {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        if (!fullName || !phone || !email) {
            alert('Por favor complete todos los campos')
            return
          }

        const userData = {
            fullName, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className='form-container'>

                <input type='text' placeholder="Nombre"
                    value={fullName} onChange={({ target }) => setFullName(target.value)}></input>
                <input type='text' placeholder="Celular"
                    value={phone} onChange={({ target }) => setPhone(target.value)}></input>
                <input type='email' placeholder="E-mail"
                    value={email} onChange={({ target }) => setEmail(target.value)}></input>
                <button class='btn-form-submit' type='submit'>Confirmar pedido</button>
            </form>
        </div>
    )
}

export default CheckOutForm


