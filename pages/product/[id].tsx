import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { id } = useRouter().query
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    id && window.fetch(`/api/avo/${id}`)
    .then(response => response.json())
    .then(data => {
      setProduct(data)
    })
  }, [id])

  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
    </section>
  )
}

export default ProductPage
