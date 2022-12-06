import React from 'react'
import '../../Styles/Footer/Footer.css'
import { DiCodeigniter } from 'react-icons/di'

function Footer() {
    return (
        <footer>
            <hr />
            <main className='container'>
                <DiCodeigniter size={30} color={'#4f7afe'} />
                <p>coding , coding and coding...</p>
            </main>
            <hr />
        </footer>
    )
}

export default Footer