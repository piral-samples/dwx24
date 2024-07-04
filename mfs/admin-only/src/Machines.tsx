import * as React from 'react';
import { useMachineData } from './hooks';
import Device from './Device';

const Machines: React.FC = () => {
  const devices = useMachineData();

  return (
    <>
      <h1>Machines Overview</h1>
      <div className="devices">
        {devices.map((deviceInformation, i) => (
          <Device device={deviceInformation} key={i} />
        ))}
      </div>
    </>
  );
};

export default Machines;
