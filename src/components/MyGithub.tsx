"use client";
import React from "react";
import UserCard from "../components/ui/GHUserCard";
import { GRAD_GOTHAN_TB } from "../tw_gradients";

interface UserData {
  id: number;
  // Add other properties here
}

const FetchApi: React.FC = () => {
  const [data, setData] = React.useState<UserData | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mcpdigital");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data?.id) {
    return <p>No data found</p>;
  }
  // The key bellow is needed when maping multiple users REACT maps it, so since each user have an id, a single user can pass it too anyway
  return (
    <div className={GRAD_GOTHAN_TB + " flex flex-row gap-2 p-4"}>
      <div className="">
        <UserCard key={data.id} user={data} />
      </div>
    </div>
  );
};

export default FetchApi;
