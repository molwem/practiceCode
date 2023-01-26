import { Counter } from "./calculatorComponents/calculatorBody"
import { Provider } from 'react-redux';
import store from "./store";


const ReduxCalculator = () => {
    return (
        <h1>Here lies a calculator attempt</h1>,
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default ReduxCalculator;