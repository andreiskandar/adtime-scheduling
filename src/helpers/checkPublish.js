import React from 'react'
import { Dialog } from '@material-ui/core';
import Unpublished from '../components/Schedule/components/notPublished/UnpublishedAlert'

const checkPublish = (publish, setPublish, wording, setWording, shift, role, open, handleClose, openAlert) => {
  console.log(shift)
  const publishCheck = shift[0]
  console.log(publishCheck)
  if (publishCheck) {
    if (publishCheck.ispublished === true && publish === false) {
      setPublish(true)
      setWording('Unpublish')
    } else if (publishCheck.ispublished === false && publish === true) {
      setPublish(false)
      setWording('Publish')
      openAlert();
    }
  } else {
    setPublish(false)
    setWording('Publish')
    openAlert();
  }
}

export default checkPublish;