import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import { OverridableStringUnion } from '@mui/types'; // Import if necessary for strict type checks

interface SkeletonProps {
  loading?: boolean;
  height: number;
  width: number;
  type: OverridableStringUnion<"text" | "rectangular" | "rounded" | "circular", {}>;
  items: number;
}

function CustomSkeleton(props: SkeletonProps) {
  const { loading, height, width, type, items } = props;

  if (loading) {
    return (
      <>
       {Array.from({ length: items }, (_,index) => (
          <Skeleton key={index} variant={type} width={width} height={height} className='mb-2'/>
        ))}
      </>
    );
  }
  return null;
}
export default CustomSkeleton;