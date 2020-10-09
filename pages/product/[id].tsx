import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const id = useRouter().query.id
  const [product, setProduct] = useState({});

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
    .then(response => response.json())
    .then(response => {
      setProduct(response)
    })
  }, [])

  return (
    <section>
      <h1>Página producto: {product.name}</h1>
    </section>
  )
}

export default ProductPage
