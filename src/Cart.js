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
  const tCart = [
    {
      name: "Machine Learning",
      price: "$29.99",
    },
    {
      name: "Web Development",
      price: "$59.99",
    },
    {
      name: "App Development",
      price: "$69.99",
    },
  ];

  return (
    <div className="App">
      <div className="bgGrad">
        <TopBar />
        <header className="App-header">
          <div className="w-fit min-h-[90vh] sm:w-[80vw] max-w-[1400px] mt-[3.5rem] h-full flex flex-col gap-3 drop-shadow-2x">
            {Object.keys(reduxStore.cart.cart).length !== 0 && (
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
                <div className=" bg-gray-900 rounded-xl text-left p-3">
                  <div className="grid grid-cols-[2fr,1fr] pb-2">
                    <div className="font-semibold text-lg">Product</div>
                    <div className="font-semibold text-lg">Product</div>
                  </div>
                  <div className="text-2xl">
                    {Object.values(reduxStore.cart.cart).map((course) => (
                      <motion.div
                        whileHover={{ boxShadow: "0px 5px 8px black" }}
                        className="grid grid-cols-[2fr,1fr] items-center border-t border-gray-700"
                      >
                        <div className="font-semibold text-2xl h-40 items-center flex p-2 gap-4">
                          <motion.div
                            className="flex lg:hidden xl:block h-[75%] aspect-square gradSquare rounded-xl"
                            style={{ background: gradient(course.name) }}
                            whileHover={{
                              boxShadow: `0 0 15px rgba(0, 0, 0, 0.7)  `,
                              opacity: "90%",
                            }}
                          />
                          {course.name}
                        </div>
                        <div className="font-semibold text-4xl flex justify-between pr-4">
                          {course.price}
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

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-auto mr-auto  p-[0.9rem] text-lg lg:text-2xl font-semibold bg-gray-900 rounded-xl"
                >
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => (window.location.href = "#/cart")}
                  >
                    Complete Payment <ArrowRightCircleFill />
                  </div>
                </motion.button>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Cart;
