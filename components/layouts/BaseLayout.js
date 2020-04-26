import React from 'react'
import Header from './../shared/Header'

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user } = props
  const headerType = props.headerType || 'default'
  return (
    <div className='layout-container'>
      {headerType === 'index' && <Header className='port-nav-index' isAuthenticated={isAuthenticated} user={user} />}
      {headerType === 'default' && <Header className='port-nav-default' isAuthenticated={isAuthenticated} user={user} />}
      <main className={`cover ${className}`}>
        <div className='wrapper'>
          {children}
        </div>
      </main>
    </div>

  )
}

export default BaseLayout
