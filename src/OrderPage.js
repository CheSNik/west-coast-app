import React from "react";
import logo from "./logo.png";
import OrderForm from "./OrderForm";

export default function OrderPage() {
  return (
    <div className="container-fluid">
      <Header />
      <OrderForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <img src={logo} alt="icon" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="row offset-1">
      <div className="col-12">
        <p className="text-muted credit">@West Coast Aplliance services</p>
      </div>
    </div>
  );
}
