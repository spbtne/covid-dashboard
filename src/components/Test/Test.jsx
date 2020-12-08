import React from 'react'
import styles from './styles.module.css'

const Test = ({name}) => {
    return (<>
        <p className = {styles.title}>RSS {name}</p>
        </>)
}

export default Test