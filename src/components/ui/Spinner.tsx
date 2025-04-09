import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Ring
        size="40"
        stroke="5"
        bgOpacity="0"
        speed="2"
        color="oklch(0.606 0.25 292.717)"
      />
    </div>
  );
}

export default Spinner;
