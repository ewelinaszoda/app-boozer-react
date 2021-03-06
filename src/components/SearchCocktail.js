import React from 'react'
import {Search} from 'semantic-ui-react'


const SearchCocktail = (props) => {

  return (
    <Search
        type="text"
        placeholder={"Search cocktail..."}
        onSearchChange={(e) => props.updateUserSearch(e)}
        value={props.userSearch}
        size="small"
      />
  )
}

export default SearchCocktail
