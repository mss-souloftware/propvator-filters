;
import Image from 'next/image';
import styles from './Platforms.module.css';


export default function Platforms() {
    return (
        <div className="container mx-auto pb-10">
            <div className={styles.platforms}>
           <div className="flex gap-x-5 ">
           <div className="w-6/12">
            <h2>Platforms:</h2>
        
         <div className={styles.selecticon}>
         <Image className={styles.selecticonimg}
      src= "/Images/Global/select-platform-icon.svg" width={24} height={24}
      alt="Picture of the author"
      
    />
         <select className={`${styles.instrument} ${styles.selectpaddingleft}`}  id="countries">
                <option selected value="Select  Platform"> Select Platform</option>
                <option value="indices">Indices</option>
                <option value="commodities">Commodities</option>
                <option value="crypto">Crypto</option>
            </select>
         </div>
           
            </div>


            <div className="w-6/12">
            <h2>Country:</h2>
        
         <div className={styles.selecticon}>
         <Image className={styles.selecticonimg}
      src= "/Images/Global/select-platform-icon.svg" width={24} height={24}
      alt="Picture of the author"
      
    />
         <select className={`${styles.instrument} ${styles.selectpaddingleft}`}  id="countries">
                <option selected value="Select  Platform"> Select Country</option>
                <option value="indices">Indices</option>
                <option value="commodities">Commodities</option>
                <option value="crypto">Crypto</option>
            </select>
         </div>
           
            </div>

           </div>

           <div className="w-full">
            <h2 className="pt-5">Search:</h2>
            <input className={styles.input} placeholder="Enter Firm or Challange" type="text" />
            </div>
        </div>
        </div>
    );
}
