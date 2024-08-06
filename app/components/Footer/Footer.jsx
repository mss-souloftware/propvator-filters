import Logo from '../Header/Logo'
import Copyright from './Copyright'
import styles from './Footer.module.css'
import Menus from './Menus'

export default function Footer() {
    return (
        <footer className='pt-10 bg-[#0F0F0F] px-3 md:px-0'>
            <div className="container mx-auto">
                <div className="text-center mx-auto text-white">
                    <Logo />
                    <h4 className={styles.gradientHDNG}>Disclaimer</h4>
                    <p>
                        This website is provided for general use and informational purposes only. Nothing provided on our website shall constitute financial advice, suggestion or recommendation. You must always seek the advice of your financial advisor or other qualified financial service provider regarding financial advice and investing. Never disregard professional financial advice or delay in seeking it because of something you have read on our website. Users should independently evaluate and verify the suitability of any such listed entities before engaging with them. We are not responsible for any
                        losses (whether that be direct or indirect) which you may incur as a result of your connection to this
                        website. The content on this website is not intended to be relied upon for financial or information
                        purposes, nor is it meant to be complete or exhaustive. No financial-customer relationship is
                        created by this website or its use. For more information, visit our Terms & Conditions page.

                    </p>
                    <div className='bg-[#1C2069] h-[1px] my-8'></div>
                </div>
                <Menus />
            </div>
            <Copyright />
        </footer>
    )
}
