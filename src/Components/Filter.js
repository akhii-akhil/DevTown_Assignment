import React from 'react'

const Filter = () => {
    return (
        <div className="filter-sort">
        <label>
          Sort by Price:
          <select onChange={handleSort}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
        <label>
          Filter by Category:
          <select onChange={handleFilter}>
            <option value="all">All</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            {/* Add more categories */}
          </select>
        </label>
      </div>
  )
}

export default Filter