import { FaqsPage } from 'pages/FaqsPage'
import { MainPage } from 'pages/MainPage'
import { MoviePage } from 'pages/MoviePage'
import { WishlistPage } from 'pages/WishlistPage'
import { Route, Routes } from 'react-router-dom'

export const Navigation = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/questions' element={<FaqsPage />} />
        </Routes>
    )
}
