import { useState } from "react";
import axios from "axios";

export const App = () => {
  const [useList, setUseList] = useState([]);
  const [isLooding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUsers = () => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get("/users.json")
      .then((result) => {
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        setUseList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <button onClick={onClickFetchUsers}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLooding ? (
        <p>データ取得中です</p>
      ) : (
        useList.map((user) => (
          <p key={user.id}>{`${user.id}: ${user.name} (${user.age}歳)`}</p>
        ))
      )}
    </div>
  );
};
