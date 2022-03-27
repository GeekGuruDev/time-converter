const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-slate-600 py-3">
      <p className="">Copyright {year}</p>
    </footer>
  );
};

export default Footer;
