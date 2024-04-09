import { create } from 'zustand'


export const navStore = create((set) => ({
	guests: 1,
	// selectedCourses: 0,
	requiredDishes: 3,
	shoppingCart: [],
	// inc: () => set((state) => ({ guests: state.select + 1 })),
	set,
}))



// TODO: Använd shoppingCart.length för att istället för att använda selectedCourses.
// Gå ingenom store-filen, vad skall vi ha i den? 
// Tydligare namn som breskriver vad saker gör
// Lägg in menyn i navStore
// Byt namn på store?