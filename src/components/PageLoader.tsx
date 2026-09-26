import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [width, setWidth] = useState(10);

  useEffect(() => {
    const t1 = setTimeout(() => setWidth(30), 50);
    const t2 = setTimeout(() => setWidth(60), 200);
    const t3 = setTimeout(() => setWidth(80), 500);
    const t4 = setTimeout(() => setWidth(90), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[3px]"
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="h-full bg-[#2C9CD4] transition-all ease-out"
        style={{
          width: `${width}%`,
          transitionDuration: width === 30 ? '150ms' : '400ms',
          boxShadow: '0 0 8px rgba(44,156,212,0.8)',
        }}
      />
    </div>
  );
}
