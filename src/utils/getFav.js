export const getFav = (favoritas) =>{
    const lista = [];
    favoritas.forEach(favorita => {
        lista.push({
            id: favorita.movie.id,
            name: favorita.movie.name,
            image: favorita.movie.image,
        })
    });
    return lista;
}