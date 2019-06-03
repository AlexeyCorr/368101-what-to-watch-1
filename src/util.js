export const server2ResultMapper = (data) => {
  return {
    backgroundColor: data.background_color,
    backgroundImage: data.background_image,
    description: data.description,
    director: data.director,
    genre: data.genre,
    id: data.id,
    isFavorite: data.is_favorite,
    title: data.name,
    posterImage: data.poster_image,
    previewImage: data.preview_image,
    previewLink: data.preview_video_link,
    rating: data.rating,
    released: data.released,
    runTime: data.run_time,
    scoresCount: data.scores_count,
    starring: data.starring,
    videoLink: data.video_link,
  };
};
