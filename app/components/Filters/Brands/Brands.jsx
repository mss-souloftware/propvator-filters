import Image from "next/image";
import styles from "./Brands.module.css";
import BrandSelector from "./BrandSelector";
import brand from '@/app/data/brand.json';

export default function Brands({filter, setfilter}) {
    return (
        <>
            <div className={`${styles.brandBox} flex flex-wrap justify-center md:justify-between items-center`}>
                <p className="text-white mb-2">Select for  multiple firms:</p>
                <div className={styles.moreFilters}>
                    <Image src="/Images/Global/Filters.svg" width={20} height={20} alt="Filters" />
                    <span>
                        More Options
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap gap-3  mt-10">
                {brand.map((item, index) => {
                    return (
                        <BrandSelector filter={filter} setfilter={setfilter} filterType="brands" key={index} brandName={item.name} logo="/Images/brands/brand1.svg" />
                    );
                })}
            </div>
        </>
    )
}
