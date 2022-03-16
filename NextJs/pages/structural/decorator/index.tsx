import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { ApiAuthDecorator } from "../../../lib/structural/decorator/ApiAuthDecorator";
import { ApiLogDecorator } from "../../../lib/structural/decorator/ApiLogDecorator";
import { LoginController } from "../../../lib/structural/decorator/LoginController";
import { ProductController } from "../../../lib/structural/decorator/ProductController";
import styles from "../../../styles/Home.module.css";

const loginController = new LoginController();
const productController = new ProductController();

const authLogin = new ApiAuthDecorator(loginController);
const logLogin = new ApiLogDecorator(authLogin);

const logProduct = new ApiLogDecorator(productController);

const DecoratorPage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Decorator Pattern</h1>
      <div className={styles.description}>
        <p>Login: {loginController.request()}</p>
        <p>Product: {productController.request()}</p>
        
        <p>Auth Login: {authLogin.request()}</p>
        <p>Auth Log: {logLogin.request()}</p>
        <p>Product Log: {logProduct.request()}</p>
      </div>
    </Layout>
  );
};

export default DecoratorPage;
