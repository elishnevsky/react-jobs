function Card({ children, bgClass = 'bg-gray-100' }) {
  return (
    <div className={`${bgClass} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
}

export default Card;
