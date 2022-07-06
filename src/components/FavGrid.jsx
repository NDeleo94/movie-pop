import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { getFav } from "../utils/getFav";
import NoResults from "./NoResults";
import styles from "../components styles/FavGrid.module.css";
import MovieGridItem from "./MovieGridItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const FavGrid = () => {
  const { fav } = useSelector((state) => state);
  const listaFav = getFav(fav.favoritas);

  const [peliculas, setPeliculas] = useState([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    if (listaFav.length < 12) {
      setPeliculas(listaFav);
    } else {
      setPeliculas((prevPeli) =>
        prevPeli.concat(listaFav.slice(next, next + 12))
      );
    }
  }, [next]);

  if (listaFav.length === 0) {
    return <NoResults text={"Aun no agregaste favoritas"} />;
  }

  return (
    <InfiniteScroll
      dataLength={peliculas.length}
      hasMore={listaFav.length > peliculas.length}
      next={() => setNext((prevNext) => prevNext + 12)}
      loader={<Loading />}
    >
      <ul className={styles.moviesGrid}>
        {peliculas.map((favorita) => (
          <MovieGridItem key={favorita.show.id} movie={favorita} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default FavGrid;
