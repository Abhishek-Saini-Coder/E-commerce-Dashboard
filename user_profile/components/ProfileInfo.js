import { useState, useEffect } from "react";

export default function ProfileInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@example.com",
        joinDate: "2023-01-01",
      });
    }, 1000);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Join Date: {user.joinDate}</p>
    </div>
  );
}
