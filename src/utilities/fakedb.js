// use local storage as your db for now
const addToDb = (id , count)=> {
  const exists = getDb();
  let foodAdd_cart = {};
  if (!exists) {
    foodAdd_cart[id] = count;
  }
  else {
    foodAdd_cart = JSON.parse(exists);
    if (foodAdd_cart[id]) {
      const newCount = count;
      foodAdd_cart[id] = newCount;
    }
    else {
      foodAdd_cart[id] = count;
    }
  }
  updateDb(foodAdd_cart);
}

const getDb = () => localStorage.getItem('foodAdd_cart');
const updateDb = cart => {
  localStorage.setItem('foodAdd_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const foodAdd_cart = JSON.parse(exists);
    delete foodAdd_cart[id];
    updateDb(foodAdd_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}


const processOrder =() => {
  localStorage.removeItem('foodAdd_cart'); 
}

export { processOrder,getDb,addToDb,removeFromDb, removeFromDb as deleteFromDb, getStoredCart }
