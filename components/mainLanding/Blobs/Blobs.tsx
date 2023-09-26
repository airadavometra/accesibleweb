import BlobAnimated from "@/components/mainLanding/BlobAnimated/BlobAnimated";
import BlobSmall from "../BlobSmall/BlobSmall";
import classnames from "classnames";
import { Blob1 } from "@/icons/Blob1";
import { Blob2 } from "@/icons/Blob2";
import { Blob3 } from "@/icons/Blob3";
import { Blob4 } from "@/icons/Blob4";
import { Blob5 } from "@/icons/Blob5";
import { Blob6 } from "@/icons/Blob6";
import { Blob7 } from "@/icons/Blob7";
import { Blob8 } from "@/icons/Blob8";
import s from "./Blobs.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { blobLinkVariants } from "@/motions/homePage";
import { Blob1Big } from "@/icons/Blob1Big";
import { Blob6Big } from "@/icons/Blob6Big";
import { Blob4Big } from "@/icons/Blob4Big";
import { Blob3Big } from "@/icons/Blob3Big";
import { Blob2Big } from "@/icons/Blob2Big";

export default function Blobs() {
  return (
    <section id="simulations" className={s.blobsSection}>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob1Big className={s.blob} />
          </BlobAnimated>
          <motion.div
            variants={blobLinkVariants}
            whileHover="hover"
            className={s.linkContainer}
          >
            <Link className={s.link} href="/myopia">
              BLURRED VISION
            </Link>
          </motion.div>
        </div>
        <BlobSmall top={"55%"} left={"-10%"} size={"l"}>
          <Blob5 className={s.blob} />
        </BlobSmall>
        <BlobSmall bottom={"25%"} left={"-5%"} size={"m"}>
          <Blob7 className={s.blob} />
        </BlobSmall>
        <BlobSmall bottom={"5%"} right={"12%"} size={"s"}>
          <Blob8 className={s.blob} />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.left)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob2Big className={s.blob} />
          </BlobAnimated>
          <motion.div
            variants={blobLinkVariants}
            whileHover="hover"
            className={s.linkContainer}
          >
            <Link className={s.link} href="/tremor">
              TREMOR
            </Link>
          </motion.div>
        </div>
        <BlobSmall top={"10%"} right={"15%"} size={"s"}>
          <Blob5 className={s.blob} />
        </BlobSmall>
        <BlobSmall bottom={"15%"} right={"5%"} size={"s"}>
          <Blob7 className={s.blob} />
        </BlobSmall>
        <BlobSmall bottom={"0%"} right={"5%"} size={"l"}>
          <Blob8 className={s.blob} />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob3Big className={s.blob} />
          </BlobAnimated>
          <motion.div
            variants={blobLinkVariants}
            whileHover="hover"
            className={s.linkContainer}
          >
            <Link className={s.link} href="/blindness">
              BLINDNESS
            </Link>
          </motion.div>
        </div>
        <BlobSmall top={"35%"} left={"-15%"} size={"xl"}>
          <Blob1 className={s.blob} />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.left)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob4Big className={s.blob} />
          </BlobAnimated>
          <motion.div
            variants={blobLinkVariants}
            whileHover="hover"
            className={s.linkContainer}
          >
            <Link className={s.link} href="/dyslexia">
              DYSLEXIA
            </Link>
          </motion.div>
        </div>
        <BlobSmall top={"-12%"} left={"30%"} size={"s"}>
          <Blob6 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"-10%"} left={"35%"} size={"l"}>
          <Blob1 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"-5%"} left={"28%"} size={"m"}>
          <Blob8 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"35%"} right={"0%"} size={"s"}>
          <Blob5 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"40%"} right={"-5%"} size={"m"}>
          <Blob7 className={s.blob} />
        </BlobSmall>
      </div>
      <div className={classnames(s.blobsGroup, s.right)}>
        <div className={s.mainBlobWrapper}>
          <BlobAnimated>
            <Blob6Big className={s.blob} />
          </BlobAnimated>
          <motion.div
            variants={blobLinkVariants}
            whileHover="hover"
            className={s.linkContainer}
          >
            <Link className={s.link} href="/color-blindness">
              COLOR BLINDNESS
            </Link>
          </motion.div>
        </div>
        <BlobSmall top={"-2%"} right={"40%"} size={"s"}>
          <Blob5 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"0%"} right={"25%"} size={"l"}>
          <Blob7 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"-10%"} right={"30%"} size={"m"}>
          <Blob8 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"20%"} left={"-5%"} size={"s"}>
          <Blob1 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"40%"} left={"-15%"} size={"s"}>
          <Blob8 className={s.blob} />
        </BlobSmall>
        <BlobSmall top={"45%"} left={"-20%"} size={"m"}>
          <Blob5 className={s.blob} />
        </BlobSmall>
        <BlobSmall bottom={"20%"} left={"-5%"} size={"xl"}>
          <Blob7 className={s.blob} />
        </BlobSmall>
      </div>
    </section>
  );
}
