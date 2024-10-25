const serviceIdToDescription = (serviceId: string | number): string => {
  const serviceMap: { [key: string]: string } = {
    "2": "Tes HIV",
    "3": "Pengobatan HIV",
    "4": "Tes Viral Load",
    "5": "PrEP",
  };

  const ids = String(serviceId).split(",");
  const descriptions = ids.map((id) => serviceMap[id.trim()] || `Layanan ID ${id}`);
  return descriptions.join(", ");
};

export default serviceIdToDescription;
