import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';


export const FeedbackForm = () => {
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const onVerify = useCallback((token) => {
    console.log("recaptcha verfied!")
    setToken(token);
  });

  const doSomething = () => {
    /* do something like submit a form and then refresh recaptcha */
    console.log(token)
    setRefreshReCaptcha(r => !r);
  }



  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdkmRcqAAAAAOybRT-qbZoyU-740gkslHNQxGEo">

      <GoogleReCaptcha
        onVerify={onVerify}
        refreshReCaptcha={refreshReCaptcha}
      />

      <button onClick={doSomething}>
        Do Something
      </button>

    </GoogleReCaptchaProvider>
  )
}