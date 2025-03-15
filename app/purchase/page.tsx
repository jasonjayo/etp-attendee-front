"use client";

import { useEffect } from "react";
import Purchase from "../components/Purchase";

import { useDispatch } from "react-redux";
import { setSeating } from "../../store/purchaseSlice";
import type { AppDispatch } from "../../store/store";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setSeating());
  }, [dispatch]);

  return <Purchase />;
}
