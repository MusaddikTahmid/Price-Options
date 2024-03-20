const Link = ({ route }) => {
  return (
    <li className="hover:bg-[#627254] px-6 lg:px-6 lg:py-2 rounded-2xl">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
