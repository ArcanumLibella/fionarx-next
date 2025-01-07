import React from "react";
import { Heading, Paragraph } from "../../atoms";
import { AwardIcon, BarChartIcon, BookOpenIcon, BriefCaseIcon, ClockIcon, CodeIcon, DollarIcon, EyeIcon, FeatherIcon, FrownIcon, GiftIcon, GlobeIcon, HeartIcon, LinkIcon, LockIcon, MehIcon, MessageCircleIcon, MonitorIcon, PenToolIcon, SearchIcon, SettingsIcon, ShareIcon, ShoppingCartIcon, SmileIcon, StarIcon, SunIcon, TagIcon, TargetIcon, ThumbsDownIcon, ThumbsUpIcon, ToolIcon, TrendingDownIcon, TrendingUpIcon, UsersIcon, ZapIcon } from "@/public/_assets/icons";
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
    ),
    bookOpen: (
      <BookOpenIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    briefCase: (
      <BriefCaseIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    code: (
      <CodeIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    feather: (
      <FeatherIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    frown: (
      <FrownIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    link: (
      <LinkIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    lock: (
      <LockIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    meh: (
      <MehIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    messageCircle: (
      <MessageCircleIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    monitor: (
      <MonitorIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    penTool: (
      <PenToolIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    settings: (
      <SettingsIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    share: (
      <ShareIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    star: (
      <StarIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    sun: (
      <SunIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    tag: (
      <TagIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    thumbsDown: (
      <ThumbsDownIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    tool: (
      <ToolIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    trendingDown: (
      <TrendingDownIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    users: (
      <UsersIcon
        stroke={COLORS.tomato.DEFAULT}
        height={48}
        width={48}
      />
    ),
    zap: (
      <ZapIcon
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
