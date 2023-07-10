import classes from './Main.module.scss'
import MainImg from 'assets/images/main-img.jpg'
import { useTranslation } from 'react-i18next'

export const Main = () => {
    const {t} = useTranslation()
    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.text}>
                        <h1>{t('main.title')}</h1>
                        <p>{t('main.watch')}</p>
                        <p>{t('main.enter email')}</p>
                    </div>
                    <form action="https://formsubmit.co/smaluniuk.development@gmail.com" method="POST">
                        <input type="email" placeholder={t('main.input')} />
                        <button>{t('main.button')}</button>
                    </form>
                </div>
                <img src={MainImg} alt="img" />
            </div>
        </div>
    )
}
