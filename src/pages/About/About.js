import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from '../../store/slices/aboutSlice';
import { fetchProducts } from '../../store/slices/productSlice';
import AboutHeader from '../../components/About/AboutHeader/AboutHeader';
import TeamDisplayer from '../../components/About/AboutHeader/TeamDisplayer/TeamDisplayer';
import DynamicSections from '../../components/About/AboutHeader/DynamicSections/DynamicSections';
import Certifications from '../../components/About/Certifications/Certifications';
import FeaturedProducts from '../../components/About/FeaturedProducts/FeaturedProducts';
import ChargeSpinner from '../../components/Charging/ChargeSpinner';

const About = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.about);
  const { items: products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!data) dispatch(fetchAbout());
    if (!products?.length) dispatch(fetchProducts());
  }, [dispatch, data, products]);

  const featuredProducts = useMemo(() => {
    if (!Array.isArray(data?.featuredProducts) || !Array.isArray(products)) return [];
    return data.featuredProducts
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);
  }, [data?.featuredProducts, products]);

  if (loading) return <div className="p-6"><ChargeSpinner /></div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!data) return null;

  return (
    <div className="p-4 w-full flex flex-col gap-4 overflow-hidden">
      <AboutHeader title={data.title} description={data.description} />
      <TeamDisplayer team={data.team} />
      <DynamicSections sections={data.sections} />
      <Certifications certifications={data.certifications} />
      <FeaturedProducts products={featuredProducts} />
    </div>
  );
};

export default About;
