import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/challenge/Cart.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { useChallengeStore } from "@/state/useChallenge";
import { EmptyState } from "@/components/challenge/EmptyState/EmptyState";
import Link from "next/link";

const CartPage: NextPage = () => {
  const cart = useChallengeStore((state) => state.cart);

  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        {cart.length === 0 ? (
          <EmptyState text="Your cart is empty" />
        ) : (
          <>
            <div>
              <h1>Your cart</h1>
              <Link href="/challenge">Continue shopping</Link>
            </div>
          </>
        )}
      </WidthContainer>
    </main>
  );
};

export default CartPage;
