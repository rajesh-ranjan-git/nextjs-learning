import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <h1>Products list</h1>
      <h3>
        <Link href="/products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="/products/2">Product 2</Link>
      </h3>
      <h3>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h3>
      <h3>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h3>
      <Link href="/">Got To Home</Link>
    </>
  );
}
