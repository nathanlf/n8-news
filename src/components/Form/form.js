import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'


export const FeedbackForm = () => {

  const handleSubmitForm = () => {
    /* do something like submit a form and then refresh recaptcha */
    console.log('submit')
  }

  return (
    <div>
    
      <button onClick={handleSubmitForm}>
        Submit
      </button>
    </div>
  )
}