import { IMovie, IWishListItem } from 'types/index'
import classes from './Catalog.module.scss'
import NotFound from 'assets/images/not-found.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import EmptyHeart from 'assets/icons/empty-heart.png'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { addToWishList } from 'store/slices/wishlistSlice'
import { Link } from 'react-router-dom'

type Props = {
    movie: IMovie
}

export const CatalogItem = ({ movie }: Props) => {
    const dispatch = useAppDispatch()
    const addToWishListMovie = (state: IWishListItem) => dispatch(addToWishList(state))
    const { wishlistItems } = useAppSelector(state => state.wishList)

    return (
        <div className={classes.movie}>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : NotFound} alt="img" />
            <button onClick={() => addToWishListMovie({ imdbID: movie.imdbID, title: movie.Title, img: movie.Poster, type:movie.Type })}>
                {wishlistItems.some((wishItem: IWishListItem) => wishItem.imdbID === movie.imdbID) ? (
                    <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faHeart} />
                ) : (
                    <img src={EmptyHeart} alt="icon" />
                )}
            </button>
            <div className={classes.info}>
                <Link to={`/movie/${movie.Title}`}>{movie.Title}</Link>
                <p>{movie.Genre}</p>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}
