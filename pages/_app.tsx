import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import { mainTheme } from '@themes/theme';
import 'public/css/default.css';
import 'public/css/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
    render(): JSX.Element {
        const { Component, pageProps } = this.props;
        return (
            <>
                <ThemeProvider theme={mainTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}
