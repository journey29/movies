import { IWishListItem } from 'types/index'
import NotFound from 'assets/images/not-found.png'
import classes from './Wishlist.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBucket } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from 'hooks/redux'
import { removeWishListItem } from 'store/slices/wishlistSlice'

type Props = {
    wishlistItem: IWishListItem
}

export const WishListItem = ({ wishlistItem }: Props) => {
    const dispatch = useAppDispatch()
    const deleteWishListItem = (state:string)=> dispatch(removeWishListItem(state))
    
    return (
        <div className={classes.item}>
            <img src={wishlistItem.img !== 'N/A' ? wishlistItem.img : NotFound} alt="img" />
            <h4>{wishlistItem.title}</h4>
            <p>{wishlistItem.type}</p>
            <button onClick={()=>deleteWishListItem(wishlistItem.imdbID)}>
                <FontAwesomeIcon style={{height:"22px"}} icon={faBucket}/>
            </button>
        </div>
    )
}
