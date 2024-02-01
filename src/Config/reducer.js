const initialState = {
    users: [
        { id: 1, name: "Joseph sirta", email: "Josephmechanicrepair@gmail.com", piece: "turbo", quantity: 1, price: 250 },
        { id: 2, name: "jack Rotizo", email: "jackcar@gmail.com", piece: "amortisseur", quantity: 1, price: 250 }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_user":
            return { ...state, users: [...state.users, action.payload] };
        case "Update_user":
            return {
                ...state,
                users: state.users.map((u) => (u.id === parseInt(action.payload.id) ? action.payload : u))
            };
        case "Delete_user":
            return { ...state, users: state.users.filter((u) => u.id !== parseInt(action.payload)) };
        default:
            return state;
    }
};

export default reducer;