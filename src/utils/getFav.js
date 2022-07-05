export const getFav = (favoritas) => {
  const lista = [];
  favoritas.forEach((favorita) => {
    lista.push({ show: favorita.show });
  });
  return lista;
};
