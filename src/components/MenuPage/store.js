// store.js
import {create} from 'zustand';
import { courses } from './menuList';

const useStore = create((set) => ({
	courses: courses,
	basket: [],

	addToCheckout: (course) => set((state) => {
		const isCourseInBasket = state.basket.some((item) => item.id === course.id);
		if (!isCourseInBasket) {
			return { basket: [...state.basket, course] };
		}
		return state;
	}),

	removeFromBasket: (courseId) => set((state) => ({
		basket: state.basket.filter((course) => course.id !== courseId)
	})),

	// ... andra actions ...
}));

export default useStore;
