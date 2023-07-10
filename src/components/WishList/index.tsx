import { useAppSelector } from 'hooks/redux'
import { WishListItem } from './WishListItem'
import classes from './Wishlist.module.scss'
import { useTranslation } from 'react-i18next'

export const WishList = () => {
    const { wishlistItems } = useAppSelector(state => state.wishList)
    const { t } = useTranslation()
    return (
        <div className={classes.wishlist}>
            <div className="container">
                <div className={classes.content}>
                    {wishlistItems.length > 0
                        ? <>
                            <h2>{t('wishlist.title')}</h2>
                            <div className={classes.content}>
                                {wishlistItems.map(item =>
                                    <WishListItem key={item.imdbID} wishlistItem={item} />
                                )}
                            </div>
                        </>
                        : <h2 className={classes.not_found}>{t('wishlist.not added')}</h2>
                    }
                </div>

            </div>
        </div >
    )
}
