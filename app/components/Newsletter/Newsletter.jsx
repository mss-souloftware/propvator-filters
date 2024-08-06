import styles from './Newsletter.module.css'
import NewsletterBox from './NewsletterBox'

function Newsletter() {
    return (
        <div className="md:px-0 px-3">
            <div className="container mx-auto my-16">
                <h3 className={styles.Newsheading}>
                    Subscribe to Stay Updated
                </h3>

                <NewsletterBox />
            </div>
        </div>
    )
}

export default Newsletter