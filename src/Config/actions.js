export const addUserAction = (user) => {
    return { type: "Add_user", payload: user };
};

export const updateUserAction = (newUser) => {
    return { type: "Update_user", payload: newUser };
};

export const deleteUserAction = (id) => {
    return { type: "Delete_user", payload: id };
};