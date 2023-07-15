export interface CalculationState {
    result: number;
}

const initialState: CalculationState = {
    result: 0,
};

interface CalculationAction {
    type: "+" | "-" | "*" | "/";
    payload: { value1: number; value2: number };
}

export default function calculationReducer(
    state: CalculationState = initialState,
    action: CalculationAction
) {
    switch (action.type) {
        case "+":
            return {
                ...state,
                result: action.payload.value1 + action.payload.value2,
            };
        case "-":
            return {
                ...state,
                result: action.payload.value1 - action.payload.value2,
            };
        case "*":
            return {
                ...state,
                result: action.payload.value1 * action.payload.value2,
            };
        case "/":
            return {
                ...state,
                result: action.payload.value1 / action.payload.value2,
            };
        default:
            return state;
    }
}
