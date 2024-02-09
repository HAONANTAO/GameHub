import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
