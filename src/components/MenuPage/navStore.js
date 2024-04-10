import { create } from 'zustand'
// import courses from './menuList'


export const navStore = create((set) => ({
	guests: 1,
	requiredDishes: 3,
	shoppingCart: [],
	addToBasket: (course, setTotalPrice) => {
		set((state) => ({
		  ...state,
		  shoppingCart: [...state.shoppingCart, { ...course, price: course.price }],
		  selectedCourses: state.selectedCourses + 1,
		}));
		// Här hanterar du uppdateringen av totalpriset lokalt
		setTotalPrice((prevPrice) => prevPrice + course.price);
	  },
	handleGuestChange(event) {
		const selectedGuests = event.target.value
	
        set({ guests: selectedGuests,
			 requiredDishes: selectedGuests * 3,
			});
	},
	set,


}))


// TODO
// Gå ingenom store-filen, vad skall vi ha i den? 
// Slå samman navStore & editMenuStore till en????
// Lägg in menyn i navStore
// Byt namn på store?