import Header from '../containers/Header/Header';
import Preview from '../components/Preview/Preview';
import QuotesСarousel from '../containers/QuotesСarousel/QuotesСarousel';

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
