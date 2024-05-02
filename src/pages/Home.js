import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-4">Homeページ</h1>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/map'}>mapを開く</Link>
      </div>
    </>
  );
}

export default Home;