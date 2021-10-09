import { FC } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './common/store';
import { fetchTicketsChaining } from './feature/tickets/ticketsSlice';
import IndexPage from './common/pages/index';

store.dispatch(fetchTicketsChaining());

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
    }
    :root {
        --color-text: #4A4A4A;
        --color-text-gray: #A0B0B9;
        --color-blue: #2196F3;
        --size-text: 12px;
        --height-text: 18px;
        --font: 'Open Sans', sans-serif;
        --bg-color-list-hover: #F1FCFF;
        --bg-color-wrapper-default: #FFF;
        --bg-color-body: #f3f7fa;
        --border-color: #DFE5EC;
        --internal-indent: 20px;
        --internal-indent-half: 10px;
        --radius: 5px;

        body {
            color: var(--color-text);
            font-family: var(--font);
            font-size: var(--size-text);
            line-height: var(--height-text);
            background-color: var(--bg-color-body);
        }
    }
`;

const App: FC = () => {
    return <Provider store={ store }>
        <IndexPage />
    </Provider>;
}

render(
    <>
        <GlobalStyle />
        <App />
        
    </>,
    document.getElementById('root')
);