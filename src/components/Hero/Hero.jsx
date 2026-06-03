const Hero = ({ search, setSearch }) => {
  return (
    <div className="hero">

      <div className="hero-overlay">
        <h1>Craving Something Delicious?</h1>
        <p>Order fresh meals delivered in minutes</p>

        <div className="hero-search">
          <input
            placeholder="Search for pizza, burger..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;