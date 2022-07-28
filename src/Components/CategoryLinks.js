import React from 'react'

const CategoryLinks = ({filterByCategory, allLinksCategory}) => {

    const onFiltering = (cat) => {
        filterByCategory(cat)
    }

    return (
    <ul className="category-links">
        {
            allLinksCategory.length >= 1 ? ( allLinksCategory.map( cat => {
                return (
                    <li key={cat} onClick={ () => onFiltering(cat) }>{cat}</li>
                )
            } ) ) : <h3>No Links</h3>
        }
    </ul>
    )
}

export default CategoryLinks