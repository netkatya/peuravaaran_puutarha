import Products from "../components/Products/Products";
import ProductsDelivery from "../components/ProductsDelivery/ProductsDelivery";
import ProductsIntro from "../components/ProductsIntro/ProductsIntro";

export default function ProductPage() {
  return (
    <>
      <ProductsIntro />
      <ProductsDelivery />
      <Products />
    </>
  );
}
