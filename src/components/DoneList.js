import React from "react";
import { useSelector } from "react-redux";

const DoneList = () => {
  const list = useSelector((state) => state.todo.list).filter(
    (item) => item.done
  );

  return (
    <>
      {list.length > 0 ? <h1>완료한 목록</h1> : <></>}
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.text}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DoneList;
