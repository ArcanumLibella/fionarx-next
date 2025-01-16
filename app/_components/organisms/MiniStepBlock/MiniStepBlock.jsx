import React from "react";
import { MiniStep } from "../../molecules";
import { Text } from "../../atoms";

export const MiniStepBlock = ({ items, description, withArrow }) => {
  return (
    <div className="MiniStepBlock my-16">
      <div className={`MiniStepBlock__steps flex flex-col md:grid grid-cols-${items.length} gap-4 xl:gap-6 my-8`}>
        {items.map((item) => {
          return (
            <MiniStep
              key={item.id}
              title={item.title}
              content={item.content}
              isLast={item.isLast}
              withArrow={withArrow}
            />
          );
        })}
      </div>
      <Text type="paragraphLarge" className="MiniStepBlock__description text-center !text-balance bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96% bg-clip-text text-transparent text-tomato">
        {description}
      </Text>
    </div>
  );
};
