import { useState, ChangeEvent } from "react";
import { CatalogItem } from "./CatalogItem";
import classes from './Catalog.module.scss';
import { useGetMoviesQuery } from "store/api/movies.api";
import { useTranslation } from 'react-i18next'

export const Catalog: React.FC<{ innerRef: React.Ref<HTMLDivElement> }> = ({ innerRef }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<string>('One Piece')
  const [activeSort, setActiveSort] = useState<string>('movie')
  const { data} = useGetMoviesQuery({ searchQuery: searchValue, page: '1', apiKey: import.meta.env.VITE_MOVIES_DB_ID, type: activeSort });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={classes.catalog} ref={innerRef}>
      <div className="container">
        <div className={classes.content}>
          <h2>{t('catalog.title')}</h2>
          <div className={classes.search}>
            <input type="text" placeholder={t('catalog.input')} value={searchValue} onChange={onChangeInput} />
            <div className={classes.sort}>
              <button onClick={() => setActiveSort('movie')}>{t('catalog.movies')}</button>
              <button onClick={() => setActiveSort('series')}>{t('catalog.series')}</button>
              <button onClick={() => setActiveSort('episode')}>{t('catalog.episode')}</button>
            </div>
          </div>
          <div className={classes.movies}>
            {data?.Search ? (
              data?.Search.map(movie =>
                <CatalogItem movie={movie} key={movie.imdbID} />
              )
            ) : (
              <h2>{t('Not Found')}</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}