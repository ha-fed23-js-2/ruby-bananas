import { create } from 'zustand';




export const navStore = create((set) => ({
   guests: 1,
   requiredDishes: 3,
   shoppingCart: [],
   totalSelectedCourses: 0, // Не используется напрямую, но оставлено для примера
   addToBasket: (course) => set((state) => {
       const index = state.shoppingCart.findIndex(item => item.id === course.id);
       let newCart = [...state.shoppingCart];
       let newTotal = state.totalSelectedCourses;

       if (index === -1) {
           newCart.push({ ...course, quantity: 1 });
           newTotal += 1;
       } else {
           const updatedItem = { ...newCart[index], quantity: newCart[index].quantity + 1 };
           newCart[index] = updatedItem;
           newTotal += 1;
       }

       return {
           shoppingCart: newCart,
           totalSelectedCourses: newTotal,
       };
   }),

   plusOneInBasket: (id) => set((state) => {
    const index = state.shoppingCart.findIndex(item => item.id === id);
    if (index === -1) {
        // Om kursen inte finns i varukorgen, returnera aktuellt tillstånd
        return state;
    }

    const newCart = [...state.shoppingCart];
    const updatedItem = { ...newCart[index], quantity: newCart[index].quantity + 1 };

    newCart[index] = updatedItem;

    const newTotal = state.totalSelectedCourses + 1; // Öka den totala valda kursmängden med 1

    return {
        shoppingCart: newCart,
        totalSelectedCourses: newTotal,
    };
}),

   removeFromBasket: (id) => set((state) => {
       const newCart = state.shoppingCart.filter(item => item.id !== id);
       const newTotal = newCart.reduce((acc, item) => acc + item.quantity, 0);

       return {
           shoppingCart: newCart,
           totalSelectedCourses: newTotal,
       };
   }),

   removeOneFromBasket: (id) => set((state) => {
    const index = state.shoppingCart.findIndex(item => item.id === id);
    if (index === -1) {
        return state;
    }

    const newCart = [...state.shoppingCart];
    const updatedItem = { ...newCart[index], quantity: newCart[index].quantity - 1 };

    if (updatedItem.quantity <= 0) {
        newCart.splice(index, 1);
    } else {
        newCart[index] = updatedItem;
    }

    const newTotal = state.totalSelectedCourses - 1;

    return {
        shoppingCart: newCart,
        totalSelectedCourses: newTotal,
    };
}),
    clearShoppingCart: () => set({ shoppingCart: [], totalSelectedCourses: 0, requiredDishes: 3, }),

   handleGuestChange: (event) => {
       const selectedGuests = parseInt(event.target.value, 10);
       set({
           guests: selectedGuests,
           requiredDishes: selectedGuests * 3,
       });
   },
}));
