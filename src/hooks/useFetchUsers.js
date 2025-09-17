import { useState } from "react";
import axios from "axios";

export const useFetchUsers = () => {
  const [userList, setUseList] = useState([]);
  const [isLooding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザ取得ボタン押下アクション
  const onClickFetchUsers = () => {
    // ボタン押下時にローディングフラグをon、エラーフラグをoffにする
    setIsLoading(true);
    setIsError(false);
    axios
      .get("/users.json")
      .then((result) => {
        // 苗字と名前を結合するように変換
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        // ユーザー一覧stateを更新
        setUseList(users);
      })
      // エラーが発生した場合はエラーフラグをonにする
      .catch(() => setIsError(true))
      // 通信完了後にローディングフラグをoffにする
      .finally(() => setIsLoading(false));
  };

  // まとめて返却したいのでオブジェクトを設定する
  return { userList, isLooding, isError, onClickFetchUsers };
};
