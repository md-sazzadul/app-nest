import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

const PageLoader = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== "idle";

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isNavigating) {
      setVisible(true);
      setProgress(0);

      // Animate progress bar quickly to ~85%, then hold
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 85) return prev + Math.random() * 12;
          return prev;
        });
      }, 120);
    } else {
      // Complete the bar then fade out
      setProgress(100);
      const timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [isNavigating]);

  if (!visible) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full transition-all duration-200 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, #632EE3, #9F62F2)",
            boxShadow: "0 0 8px rgba(99, 46, 227, 0.6)",
            transition:
              progress === 100 ? "width 0.3s ease-out" : "width 0.12s ease-out",
          }}
        />
      </div>

      {/* Full-page overlay with spinner — only shown when actually loading */}
      {isNavigating && (
        <div className="fixed inset-0 z-40 bg-base-200/60 backdrop-blur-[1px] flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 flex flex-col items-center gap-3 border border-gray-100">
            {/* Spinning ring */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
                style={{
                  borderTopColor: "#632EE3",
                  borderRightColor: "#9F62F2",
                }}
              />
            </div>
            <p className="text-sm font-medium text-gray-500 tracking-wide">
              Loading…
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
