;
import Image from 'next/image';
import styles from './Features.module.css';


export default function Features() {
   return (
      <div className="container mx-auto pb-10">
         <div className={styles.platforms}>
            <div className="flex gap-x-5 ">
               <div className="w-6/12">
                  <h2>Features:</h2>

                  <div className={styles.selecticon}>
                     <Image className={styles.selecticonimg}
                        src="/Images/Global/select-platform-icon.svg" width={24} height={24}
                        alt="Picture of the author"

                     />
                     <select className={`${styles.instrument} ${styles.selectpaddingleft}`} id="countries">
                        <option selected value="Select Feature"> Select Feature</option>
                        <option value="Trade Copying">Trade Copying</option>
                        <option value="Expert Advisor">Expert Advisor</option>
                        <option value="Auto-close">Auto-close</option>
                        <option value="News Trading">News Trading</option>
                        <option value="Refund Fee">Refund Fee</option>
                        <option value="Match Trader">Match Trader</option>
                     </select>
                  </div>

               </div>


               <div className="w-6/12">
                  <h2>Brokers:</h2>

                  <div className={styles.selecticon}>
                     <Image className={styles.selecticonimg}
                        src="/Images/Global/select-platform-icon.svg" width={24} height={24}
                        alt="Picture of the author"

                     />
                     <select className={`${styles.instrument} ${styles.selectpaddingleft}`} id="countries">
                        <option selected value="Select Feature"> Select Feature</option>
                        <option value="indices">Purple Trading Seychelles</option>
                        <option value="commodities">ThinkMarkets</option>
                        <option value="crypto">Virtual Markets</option>
                        <option value="crypto">GBE Brokers</option>
                        <option value="crypto">Finesse FX</option>
                        <option value="crypto">Liquidity Provider / Own Broker</option>
                     </select>
                  </div>

               </div>

            </div>


         </div>
      </div>
   );
}
