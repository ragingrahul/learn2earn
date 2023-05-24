import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWallet, removeWallet } from "./redux/actions";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { XCircleFill } from "react-bootstrap-icons";

function TopBar() {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  async function requestAccount() {
    console.log("Requesting account");
    if (window.ethereum) {
      console.log("Ethereum object detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        window.ethereum.on("accountsChanged", function () {
          console.log("Account changed");
        });
        dispatch(addWallet(accounts[0]));
        setShow(true);
      } catch (error) {
        console.log("Error requesting account");
        console.error(error);
        setError(true);
        setShow(true);
      }
    } else {
      console.log("Ethereum object not detected");
      setError(true);
      setShow(true);
    }
  }

  function removeAccount() {
    dispatch(removeWallet());
    setShow(true);
  }

  useEffect(() => {
    displayNotification(error);
    console.log(error);
  }, [reduxStore.walletAdd.address, error]);

  function displayNotification(mes) {
    console.log(mes);
    if (error === false) {
      if (reduxStore.walletAdd.address) {
        return (
          <div className="text-xs text-green-800 bg-green-200 font-semibold px-1.5 rounded-xl py-0.5 text-center">
            Connected Wallet
          </div>
        );
      } else {
        return (
          <div className="text-xs text-green-800 bg-green-200 font-semibold px-1.5 rounded-xl py-0.5 text-center">
            Disconnected Wallet
          </div>
        );
      }
    } else {
      return (
        <div className="text-xs text-red-800 bg-red-200 font-semibold px-1.5 rounded-xl py-0.5 text-center">
          Error Connecting Wallet
        </div>
      );
    }
  }

  return (
    <>
      <Navbar
        fixed="top"
        bg="dark"
        className="bg-transparent backdrop-blur-lg"
        variant="dark"
      >
        <ToastContainer
          className="my-4 !w-fit"
          position={"top-center"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={1000}
            autohide
            className="bg-black rounded-xl !w-fit"
          >
            <Toast.Header className="bg-black rounded-xl flex justify-center">
              {displayNotification()}
            </Toast.Header>
          </Toast>
        </ToastContainer>
        <Container className="flex justify-between font-semibold">
          <Navbar.Brand href="#/">Learn2Earn</Navbar.Brand>
          <Nav className="mr-0">
            <Nav.Link href="#/courses">Courses</Nav.Link>
            <Nav.Link href="#/specials">Specializations</Nav.Link>
            <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
          </Nav>
          <div className="flex gap-1">
            <Nav>
              {!reduxStore.walletAdd.address ? (
                <Nav.Link onClick={() => requestAccount()}>
                  Connect Wallet
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => removeAccount()}
                  className="!flex !gap-2 items-center"
                >
                  {reduxStore.walletAdd.address.slice(0, 4)}...
                  {reduxStore.walletAdd.address.slice(-4)} <XCircleFill />
                </Nav.Link>
              )}
            </Nav>
            <Nav className="items-center flex">
              <Nav.Link href="#/cart">
                <div className="flex">
                  <span className="relative">
                    Cart
                    {Object.keys(reduxStore.cart.cart).length !== 0 && (
                      <span className="absolute top-0 -right-1 -mt-2 -mr-2 px-1 text-xs bg-red-500 text-white rounded-full">
                        {Object.keys(reduxStore.cart.cart).length}
                      </span>
                    )}
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
