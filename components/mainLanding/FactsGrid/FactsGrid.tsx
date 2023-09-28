import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./FactsGrid.module.css";
import classNames from "classnames";

export default function FactsGrid() {
  return (
    <section className={s.description} id="facts">
      <WidthContainer className={s.widthContainer}>
        <div className={s.headerContainer}>
          <span className={s.header}>being empathetic</span>
          <span className={s.header}>
            is <span className={classNames(s.header, s.colored)}>the key</span>
          </span>
          <span className={s.header}>to accessible web</span>
        </div>
        <div className={s.tilesContainer}>
          <div className={s.tilesRow}>
            <div className={classNames(s.tileWrapper, s.tileWrapperSmall)}>
              <div className={s.tile}>
                <div className={s.tileContent}>
                  <span className={classNames(s.hugeText, s.boldText)}>
                    96,3%
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                    }}
                  >
                    of websites
                  </span>
                  <span
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                      }}
                    >
                      are{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(1.2rem, -0.2222rem + 2.963vw, 2rem)",
                        fontWeight: 700,
                      }}
                    >
                      innaccessible
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={s.tileWrapper}>
              <div className={classNames(s.tile, s.white)}>
                <div
                  className={s.tileContent}
                  style={{ gap: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                      }}
                    >
                      “Good accessibility is about compliance,
                    </span>
                    <span>
                      <span
                        style={{
                          fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                          fontWeight: 700,
                        }}
                      >
                        great{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                        }}
                      >
                        accessibility is about empathy.”
                      </span>
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "clamp(0.85rem, 0.1389rem + 1.4815vw, 1.25rem)",
                      fontWeight: 600,
                      color: "#898989",
                    }}
                  >
                    — Sheri Byrne-Haber
                  </span>
                </div>
              </div>
            </div>
            <div className={classNames(s.tileWrapper, s.tileWrapperSmall)}>
              <div className={classNames(s.tile, s.white)}>
                <div className={s.tileContent}>
                  <span
                    style={{
                      fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    We all experience
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(1.5rem, 0.1667rem + 2.7778vw, 2.25rem)",
                      fontWeight: 700,
                    }}
                  >
                    situational <br /> disability
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                    }}
                  >
                    once in a while
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.tilesRow}>
            <div className={classNames(s.tileWrapper, s.tileWrapperSmall)}>
              <div className={classNames(s.tile, s.white)}>
                <div className={s.tileContent}>
                  <span
                    style={{
                      fontSize: "clamp(1.5rem, 0.1667rem + 2.7778vw, 2.25rem)",
                    }}
                  >
                    Accessibility
                  </span>
                  <span>
                    <span
                      style={{
                        fontSize:
                          "clamp(1.5rem, 0.1667rem + 2.7778vw, 2.25rem)",
                      }}
                    >
                      is a{" "}
                    </span>
                    <span
                      style={{
                        fontSize:
                          "clamp(1.75rem, -0.9167rem + 5.5556vw, 3.25rem)",
                        fontWeight: 700,
                      }}
                    >
                      civil right
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={s.tileWrapper}>
              <div className={s.tile}>
                <div className={s.tileContent}>
                  <span>
                    <span className={classNames(s.hugeText, s.boldText)}>
                      1.3
                    </span>
                    <span className={classNames(s.hugeText2, s.boldText)}>
                      {" "}
                      billion people
                    </span>
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                    }}
                  >
                    experience disability.
                  </span>
                  <span>
                    <span
                      style={{
                        fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                      }}
                    >
                      This is{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(1.2rem, -0.2222rem + 2.963vw, 2rem)",
                        fontWeight: 700,
                      }}
                    >
                      every 6th
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(1rem, 0.1111rem + 1.8519vw, 1.5rem)",
                      }}
                    >
                      {" "}
                      person.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
}
