import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import ourStore from './core/store';
import MainPage from "./MainPage";

const container = document.querySelector('#main');

ReactDom.render(
    <Provider store={ ourStore() }>
        <StylesProvider>
            <MainPage />
        </StylesProvider>
    </Provider>,
    container
);
