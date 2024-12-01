import React, { useState } from 'react'
import { GeneralError } from '../../../utils/error/GeneralError'

export const OptionChange = () => {
    const [state,setState]=useState('false')
  return (
      <div>
          <GeneralError setStatus={setState} status={state}/> 
    </div>
  )
}
