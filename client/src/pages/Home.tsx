import React from 'react'
import Footer from 'ashishdotme-ui/components/footer'
import Navbar from 'ashishdotme-ui/components/navbar'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      <section className="has-background-link-light hero is-fullheight">
        <div className="hero-body" style={{ padding: '1rem' }}>
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">{children}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Layout
