import classes from './Header.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
    scrollToCatalog?: () => void
}

export const Header = ({ scrollToCatalog }: Props) => {
    const { t } = useTranslation()
    const [menuActive, setMenuActive] = useState<boolean>()

    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.content}>
                    <Link to="/">Movies</Link>
                    <nav className={classes.navigation}>
                        <ul>
                            <li onClick={scrollToCatalog}>
                                {t('Catalog')}
                            </li>
                            <li>
                                <Link to="/questions">
                                    {t('Faq')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.user}>
                        <Link to="/wishlist">{t('Wishlist')}</Link>
                    </div>
                    <div className={classes.menu}>
                        <div className={classes.menu_container}>
                            <button onClick={() => setMenuActive(!menuActive)}>
                                <FontAwesomeIcon style={{ color: "white", height: "24px" }} icon={faBars} />
                            </button>
                            <div className={`${classes.overlay} ${menuActive ? classes.active : ''}`} onClick={() => setMenuActive(false)}>
                                <div className={`${classes.menu_content} ${menuActive ? classes.active : ''}`} onClick={e => e.stopPropagation()}>
                                    <div>
                                        <Link to="/questions">Faq</Link>
                                        <FontAwesomeIcon icon={faClose} onClick={()=>setMenuActive(false)}/>
                                    </div>
                                    <Link to="/wishlist">Wishlist</Link>
                                </div>
                            </div>
                        </div>
                        <iframe width="280" height="65" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1273597501/favorites&amp;show_artwork=false&download=false&show_playcount=false"></iframe>
                    </div>
                </div>
            </div>
        </header>
    )
}
