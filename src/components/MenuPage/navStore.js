import { create } from 'zustand'


export const navStore = create((set) => ({
	guest: 1,
	selectedCourses: 0,
	requiredCourses: 3,
	shoppingCart: [],
	inc: () => set((state) => ({ guests: state.select + 1 })),
	set,
}))



