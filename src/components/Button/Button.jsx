import styles from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({onClick}) => {
return (
    <div >
        <button type='submit' className={styles.button} onClick={onClick}>Load More</button>
    </div>
)
}

Button.propTypes = {
    onClick: PropTypes.func
}