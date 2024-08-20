export function FilteringSearch(items, searchValue){
    const searchedItems = ()=> items.filter((item)=>{
        return item.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
      })

    return {searchedItems}
} 