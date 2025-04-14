import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Tim's Film", release_date:"2025"}}/>
      <MovieCard movie={{title: "Joes's Film", release_date:"2024"}}/>
      <MovieCard movie={{title: "Harry's Film", release_date:"2020"}}/>
      </>
  );
}

export default App;