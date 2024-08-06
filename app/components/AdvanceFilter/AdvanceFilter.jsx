import styles from './Advance.module.css'
import RangWrapper from './RangWrapper'

export default function AdvanceFilter({data, setData}) {
  return (
    <div className={styles.filterMain}>
      <div className="container mx-auto">
        <h2 className='text-white mb-5'>Advanced Filtering:</h2>
        <div className="w-full flex flex-wrap gap-7 md:gap-0 justify-between p-2 mb-4">
          <RangWrapper dataTpye="price" data={data} setData={setData} title="Price" />
          <RangWrapper dataTpye="commission" data={data} setData={setData} title="Commission" />
          <RangWrapper dataTpye="leverage" data={data} setData={setData} title="Payout Frequency" />
          <RangWrapper dataTpye="credits" data={data} setData={setData} title="Loyalty Points" />
        </div>
      </div>
    </div>
  )
}
