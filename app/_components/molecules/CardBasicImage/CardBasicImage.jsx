import React from "react";
import { Heading, Paragraph } from "../../atoms";
import { AwardIcon, BarChartIcon, ClockIcon, DollarIcon, EyeIcon, GiftIcon, GlobeIcon, HeartIcon, SearchIcon, ShoppingCartIcon, SmileIcon, TargetIcon, ThumbsUpIcon, TrendingUpIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const CardBasicImage = ({
  title,
  description,
  icon
}) => {
  const Icons = {
    eye: (
      <EyeIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    target: (
      <TargetIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    heart: (
      <HeartIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    smile: (
      <SmileIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    dollar: (
      <DollarIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    award: (
      <AwardIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    barChart: (
      <BarChartIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    clock: (
      <ClockIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    gift: (
      <GiftIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    globe: (
      <GlobeIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    search: (
      <SearchIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    shoppingCart: (
      <ShoppingCartIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    thumbsUp: (
      <ThumbsUpIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    trendingUp: (
      <TrendingUpIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    )
  };

  const renderIcon = Icons[icon] || null;

  return (
    <div className="CardBasicImage flex flex-col justify-between w-full h-full lg:min-w-[180px] lg:max-w-[200px] 2xl:max-w-[260px]">
      <div className="CardBasicImage__top p-3 bg-purple rounded-t-xl">
        <Heading
          level={4}
          className="!my-0 font-bold text-center uppercase md:normal-case text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div className="CardBasicImage__bottom flex flex-col items-center h-full p-3 bg-purple-light rounded-b-xl">
        {renderIcon}
        <Paragraph className="mt-4 text-center">{description}</Paragraph>
      </div>
    </div>
  );
};
