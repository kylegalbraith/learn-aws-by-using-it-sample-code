import React from 'react'
import Link from 'gatsby-link'
import bookImage from '../images/medium-card.png'
import ContactForm from '../components/ContactForm'

const IndexPage = () => (
  <div>
    <img src={bookImage} alt="Book Image" />
    <h1>This site lives in S3</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ContactForm />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
