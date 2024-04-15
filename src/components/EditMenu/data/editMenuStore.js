import { create } from "zustand";
import courses from '../../MenuPage/menuList';
import { saveToApi, loadFromApi } from '../../API/Api';

export const editMenuStore = create((set, get) => ({
    menu: courses,

    initializeMenu: async () => {
        try {
            const menuData = await loadFromApi();
            if (menuData) {
                set({ menu: menuData });  // Установка загруженных данных
            } else {
                console.error('No valid data returned from API, using initial courses.');
                set({ menu: courses });  // Использование начальных данных
            }
        } catch (error) {
            console.error('Failed to load menu:', error);
            set({ menu: courses });  // Использование начальных данных в случае ошибки
        }
    },

    addMenuItem: async (item) => {
        const newItem = { ...item, id: Date.now() }; // Ensure new items have a unique ID
        const updatedMenu = [...get().menu, newItem];
        set({ menu: updatedMenu });
        await saveToApi(updatedMenu).then(response => {
            console.log('Save result: ', response);
        }).catch(error => {
            console.error('Error saving menu:', error);
        });
    },

    deleteMenuItem: async (id) => {
        const updatedMenu = get().menu.filter(item => item.id !== id);
        set({ menu: updatedMenu });
        await saveToApi(updatedMenu).then(response => {
            console.log('Delete result: ', response);
        }).catch(error => {
            console.error('Error saving menu after delete:', error);
        });
    },

    updateMenuItem: async (updatedItem) => {
        const updatedMenu = get().menu.map(item =>
            item.id === updatedItem.id ? { ...updatedItem } : item
        );
        set({ menu: updatedMenu });
        await saveToApi(updatedMenu).then(response => {
            console.log('Update result: ', response);
        }).catch(error => {
            console.error('Error saving menu after update:', error);
        });
    },

    resetMenu: async () => {
        set({ menu: courses });
        await saveToApi(courses).then(response => {
            console.log('Menu reset to initial state and saved to API:', response);
        }).catch(error => {
            console.error('Error saving the reset menu to API:', error);
        });
    }
}));
