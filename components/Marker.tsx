import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Marker as MarkerGoogle, InfoWindow, useMarkerRef } from '@vis.gl/react-google-maps';
import markerIcon from '@/images/marker.svg';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type TMarker = {
  name: string;
  recycleQTY: number;
  content?: string;
  position: { lat: number; lng: number };
};

// 分類提醒以 recycleQTY 判斷，用顏色圈圈表示，超過10紅色，小於3綠色，其他黃色
function renderBadge(recycleQTY: number) {
  if (recycleQTY > 10) return <Badge variant="destructive">危險</Badge>;
  if (recycleQTY < 3)
    return (
      <Badge variant="default" className="bg-green-500">
        安全
      </Badge>
    );
  return (
    <Badge variant="default" className="bg-yellow-500">
      普通
    </Badge>
  );
}

const Marker: FC<TMarker> = ({ name = '80嵐', recycleQTY = 1, content = '', position }) => {
  const [open, setOpen] = useState(false);
  const [markerRef, marker] = useMarkerRef();

  return (
    <div>
      <MarkerGoogle
        position={position}
        ref={markerRef}
        // onMouseOver={() => setOpen(true)}
        // onMouseOut={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open ? (
        <InfoWindow anchor={marker}>
          <Card className="relative flex border-none shadow-none drop-shadow-none">
            <div className="absolute right-6 top-6">{renderBadge(recycleQTY)}</div>
            <CardHeader>
              <CardTitle className="">{name}</CardTitle>
              <CardDescription className="space-x-1">
                <span>回收量 {recycleQTY}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </InfoWindow>
      ) : null}
    </div>
  );
};

export default Marker;
