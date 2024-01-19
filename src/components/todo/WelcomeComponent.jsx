import { useParams, Link } from "react-router-dom";
export default function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="welcome-component">
      <h1>Welcome {username}</h1>
      <p>
        manage Your Todos <Link to={`/todos`}>click here</Link>
      </p>
    </div>
  );
}
