// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { manrope } from '@/app/ui/fonts';
import Image from 'next/image';

export default function GreenPatoLogo() {
  return (
    <div
      className={`${manrope.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
			<Image
				src="/logo-greenbg.jpg"
				width={90}
				height={90}
				// className="block md:hidden"
				alt="green pato logo"
			/>
			<p className="text-[40px]">green <br/> pato</p>
    </div>
  );
}