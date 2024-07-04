import { useEffect, useState } from 'react';

interface MachineData {
  id: string;
  status: string;
  machine_type: string;
  last_maintenance: string;
  install_date: string;
  last_update: string;
  location: {
    latitude: number;
    longitude: number;
  };
  floor: number;
}

export function useMachineData(): Array<MachineData> {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch('https://smapiot-case-study-machine-backend.azurewebsites.net/api/v1/machines')
      .then((response) => response.json())
      .then((response) => setDevices(response.data));
  }, []);

  return devices;
}
