import Header from '../components/Header/Header';
import Preview from '../components/Preview/Preview';
import QuotesСarousel from '../components/QuotesСarousel/QuotesСarousel';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Preview />
        <QuotesСarousel />
      </main>
    </>
  );
};

export default HomePage;
