import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            defaultUrl: url
            image
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    author,
    defaultUrl,
    image,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    titleTemplate: `%s | ${defaultTitle}`,
    description: defaultDescription || description,
    image: `${defaultUrl}${image}`,
    author,
    url: defaultUrl || url,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={seo.title}
        titleTemplate={seo.titleTemplate}
        meta={[
          {
            name: `description`,
            content: seo.description,
          },
          {
            name: `image`,
            content: seo.image,
          },
          {
            property: `og:title`,
            content: seo.title,
          },
          {
            property: `og:description`,
            content: seo.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:url`,
            content: seo.url,
          },
          {
            property: `og:image`,
            content: seo.image,
          },
          {
            property: `og:image:alt`,
            content: `Bino Portfolio`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: seo?.author || ``,
          },
          {
            name: `twitter:title`,
            content: seo.title,
          },
          {
            name: `twitter:description`,
            content: seo.description,
          },
          {
            name: `twitter:url`,
            content: seo.url,
          },
          {
            name: `twitter:image`,
            content: seo.image,
          },
        ]}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
