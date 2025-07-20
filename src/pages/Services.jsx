function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with React and modern technologies."
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience."
    },
    {
      id: 3,
      title: "Consulting",
      description: "Expert advice on technology choices and project architecture."
    }
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>Discover what we can do for you.</p>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;