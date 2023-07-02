import styles from './Button.module.css'

export const Button = ({onClick}) => {
return (
    <div >
        <button type='submit' className={styles.button} onClick={onClick}>Load More</button>
    </div>
)
}