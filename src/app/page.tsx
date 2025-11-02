import Banner from "@/component/home/Banner";
import FeaturedCategories from "@/component/home/FeaturedCategories";
import FeaturedProducts from "@/component/home/FeaturedProduct";
import Newsletter from "@/component/home/NewsLetter";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Layout from "@/component/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <FeaturedCategories/>
        <FeaturedProducts/>
        <WhyChooseUs/>
        <Newsletter/>
      </Layout>
    </>
  );
}
