import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, done } from "../store/modules/todo";

const TodoList = () => {
  const list = useSelector((state) => state.todo.list).filter(
    (item) => !item.done
  );
  console.log(list);

  const dispatch = useDispatch();
  const ref = useRef();

  const onClick = () => {
    dispatch(create({ id: list.length, text: ref.current.value, done: false }));
    ref.current.value = "";
  };

  return (
    <div>
      <input ref={ref} placeholder="해야할 일" />
      <button onClick={onClick}>등록</button>
      <h1>할일목록</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => {
                  dispatch(done(item.id));
                }}
              >
                {" "}
                체크{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
