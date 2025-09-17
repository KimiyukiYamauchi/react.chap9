import { useState } from "react";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([{ id: 1 }]);

  const onClickFetchUsers = () => alert("関数実行");

  return { userList, onClickFetchUsers };
};
