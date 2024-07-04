import { useEffect, useState } from 'react';

interface MachineData {
  id: string;
  status: string;
  machine_type: string;
  last_maintenance: string;
  install_date: string;
  last_update: string;
  location: string;
  floor: number;
}

interface MachineEvent {
  type: 'event';
  data: MachineEventData;
}

interface MachineEventData {
  timestamp: string;
  status: string;
  machineId: string;
}

export function useMachineData(): Array<MachineData> {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // open web socket connection
    const ws = new WebSocket('wss://smapiot-case-study-machine-backend.azurewebsites.net/api/v1/events');

    ws.onopen = function () {
      ws.send(JSON.stringify({ type: 'init' }));
    };

    ws.onmessage = function (e) {
      const event = e.data as MachineEvent;

      if (event.type === 'event') {
        refetch();
      }
    };

    const refetch = () => {
      fetch('https://smapiot-case-study-machine-backend.azurewebsites.net/api/v1/machines')
        .then((response) => response.json())
        .then((response) => setDevices(response.data));
    };

    // fetch initial IoT data
    refetch();

    return () => {
      ws.close();
    };
  }, []);

  return devices;
}
