import React from 'react'

function useLocalStorage (itenName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() =>{
      setTimeout(()=> {
        const localStorageItem = localStorage.getItem(itenName)
        let parsedItem;
  
        if (!localStorageItem){
          localStorage.setItem(itenName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      },1000)
    });
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itenName, stringifiedItem);
      setItem(newItem);
    }
  
    return {
      item,
      saveItem,
      loading,
    };
  
  }

export {useLocalStorage};