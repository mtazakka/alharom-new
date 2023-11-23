import { create } from 'zustand';

const initialState = {
    userInfo: null,
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
};

const useUserInfoStore = create((set) => ({
    userInfo: initialState.userInfo,
    setUserInfo: (val) => {
        set({ userInfo: val });
    },
    token: initialState.token,
    setToken: (val) => {
        localStorage.setItem('token', val);
        set({ token: val });
    },
    removeToken: () => localStorage.removeItem('token'),
    role: initialState.role,
    setRole: (val) => {
        localStorage.setItem('role', val);
        set({ role: val });
    },
    removeRole: () => localStorage.removeItem('role'),
}));

export default useUserInfoStore;
