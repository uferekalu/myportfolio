import '../styles/global.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My profile',
  description: 'Projects as a Full Stack JavaScript Developer',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div
          style={{
            display: 'flex',
            width: '100%',
            margin: 0,
            padding: 0,
            flexDirection: 'column',
            overflowX: 'hidden',
          }}
        >
          <Nav />
          {children}
          <Footer />
        </div>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
