import Button from './Button';
import styles from './Instruments.module.css';

export default function Instruments() {
    return (
        <div className={styles.instrumentBox}>
            <h2>Select Instruments:</h2>
            <select className={styles.instrument} id="countries">
                <option selected value="forex">Forex</option>
                <option value="indices">Indices</option>
                <option value="commodities">Commodities</option>
                <option value="crypto">Crypto</option>
            </select>
            <div className="flex justify-between col-span-4 gap-3 mt-6">
                <Button title="Forex" />
                <Button title="Indices" />
                <Button title="Commodities" />
                <Button title="Crypto" />
            </div>

        </div>
    );
}
