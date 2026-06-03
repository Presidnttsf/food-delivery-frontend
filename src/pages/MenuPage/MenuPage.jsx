import { useEffect, useState } from "react";
import { fetchMenu } from "../../services/menuService";
import FoodCard from "../../components/FoodCard/FoodCard";
import Hero from "../../components/Hero/Hero";
import Loader from "../../components/Loader/Loader";
import "./menuPage.css";
import useDebounce from "../../hooks/useDebounce";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

const filteredMenu = menu.filter((item) =>
  item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
);


  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchMenu();
        setMenu(data.data);

      } catch (err) {
        setError("Failed to load menu");
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  if (loading) {
    return <div className="loader"><Loader/></div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="menu-page">
      
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
      <Hero search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* MENU GRID */}
      <div className="container">
        <h2 className="section-title">Popular Items</h2>

        <div className="grid">
          {filteredMenu?.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;