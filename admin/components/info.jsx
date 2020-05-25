import React from 'react'

import { WrapperBox, StyledButton} from 'admin-bro/components'

const Info = (props) => {
  return (
    <WrapperBox border className="content">
      <h3>Demo Information</h3>
      <p>Welcome to <b>AdminBro</b> example Page</p>
      <p>
        <b>AdminBro</b> is an Autogenerated Admin Panel for Node.js apps.
        By using it you can create an admin like this with no effort at all.
      </p>
      <p>
        It is based on React. 
      </p>
      <p>
        For different use cases visit resources
        in the Navigation Sidebar. I wish you a <b>Happy scrolling throughout the page</b>
      </p>
      <p>If you like it make sure to</p>
      <p>
        <StyledButton as="a" href="https://softwarebrothers.github.io/admin-bro-dev/">
          Check out the documentation
        </StyledButton>
      </p>
      <p>and</p>
      <p>
        <StyledButton as="a" href="https://github.com/SoftwareBrothers/admin-bro" primary>
          <span className='fa fa-star' /> Star it on Github
        </StyledButton>
      </p>
      <p>
        Source code for this example can also be found
        <a href="https://github.com/SoftwareBrothers/admin-bro-example-app"> on GitHub</a>
      </p>
    </WrapperBox>
  )
}

export default Info
