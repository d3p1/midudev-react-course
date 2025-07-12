/**
 * @description Filter component for product grid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useId, type ChangeEvent} from 'react'
import useFilter from '../../../hook/useFilter.ts'

const categories = [
  {key: 'all', label: 'All'},
  {key: 'smartphones', label: 'Smartphones'},
  {key: 'laptops', label: 'Laptops'},
  {key: 'home-decoration', label: 'Home decoration'},
  {key: 'groceries', label: 'Groceries'},
  {key: 'skincare', label: 'Skincare'},
  {key: 'fragrances', label: 'Fragrances'},
]

export default function Filter() {
  const {filter, setFilter} = useFilter()
  const minPriceRangeFieldId = useId()
  const categoryFieldId = useId()

  const handleMinPriceChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement
    const value = Number(input.value)
    setFilter((prevState) => ({
      ...prevState,
      minPrice: value,
    }))
  }

  const handleCategoryChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement
    setFilter((prevState) => ({
      ...prevState,
      category: input.value,
    }))
  }

  return (
    <div className="flex flex-row justify-between items-center text-sm italic p-3">
      <div className="flex flex-row gap-2 justify-center items-center">
        <label htmlFor={minPriceRangeFieldId}>From price:</label>
        <input
          type="range"
          min="0"
          max="10000"
          id={minPriceRangeFieldId}
          value={filter.minPrice}
          onChange={handleMinPriceChange}
        />
        <span>${filter.minPrice}</span>
      </div>

      <div className="flex flex-row gap-2 justify-center items-center">
        <label htmlFor={categoryFieldId}>Category</label>
        <select
          id={categoryFieldId}
          className="bg-secondary text-primary-900 p-2"
          value={filter.category}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category.key} value={category.key}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
