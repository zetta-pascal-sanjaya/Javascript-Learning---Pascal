const songs = [
  {
    title : "Juna",
    artist : "Clairo",
    genre : "jazz",
    durationInMinutes: 3
  },
  {
    title : "Slow Dance",
    artist : "Clairo",
    genre : "jazz",
    durationInMinutes: 3
  },
  {
    title : "Fragile",
    artist : "Laufey",
    genre: "jazz",
    durationInMinutes: 3
  },
  {
    title : "Like The Movies",
    artist : "Laufey",
    genre: "jazz",
    durationInMinutes: 2
  },
  {
    title : "Lovers Rock",
    artist : "Tv Girl",
    genre: "pop",
    durationInMinutes: 2
  },
  {
    title : "Cigarette Out The Windows",
    artist : "Tv Girl",
    genre: "pop",
    durationInMinutes: 3
  },
  {
    title : "Starboy",
    artist : "Theweeknd",
    genre: "pop",
    durationInMinutes: 3
  },
  {
    title : "Blinding lights",
    artist : "Theweeknd",
    genre: "pop",
    durationInMinutes: 3
  },
  {
    title : "Jet Fuel",
    artist : "Mac miller",
    genre: "rap",
    durationInMinutes: 5
  },
  {
    title : "Congratulations",
    artist : "Mac miller",
    genre: "rap",
    durationInMinutes: 4
  },
  {
    title : "Welcome",
    artist : "J cole",
    genre: "rap",
    durationInMinutes: 4
  },
  {
    title : "Fire Squad",
    artist : "J cole",
    genre: "rap",
    durationInMinutes: 4
  },
  {
    title : "Lagu panjang",
    artist : "panjang",
    genre: "musik panjang",
    durationInMinutes: 50
  }
];

function Shuffle(songs){
  const shuffledSongs = [...songs];

  for(let i = shuffledSongs.length - 1; i > 0; i--){
    // tujuan penamabahan satu agar index maksimal/index paling besar juga bisa terpilih
    const randomIndex  = Math.floor(Math.random() * (i + 1));

    [shuffledSongs[i], shuffledSongs[randomIndex]] = [shuffledSongs[randomIndex], shuffledSongs[i]]
  }

  return shuffledSongs

}



function GroupSongBasedOnArtist(songs,artist){
  const artistNameLowerCase = artist.toLowerCase()
  const result = [...songs].filter((song) => song.artist.toLowerCase() === artistNameLowerCase)
  return {artist: artistNameLowerCase, result}
}
function GroupSongBasedOnGenre(songs,genre){
  const genreNameLowerCase = genre.toLowerCase()
  const result = [...songs].filter((song) => song.genre.toLowerCase() === genreNameLowerCase)
  return {genre: genreNameLowerCase, result}
}
function GroupSongBasedOnDuratino(songs){
  const shuffledSongs = Shuffle(songs)
  let totalDuration = 0;
  const result = []

  for(const song of shuffledSongs){
    if(song.durationInMinutes + totalDuration < 60){
      result.push(song);
      totalDuration += song.durationInMinutes
    }
  }
  return {
    totalDuration,
    result
  }
}

// console.log(GroupSongBasedOnArtist(songs, "Mac Miller"));
// console.log(GroupSongBasedOnArtist(songs, "J cole"));


// console.log(GroupSongBasedOnGenre(songs, "Jazz"));
// console.log(GroupSongBasedOnGenre(songs, "pop"));

console.log(GroupSongBasedOnDuratino(songs));


