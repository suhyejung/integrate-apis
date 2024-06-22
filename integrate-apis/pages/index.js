import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import axios from '@/lib/axios';

export default function Home() {
   const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <Header />
      <Container page>
        <SearchForm />
        <MovieList className={styles.movieList} movies={movies} />
      </Container>
    </>
  );
}
