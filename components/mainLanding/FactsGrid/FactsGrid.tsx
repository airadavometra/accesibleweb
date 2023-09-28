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
                  <span className={s.smallText}>of websites</span>
                  <span className={s.noWrap}>
                    <span className={s.smallText}>are </span>
                    <span className={classNames(s.meduimText, s.boldText)}>
                      innaccessible
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={s.tileWrapper}>
              <div className={classNames(s.tile, s.white)}>
                <div className={classNames(s.tileContent, s.tileContentBigGap)}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className={s.smallText}>
                      “Good accessibility is about compliance,
                    </span>
                    <span>
                      <span className={classNames(s.smallText, s.boldText)}>
                        great{" "}
                      </span>
                      <span className={s.smallText}>
                        accessibility is about empathy.”
                      </span>
                    </span>
                  </div>
                  <span className={s.quoteName}>— Sheri Byrne-Haber</span>
                </div>
              </div>
            </div>
            <div className={classNames(s.tileWrapper, s.tileWrapperSmall)}>
              <div className={classNames(s.tile, s.white)}>
                <div className={s.tileContent}>
                  <span className={classNames(s.smallText, s.noWrap)}>
                    We all experience
                  </span>
                  <span className={classNames(s.meduimText2, s.boldText)}>
                    situational <br /> disability
                  </span>
                  <span className={s.smallText}>once in a while</span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.tilesRow}>
            <div className={classNames(s.tileWrapper, s.tileWrapperSmall)}>
              <div className={classNames(s.tile, s.white)}>
                <div className={s.tileContent}>
                  <span className={s.meduimText2}>Accessibility</span>
                  <span>
                    <span className={s.meduimText2}>is a </span>
                    <span className={classNames(s.bigText, s.boldText)}>
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
                  <span className={s.smallText}>experience disability.</span>
                  <span>
                    <span className={s.smallText}>This is </span>
                    <span className={classNames(s.meduimText, s.boldText)}>
                      every 6th
                    </span>
                    <span className={s.smallText}> person.</span>
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
