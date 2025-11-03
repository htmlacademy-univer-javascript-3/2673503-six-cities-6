import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page__main--index-empty">
      <Header/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">6 cities</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 - Page Not Found</b>
              <p className="favorites__status-description">
                Oops! Looks like the page you are looking for does not exist.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>);
}
