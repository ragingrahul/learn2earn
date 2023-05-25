import React from "react";
import TopBar from "./TopBar";
import gradient from "random-gradient";
import { motion } from "framer-motion";
import { ArrowRightCircleFill, XCircleFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "./redux/actions";

function Cart() {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);

  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <header className="App-header">
          <div className="w-fit min-h-[94vh] sm:w-[80vw] max-w-[1400px] mt-[3.5rem] h-full flex flex-col gap-3 drop-shadow-2x">
            {Object.keys(reduxStore.cart.cart).length !== 0 ? (
              <>
                <div className="italic text-left font-semibold text-6xl p-2 text-gray-100 flex items-center gap-4">
                  Cart
                  <div
                    className="text-left font-semibold italic w-fit text-xl bg-gray-800 px-2 py-0.5 rounded-xl hover:cursor-pointer"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear All
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl text-left p-3 pb-0">
                  <div className="grid grid-cols-[2fr,1fr]">
                    <div className="font-semibold text-lg">Product</div>
                    <div className="font-semibold text-lg border-gray-700 h-full items-center border-l pb-2 pl-5">
                      Price
                    </div>
                  </div>
                  <div className="text-2xl sm:max-h-[325px] xl:max-h-[425px] 2xl:max-h-[725px] overflow-scroll">
                    {Object.values(reduxStore.cart.cart).map((course) => (
                      <motion.div
                        whileHover={{ boxShadow: "0px 5px 8px black" }}
                        className="grid grid-cols-[2fr,1fr] items-center border-t border-gray-700"
                      >
                        <div className="font-semibold text-2xl h-40 items-center flex p-2 gap-4">
                          <motion.div
                            className="flex block h-[75%] aspect-square gradSquare rounded-xl"
                            style={{ background: gradient(course.name) }}
                            whileHover={{
                              boxShadow: `0 0 15px rgba(0, 0, 0, 0.7)  `,
                              opacity: "90%",
                            }}
                          />
                          {course.name}
                        </div>
                        <div className="font-semibold text-4xl flex justify-between pr-4 border-l border-gray-700 h-full items-center pl-5">
                          <div className="flex flex-col">
                            {course.price}
                            <div className="text-base italic text-gray-400">
                              Completion Earnings:{" "}
                              <span className="text-blue-300">
                                ${parseFloat(course.price.slice(1)) * 1.5}
                              </span>
                            </div>
                          </div>
                          <motion.button
                            className="text-gray-600 text-2xl flex items-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              dispatch(
                                removeFromCart({
                                  name: course.name,
                                  price: course.price,
                                })
                              )
                            }
                          >
                            <XCircleFill />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl text-left p-3">
                  <div className="font-semibold text-lg border-b border-gray-700 grid grid-cols-[2fr,1fr]">
                    <div className="pb-2">Summary</div>
                    <div className="border-gray-700 h-full items-center border-l pb-2 pl-5">
                      Total Price
                    </div>
                  </div>
                  <div className="grid grid-cols-[2fr,1fr] items-center font-semibold">
                    <div>
                      {Object.values(reduxStore.cart.cart).length} Courses
                    </div>
                    <div className="border-l border-gray-700 h-full items-center pl-5 pr-4 pt-2">
                      <div>
                        $
                        {parseFloat(
                          Object.values(reduxStore.cart.cart)
                            .reduce((a, b) => {
                              const result = a + parseFloat(b.price.slice(1));
                              return result;
                            }, 0)
                            .toFixed(2)
                        )
                          .toString()
                          .padEnd(6, "0")}
                      </div>
                      <div className="text-base italic text-gray-400 -mt-2">
                        Total Completion Earnings:{" "}
                        <span className="text-green-300 text-xl">
                          $
                          {parseFloat(
                            Object.values(reduxStore.cart.cart)
                              .reduce((a, b) => {
                                const result =
                                  a + parseFloat(b.price.slice(1)) * 1.5;
                                return result;
                              }, 0)
                              .toFixed(2)
                          )
                            .toString()
                            .padEnd(6, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
<div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-auto fixed shadow-md shadow-gray-800 h-lg:static bottom-7 mr-auto bg-gray-400 bg-opacity-20  p-[0.9rem] text-lg lg:text-2xl font-semibold backdrop-blur-md rounded-xl"
                >
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => (window.location.href = "#/cart")}
                  >
                    Complete Payment <ArrowRightCircleFill />
                  </div>
                </motion.button>
                </div>
              </>
            ) : (
              <div className="justify-center items-center flex h-[80vh] flex-col gap-3 font-semibold">
                <div>No items in cart</div>
                <div className="flex flex-row gap-10">
                  <button className="gradHighlight p-[0.9rem] text-lg lg:text-2xl font-semibold hover:bg-black">
                    <div
                      className="flex flex-row items-center gap-2"
                      onClick={() => (window.location.href = "#/courses")}
                    >
                      Go to Courses <ArrowRightCircleFill />
                    </div>
                  </button>
                  <button className="gradHighlight p-[0.9rem] text-lg lg:text-2xl font-semibold hover:bg-black">
                    <div
                      className="flex flex-row items-center gap-2"
                      onClick={() => (window.location.href = "#/specials")}
                    >
                      Go to Specializations <ArrowRightCircleFill />
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Cart;
