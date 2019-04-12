import React from 'react';
import { Layout } from "antd/lib/index";
import { css } from '@emotion/core';

const footerCls = css`
text-align: center;
background: #04070b;
color: #fff;
`;

const AppFooter = Layout.Footer;

const Footer = () => (
    <AppFooter css={footerCls}>
        bla bla bla
    </AppFooter>
);

export default Footer;