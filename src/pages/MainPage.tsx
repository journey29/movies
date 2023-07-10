import { Header } from 'components/Header'
import { useRef } from "react"
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { Catalog } from 'components/Catalog'

export const MainPage = () => {
    const catalogRef = useRef<HTMLDivElement>(null);
    const scrollToCatalog = () => {
        catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header scrollToCatalog={scrollToCatalog}/>
            <Main />
            <Catalog innerRef={catalogRef} />
            <Footer />
        </>
    )
}
