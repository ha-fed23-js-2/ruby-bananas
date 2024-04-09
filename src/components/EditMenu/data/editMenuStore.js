import { create } from "zustand"
import courses from '../../MenuPage/menuList'

console.log('courses: ', courses);
export const editMenuStore = create((set) => ({
    menu: [],
    //funktion för att lägga till en Menu-Item
    addMenuItem: (item) =>
    set((state) => ({
        menu: [
            ...state.menu,
        {
            id: Date.now(),
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image
        }
    ]

    })),

    deleteMenuItem: (id)=>
    set((state) => ({menu: state.menu.filter(item => item.id !== id) })),


    updateMenuItem: (updatedMenuItem) => set((state) => ({
        menu: state.menu.map(item =>
            item.id === updatedMenuItem.id ? {
                ...item,
                name: updatedMenuItem.name,
                description: updatedMenuItem.description,
                price: updatedMenuItem.price,
                image: updatedMenuItem.image
            } : item)
    }))
}))