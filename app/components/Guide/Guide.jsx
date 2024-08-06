import styles from './Guide.module.css'
import DetailBox from './DetailBox';
import detailBoxData from '@/app/data/guideBoxes.json'


function Guide() {
  return (
    <div className="md:px-0 px-3">
      <div className="container mx-auto">
        <h3 className={styles.Guideheading}>
          The Ultimate Guide to Prop Trading Firms: <br /> Your One-Stop Hub for Success
        </h3>
        <div className="flex flex-wrap justify-between mt-14">
          {detailBoxData.map((item, index) => {
            return <DetailBox key={index} title={item.title} desc={item.desc} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Guide