import { create } from 'zustand'

const navStore = create((set) => ({
	guest: 1,
	courses: 0,
	requierdCourses: 1 * 3,
	inc: () => set((state) => ({ guests: state.select + 1 })),
}))

function guestCounter() {
	const { guest, inc } = useStore()

}

export default {navStore, guestCounter}