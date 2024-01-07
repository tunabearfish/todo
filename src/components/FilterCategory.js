import React from "react";

const FilterCategory = ({categories, selectedCategories, onSelectCategories}) =>(
    <div>
        <label> Filter by Category:</label>
        <select
            value={selectedCategories}
            onChange={(e) => onSelectCategories(e.target.value)}
        >
            {categories.map((category) =>(
                <option key={category} value = {category}>
                    {category}
                </option>
            ))}
         </select>
    </div>
);
//ready
export default FilterCategory;