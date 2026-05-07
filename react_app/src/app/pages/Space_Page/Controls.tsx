import { useControls } from "react-zoom-pan-pinch";

export const Controls = ({ isZooming }: { isZooming: boolean }) => {
  const { zoomIn, zoomOut } = useControls();
  return (
    // {/* Zoom Controls */}
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 transition-opacity duration-700"
      style={{
        opacity: isZooming ? 0 : 1,
        pointerEvents: isZooming ? "none" : "auto",
      }}
    >
      <button
        onClick={() => zoomIn()}
        className="w-16 h-16 bg-orange text-black border-4 border-cream rounded-lg hover:bg-cream hover:text-orange transition-colors text-3xl flex items-center justify-center"
        aria-label="Zoom in"
      >
        +
      </button>
      <button
        onClick={() => zoomOut()}
        className="w-16 h-16 bg-orange text-black border-4 border-cream rounded-lg hover:bg-cream hover:text-orange transition-colors text-3xl flex items-center justify-center"
        aria-label="Zoom out"
      >
        −
      </button>
    </div>
  );
};
