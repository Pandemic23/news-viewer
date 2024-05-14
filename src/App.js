import { Route, Routes } from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {
  return (
    <Routes>
      {' '}
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
