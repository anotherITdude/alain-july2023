import Image from 'next/image';
import howto_right from './../../public/howto_right.png';

const HowTo = () => {
  return (
    <div className="bg-center bg-no-repeat howto h-[616px] relative bg-[#5dc7dd]">
      <div className="flex flex-col">
        <div className="left">
          <div className="shadow_h2 text-3xl font-primetime text-white pl-4 pt-4 pb-2">
            How to Enter
          </div>
          <ul className="list list-decimal font-neosans-bold text-white pl-9 leading-tight">
            <li>
              PURCHASE ANY AL AIN FARMS FRESH MILK, YOGHURT, LABAN OR JUICE FROM
              SELECTED STORES.
            </li>
            <li>SCAN THE QR CODE USING YOUR SMARTPHONE OR TABLET.</li>
            <li>REGISTER ON THE MICROSITE AFTER SCANNING THE QR CODE.</li>
            <li>SUBMIT YOUR ENTRY TO ENTER THE DRAW</li>
          </ul>
        </div>
        <div className="right">
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={howto_right}
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default HowTo
