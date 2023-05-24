import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "antd";
import Link from "next/link";
import PublicLayout from "@/components/layouts/PublicLayout";
import { useGetVideosQuery } from "@/store/apiSlice";
import ImageProvider from "@/providers/ImageProvider";
import DrawerItem from "@/components/shared/DrawerItem";

import Sort from "@/public/assets/images/svgs/sort.svg";
import Star from "@/public/assets/images/svgs/star.svg";

import Styles from "@/styles/scss/common/HomeContent.module.scss";

const Home = () => {
  //***************************
  // Define State
  //***************************
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [initData, setInitData] = useState<any>([]);
  const [sortInputs, setSortInputs] = useState({
    newest: false,
    rate: true,
    view: false,
  });

  //***************************
  // Import Hooks
  //***************************

  const { data, isFetching } = useGetVideosQuery({
    page: page,
    sortby: sortInputs.newest
      ? "newest"
      : sortInputs.rate
      ? "rate"
      : sortInputs.view
      ? "view"
      : "rate",
  });

  //***************************
  // Define Function
  //***************************

  const handleScroll = () => {
    if (window.innerWidth > 768) {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
      }
    } else {
      if (
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
      }
    }
  };

  //***************************
  // Define useEffect
  //***************************

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  useEffect(() => {
    if (data?.data) {
      setInitData((prev: any) => {
        return [...prev, ...data?.data];
      });
    }
  }, [data]);

  useEffect(() => {
    setOpen(false);
    setPage(1);
    setInitData([]);
  }, [sortInputs]);

  return (
    <PublicLayout title="خانه">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div>
            <p className={Styles.title}>چیارو ببینه؟</p>
          </div>
          <div>
            <p className={Styles.subTitle}>مناسب برای 3 تا 7 سال</p>
          </div>
        </div>
        <div>
          <Button onClick={() => setOpen(true)} className={Styles.sortButton}>
            <span className="pe-2">
              <Sort />
            </span>
            مرتب سازی
          </Button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-12 relative gap-5 mt-4">
          {!isFetching ? (
            initData?.map((item: any, index: number) => {
              return (
                <div key={index} className="col-span-6">
                  <Link href={"/"}>
                    <div>
                      <ImageProvider
                        width={"100%"}
                        aspectRatio={200 / 300}
                        styles={{ borderRadius: 16 }}
                        src={item?.reviewsThumbnailUrl}
                      />
                    </div>
                    <div className="mt-2">
                      <p className={Styles.titleVideo}>{item?.reviewsTitle}</p>
                      <div className={Styles.rateVideo}>
                        <div className="flex items-center mt-2">
                          <Star />
                          <span className="ps-2">{item?.reviewsRate}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
                <div className="col-span-6">
                  <Skeleton />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <DrawerItem
        sortInputs={sortInputs}
        setSortInputs={setSortInputs}
        open={open}
        onClose={() => setOpen(false)}
      />
    </PublicLayout>
  );
};

export default Home;
