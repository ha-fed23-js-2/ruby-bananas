
import { create } from "zustand";
import courses from '../../MenuPage/menuList';
import { saveToApi, loadFromApi } from '../../API/Api';

export const editMenuStore = create((set, get) => ({
    menu: courses, 

    initializeMenu: async () => {
        try {
            const result = await loadFromApi();
            if (result && result.value) {
                set({ menu: result.value });
            } else if (result === null) {
                console.error('Error loading data from API.');
                set({ menu: courses });
            } else {
                console.error('No data returned from API, using initial courses.');
                set({ menu: courses });
            }
        } catch (error) {
            console.error('Failed to load menu:', error);
            set({ menu: courses });
        }
    },
    

    addMenuItem: async (item) => {
        const newItem = { ...item, id: Date.now() };
        const updatedMenu = [...get().menu, newItem];
        set({ menu: updatedMenu });
        const saveResult= await saveToApi(updatedMenu);
        console.log('Save result: ', saveResult);
    },

    deleteMenuItem: async (id) => {
        const updatedMenu = get().menu.filter(item => item.id !== id);
        set({ menu: updatedMenu });
        await saveToApi(updatedMenu);
    },

    updateMenuItem: async (updatedItem) => {
        const updatedMenu = get().menu.map(item =>
            item.id === updatedItem.id ? updatedItem : item
        );
        set({ menu: updatedMenu });
        await saveToApi(updatedMenu);
    }
}));
