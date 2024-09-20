'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, PasswordSetting, Preferences } from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="User" />

      {/* General Settings */}
      <UserSetting />

      {/* Email Settings */}
      <PasswordSetting />

      {/* Delete Your Account */}
      <DeleteAccount />

    </Container>
  )
}

export default Settings