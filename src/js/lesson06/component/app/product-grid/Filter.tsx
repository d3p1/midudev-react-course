/**
 * @description Filter component for product grid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  useState,
  useId,
  type ChangeEvent,
  type SetStateAction,
  type Dispatch,
} from 'react'
import type {Filter as FilterType} from '../../../types'

export default function Filter({
  changeFilter,
}: {
  changeFilter: Dispatch<SetStateAction<FilterType>>
}) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceRangeFieldId = useId()
  const categoryFieldId = useId()

  const handleMinPriceChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement
    const value = Number(input.value)
    setMinPrice(value)
    changeFilter((prevState) => ({
      ...prevState,
      minPrice: value,
    }))
  }

  const handleCategoryChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement
    changeFilter((prevState) => ({
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
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <span>${minPrice}</span>
      </div>

      <div className="flex flex-row gap-2 justify-center items-center">
        <label htmlFor={categoryFieldId}>Category</label>
        <select
          id={categoryFieldId}
          className="bg-secondary text-primary-900 p-2"
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="groceries">Groceries</option>
          <option value="skincare">Skincare</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </div>
  )
}
