import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
  score: number
}
const CriticScore = ({ score }: Props) => {
  return <Badge></Badge>;
};

export default CriticScore
