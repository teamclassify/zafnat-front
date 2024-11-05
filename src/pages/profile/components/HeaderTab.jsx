function HeaderTab({ title, children }) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">{title}</h3>

      <div>{children}</div>
    </div>
  );
}

export default HeaderTab;
