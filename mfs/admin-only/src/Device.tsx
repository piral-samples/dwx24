import * as React from 'react';
import runningIcon from './icons/running.png';
import finishedIcon from './icons/finished.png';
import erroredIcon from './icons/errored.png';
import repairedIcon from './icons/repaired.png';
import unknownIcon from './icons/unknown.png';

interface DeviceProps {
  device: {
    id: string;
    machine_type: string;
    status: string;
  };
}

const Device: React.FC<DeviceProps> = ({ device }) => {
  // set device name
  let deviceName = 'device';

  if (device.hasOwnProperty('machine_type')) deviceName = device.machine_type;

  // secure device id
  let deviceId = ' with unknown ID';

  if (device.hasOwnProperty('id')) deviceId = ' with ID ' + device.id;

  // set status description
  let statusDescription = 'The ' + deviceName + deviceId;

  if (device.hasOwnProperty('status')) {
    if (device.status === 'running') statusDescription += ' is running.';
    else if (device.status === 'finished') statusDescription += ' has finished running.';
    else if (device.status === 'repaired') statusDescription += ' was repaired.';
    else if (device.status === 'errored') statusDescription += ' stopped working.';
    else statusDescription = 'The status for ' + deviceName + deviceId + ' is currently unknown.';
  } else statusDescription = 'The status for ' + deviceName + deviceId + ' is currently unknown.';

  // set status image
  let statusIcon = unknownIcon;

  if (device.hasOwnProperty('status')) {
    if (device.status === 'running') statusIcon = runningIcon;
    else if (device.status === 'finished') statusIcon = finishedIcon;
    else if (device.status === 'repaired') statusIcon = repairedIcon;
    else if (device.status === 'errored') statusIcon = erroredIcon;
  }

  return (
    <div className="widget">
      <img className="icon" src={statusIcon}></img>
      <span className="text">{statusDescription}</span>
    </div>
  );
};

export default Device;
