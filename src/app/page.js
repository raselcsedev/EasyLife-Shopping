import CarouselBanner from "../components/CarouselBanner";
import CategoriesSection from "../components/CategoriesSection";
import ProductItem from "../components/ProductItem";
import Upcamming from "../components/Upcamming";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <CategoriesSection />
      <ProductItem />
      <Upcamming />
    </div>
  );
};

export default HomePage;
