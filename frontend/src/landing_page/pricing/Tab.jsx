function Tab({ label, value, activeTab, setActiveTab }) {
  const isActive = activeTab === value;

  return (
    <div className="d-flex flex-column p-3 align-items-start">
      <button
        className={`fs-3 btn p-0 border-0 ${
          isActive ? "text-muted" : "text-primary"
        }`}
        onClick={() => setActiveTab(value)}
      >
        {label}
      </button>

      {/* underline */}
      {isActive && (
        <div
          className="bg-primary mt-2"
          style={{
            height: "3px",
            width: "100%",
            
          }}
        />
      )}
    </div>
  );
}

export default Tab;
