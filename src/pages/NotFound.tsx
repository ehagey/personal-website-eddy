import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 400, color: 'var(--site-text)', marginBottom: '10px' }}>
          Page not found
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--site-text-muted)', marginBottom: '15px' }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <a href="/" style={{ fontSize: '14px', color: 'var(--site-link)', textDecoration: 'underline' }}>
          Return to home
        </a>
      </main>
    </>
  );
};

export default NotFound;
