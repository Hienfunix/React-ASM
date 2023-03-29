import React from "react";
import search from "../data/search.json";
import SearchListItem from "./SearchListItem";
function SearchList() {
    return(
        <div>
            {search.map(searchList => {
                
                return(
                    <div>
                        <SearchListItem 
                        imgSrc={searchList.image_url} 
                        name={searchList.name} 
                        distance={searchList.distance} 
                        tag={searchList.tag}
                        description={searchList.description}
                        type={searchList.type}
                        rate_text={searchList.rate_text}
                        rate={searchList.rate}
                        free_cancel={searchList.free_cancel}
                        price={searchList.price}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SearchList;
