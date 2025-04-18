import React from 'react'
import ButtonLoader from '../buttonLoader'

const CustomBlackBtn = ({ isSubmitting, btnText, color = "black" }) => {
  return (
    <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-md  px-3 py-2 text-white focus:bg-gray-600 focus:outline-none`}
        style={{
          backgroundColor : color
        }}
        >
    { isSubmitting ? <ButtonLoader />: btnText }
    </button>
  )
}

export default CustomBlackBtn