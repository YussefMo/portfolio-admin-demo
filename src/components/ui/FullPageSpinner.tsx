import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

function FullPageSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Ring
        size="80"
        stroke="5"
        bgOpacity="0"
        speed="2"
        color="oklch(0.606 0.25 292.717)"
      />
    </div>
  );
}

export default FullPageSpinner;
