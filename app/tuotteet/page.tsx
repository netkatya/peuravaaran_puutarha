import Products from "../components/Products/Products";
import ProductsDelivery from "../components/ProductsDelivery/ProductsDelivery";
import ProductsIntro from "../components/ProductsIntro/ProductsIntro";
import Retailers from "../components/Retailers/Retailers";

export default function ProductPage() {
  return (
    <>
      <ProductsIntro />
      <ProductsDelivery />
      <Products />
      <Retailers />
    </>
  );
}
