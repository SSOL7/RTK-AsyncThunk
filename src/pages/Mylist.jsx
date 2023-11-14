import { useDispatch, useSelector } from "react-redux";

function Mylist({}) {
  const favorites = useSelector((state) => state.posts.favorites);

  console.log(`Mylist: ${JSON.stringify(favorites)}`);

  return (
    <div>
      <div>
        <h1>My List</h1>
        {favorites.map((post, index) => (
          <div key={index}>
            <h2 style={{ backgroundColor: "white" }}>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mylist;
