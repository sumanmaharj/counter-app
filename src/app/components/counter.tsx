import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { increament, decreament, reset } from "../state/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-svh">
      <div className="w-2xs">
        <h1 className="text-2xl center mb-5 text-center uppercase">
          Counter App
        </h1>
        <div className=" bg-cyan-800 px-3 py-6 rounded-xl ">
          <h2 className="transition-all duration-500 ease-in-out mb-4 text-center ">
            {" "}
            <span className="text-3xl " > {count}</span>
          </h2>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => dispatch(decreament())}
              className="hover:bg-cyan-700 transition-all w-8 h-8 inline-flex bg-cyan-50/10 rounded-full justify-center items-center cursor-pointer"
            >
              -
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="hover:bg-cyan-700 transition-all px-3 h-8 inline-flex bg-cyan-50/10 rounded-full justify-center items-center cursor-pointer"
            >
              Reset
            </button>
            <button
              onClick={() => dispatch(increament())}
              className="hover:bg-cyan-700 transition-all w-8 h-8 inline-flex bg-cyan-50/10 rounded-full justify-center items-center cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
