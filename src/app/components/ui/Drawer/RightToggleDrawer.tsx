"use client";

import React, { useEffect, useState } from "react";

interface ToggleableSection {
  id: string;
  title: string;
  visible: boolean;
}

interface RightToggleDrawerProps {
  triggerLabel?: string;
  drawerTitle?: string;
  onSectionToggle?: (sectionId: string, isVisible: boolean) => void;
}

const RightToggleDrawer: React.FC<RightToggleDrawerProps> = ({
  drawerTitle = "Section Controls",
  onSectionToggle,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [sections, setSections] = useState<ToggleableSection[]>([]);

  useEffect(() => {
    // Find all elements with data-toggle attributes
    const toggleableElements = document.querySelectorAll("[data-toggle]");
    const foundSections: ToggleableSection[] = [];

    toggleableElements.forEach((element) => {
      const toggleId = element.getAttribute("data-toggle");
      const title = element.getAttribute("data-title");

      if (toggleId && title) {
        foundSections.push({
          id: toggleId,
          title: title,
          visible: true, // Default to visible
        });
      }
    });

    setSections(foundSections);
  }, []);

  const handleSectionToggleChange = (sectionId: string, isVisible: boolean) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, visible: isVisible } : section,
      ),
    );

    // Apply visibility changes to DOM elements
    const element = document.querySelector(
      `[data-toggle="${sectionId}"]`,
    ) as HTMLElement;
    if (element) {
      element.style.display = isVisible ? "" : "none";
    }

    onSectionToggle?.(sectionId, isVisible);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Sliding Drawer Container */}
      <div
        style={{
          position: "fixed",
          right: isDrawerOpen ? "0" : "-360px",
          top: "0",
          height: "100vh",
          width: "360px",
          backgroundColor: "white",
          boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.15)",
          transition: "right 0.3s ease-in-out",
          zIndex: 1000,
          display: "flex",
        }}
      >
        {/* Tab with Chevron */}
        <div
          style={{
            position: "absolute",
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "80px",
            backgroundColor: "#01203F",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
          }}
          onClick={toggleDrawer}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#031629";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#01203F";
          }}
        >
          {/* Chevron Arrow */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              transition: "transform 0.3s ease",
              transform: isDrawerOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ‹
          </div>
        </div>

        {/* Drawer Content */}
        <div
          style={{
            width: "100%",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "16px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1a202c",
                margin: "0",
              }}
            >
              {drawerTitle}
            </h2>
          </div>

          {/* Sections */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {sections.length === 0 ? (
              <p
                style={{
                  fontSize: "14px",
                  color: "#718096",
                  margin: "0",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No toggleable sections found. Add data-toggle and data-title
                attributes to elements.
              </p>
            ) : (
              sections.map((section) => (
                <div key={section.id}>
                  {/* Toggle Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#2d3748",
                      }}
                    >
                      {section.title}
                    </span>

                    {/* Custom Toggle Switch */}
                    <label
                      style={{
                        position: "relative",
                        display: "inline-block",
                        width: "50px",
                        height: "24px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        checked={section.visible}
                        style={{
                          opacity: 0,
                          width: 0,
                          height: 0,
                        }}
                        type="checkbox"
                        onChange={(e) =>
                          handleSectionToggleChange(
                            section.id,
                            e.target.checked,
                          )
                        }
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: section.visible
                            ? "#48bb78"
                            : "#cbd5e0",
                          borderRadius: "24px",
                          transition: "background-color 0.3s ease",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          content: '""',
                          height: "18px",
                          width: "18px",
                          left: section.visible ? "26px" : "3px",
                          bottom: "3px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          transition: "left 0.3s ease",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </label>
                  </div>

                  {/* Status Text */}
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#718096",
                      margin: "0",
                    }}
                  >
                    {section.visible ? "Currently visible" : "Currently hidden"}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            transition: "opacity 0.3s ease",
          }}
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default RightToggleDrawer;
