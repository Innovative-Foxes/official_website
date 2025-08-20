import { Status } from "@chakra-ui/react";

const StatusPing = () => {
  return (
    <Status.Root colorPalette="green" size="lg">
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "#4ade80", // lighter green
            opacity: 0.75,
            animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            zIndex: 0,
          }}
        />
        <Status.Indicator style={{ position: "relative", zIndex: 1 }} />
      </div>
    </Status.Root>
  );
};

export default StatusPing;
