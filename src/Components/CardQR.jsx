import ImgQr from '../assets/image-qr-code.png'
import './CardQR.css'
export const CardQR = () => {
    return(
        <article className='content_card_qr'>
            <img className="img_card_qr" src={ImgQr} alt="img" />
            <div className="body_card_qr">
                <h3 className="title_card_qr">Improve your Front-end skills bu building proyects</h3>
                <p className="paragraph_card_qr">Scan the QR code to visit Frontend Mentor andtake your coding skils to the next level</p>
            </div>
        </article>
    )
}