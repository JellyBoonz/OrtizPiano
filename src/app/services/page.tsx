export default function Services() {
  const services = [
      { 
          name: 'Piano Tuning', 
          description: 'Fine-tuning your piano to ensure optimal sound quality.' 
      },
      { 
          name: 'Tuning + Pitch Raise', 
          description: 'Adjusting the overall pitch when your piano is significantly out of tune.' 
      },
      { 
          name: 'Tuning + Cleaning', 
          description: 'Thoroughly cleaning the piano to maintain its appearance and functionality.' 
      },
  ];

  return (
      <section className="max-w-3xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Services</h1>
          <ul className="space-y-4">
              {services.map((service, index) => (
                  <li 
                      key={index} 
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-accent/20 rounded-md"
                  >
                      <div className="flex-1">
                          <h2 className="font-semibold text-lg">{service.name}</h2>
                          <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                  </li>
              ))}
          </ul>
      </section>
  );
}
