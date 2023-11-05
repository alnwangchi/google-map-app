import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import marker from '@/images/marker.svg';
import Image from 'next/image';
const InformationCard = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer">
          <Image src={marker} width={20} height={27} alt="marker" />
        </HoverCardTrigger>
        <HoverCardContent side="top">Props</HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default InformationCard;
