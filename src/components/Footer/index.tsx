import classes from './Footer.module.scss'
import { useTranslation } from 'react-i18next'
import { locales } from 'types/index'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
    const { t, i18n } = useTranslation();
    const [currentLangBtn, setCurrentLangBtn] = useState<string>('English');
    const [activeLangMenu, setActiveLangMenu] =useState<boolean>(false)

    const handleLangBtn = (lang:string, activeLang:string)=>{
        i18n.changeLanguage(lang)
        setCurrentLangBtn(activeLang)
        setActiveLangMenu(false)
    }

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.info}>
                    <a href="">{t('Questions')}</a>
                    <div>
                        <ul className={classes.list}>
                            <li>
                                <ul className={classes.items}>
                                    <li>
                                        <a href="#">{t("Faq")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Media Center")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Ways")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Cookie")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Speed")}</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className={classes.items}>
                                    <li>
                                        <a href="#">{t("Help Center")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Investor")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Terms")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Information")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Notices")}</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className={classes.items}>
                                    <li>
                                        <a href="#">{t("Account")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Jobs")}</a>

                                    </li>
                                    <li>
                                        <a href="#">{t("Privacy")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{t("Contact")}</a>

                                    </li>
                                    <li>
                                        <a href="#">{t("Netflix")}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.language}>
                        <div className={classes.language_active} onClick={()=>setActiveLangMenu(!activeLangMenu)}>
                            <button>{currentLangBtn}</button>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                        <div className={`${classes.language_menu} ${activeLangMenu ? classes.active : ''}`}>
                            {Object.keys(locales).map(locale =>
                                <button key={locale} onClick={() => handleLangBtn(locale, locales[locale].title)}>
                                    {locales[locale].title}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
