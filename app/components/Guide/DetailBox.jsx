
import Image from 'next/image'
import styles from './DetailBox.module.css'

export default function DetailBox({ title, desc }) {
    return (
        <div className={styles.DetailBox}>
            <div className={styles.BoxIcon}>
                <Image src='/Images/Global/comparison-icon.svg' width={70} height={70} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>
                {desc}
            </p>
        </div>
    )
}
