//здесь я начал чуть чуть работу с тем что добавил courses 
import { create } from "zustand"
import courses from '../../MenuPage/menuList'


export const editMenuStore = create((set) => ({
    menu: courses, 

    addMenuItem: (item) => set((state) => ({
        menu: [...state.menu, { ...item, id: Date.now() }] 
    })),

    deleteMenuItem: (id) => set((state) => ({
        menu: state.menu.filter(item => item.id !== id) 
    })),

    updateMenuItem: (updatedItem) => set((state) => ({
        menu: state.menu.map(item => item.id === updatedItem.id ? updatedItem : item) 
    }))
}));