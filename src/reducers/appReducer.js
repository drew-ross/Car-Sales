import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/appActions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            const newFeature = state.additionalFeatures.filter(feature => feature.id === action.payload)[0];
            const updatedAdditionalFeatures = state.additionalFeatures.filter(feature => feature.id !== action.payload);
            return {
                ...state,
                additionalPrice: (state.additionalPrice + newFeature.price),
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        newFeature
                    ]
                },
                additionalFeatures: updatedAdditionalFeatures
            };
        case REMOVE_FEATURE:
            const removedFeature = state.car.features.filter(feature => feature.id === action.payload)[0];
            const updatedFeatures = state.car.features.filter(feature => feature.id !== action.payload);
            return {
                ...state,
                additionalPrice: (state.additionalPrice - removedFeature.price),
                car: {
                    ...state.car,
                    features: updatedFeatures
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    removedFeature
                ]
            };
        default:
            return state;
    };
};