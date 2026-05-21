import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';

const NotFoundPage = () => (
  <PageTransition>
    <section className="container-shell py-10">
      <EmptyState
        title="404 - Page not found"
        description="This route does not exist, but the HashRouter setup ensures valid app routes keep working smoothly on GitHub Pages after refresh."
        actionLabel="Return home"
        actionTo="/"
      />
    </section>
  </PageTransition>
);

export default NotFoundPage;
