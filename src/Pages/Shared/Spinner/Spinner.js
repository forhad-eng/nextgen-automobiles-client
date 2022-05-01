import { css } from '@emotion/react'
import React, { useState } from 'react'
import { PuffLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

const Spinner = () => {
    let [loading] = useState(true)

    return <PuffLoader loading={loading} css={override} size={80} />
}

export default Spinner
