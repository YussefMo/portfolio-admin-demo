import { Link } from 'react-router-dom';

function Error({ errorCode = 404, message = 'Page Not Found' }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <h1 className="text-custom-blue mb-4 text-6xl font-bold text-foreground">{errorCode}</h1>
      <p className="mb-8 text-2xl text-foreground">{message}</p>
      <Link
        to="/"
        className="bg-custom-blue rounded-lg border px-6 py-3 text-foreground transition duration-300 hover:bg-primary"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error;
