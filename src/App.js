import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  // カスタムフックの利用
  // 関数を実行し返却値を分割代入で受け取る
  const { userList, isLooding, isError, onClickFetchUsers } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUsers}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLooding ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}: ${user.name} (${user.age}歳)`}</p>
        ))
      )}
    </div>
  );
};
