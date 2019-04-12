import React from "react";
import Head from "next/head";
import { css } from '@emotion/core';
import { node, string, oneOfType, object } from "prop-types";
import { Layout } from "antd/lib/index";

const layoutCls = css`
  background: #152530;
  color: #fff;
  font-family: Lato;
`;

const Container = ({ children, title = "Movies Store" }) => (
  <Layout css={layoutCls} className="layout">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Layout>
);

Container.propTypes = {
  children: oneOfType([node, string]),
  title: string
};

export default Container;
