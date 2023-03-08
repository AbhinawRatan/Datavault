import { bill } from "../assets"
import styles,{ layout } from "../style"

const Zk = () => {
  return (
    <section id="Working" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[70%] h-[70%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> transaction 
        with Account Extraction.
      </h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Account Extraction is a feature in decentralized applications (dApps) that simplifies the process of connecting users' digital wallets or accounts to the dApp for executing transactions.
      </p>
      /</div>
     </section>
    


  )
}

export default Zk