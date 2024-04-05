import { create } from 'zustand'

export const navStore = create((set) => ({
	guest: 1,
	courses: 0,
	requiredCourses: 3,
	inc: () => set((state) => ({ guests: state.select + 1 })),
	set,
}))



