import { create } from "zustand"


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
    set((state) => ({menu: state.menu.filter(item => item.id !== id) }))
}))