
import styles from './Hero.module.css';
import CompareBox from './CompareBox/CompareBox';
import Brands from '../Filters/Brands/Brands';


export default function Hero({filter, setfilter}) {
    return (
        <section className={styles.heroSection}>
            <div className="container mx-auto">
                <h1 className={`${styles.titleBg} text-center text-white font-bold text-4xl md:text-6xl max-w-2xl mx-auto`}>Compare different <span>prop firms</span> and select with confidence</h1>
                <CompareBox filter={filter} setfilter={setfilter} />
                <Brands filter={filter} setfilter={setfilter}/>
            </div>
        </section>
    )
}
