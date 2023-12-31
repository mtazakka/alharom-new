// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Snackbar from 'components/@extended/Snackbar';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
      <Snackbar />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
