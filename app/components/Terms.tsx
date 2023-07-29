import Heading from "./Heading";

const Terms = () => {
  return (
    <div className=" relative bg-[#9AE7FC] pb-4" id="terms">
      <div className="section">
        <div className="pb-1">
          <Heading asterisk={true} title="Terms & conditions" />
        </div>
        <ul className="list list-decimal font-neosans-regular text-[#002E6D] pl-7 pr-4 leading-tight">
          <li>
            The competition is open only to UAE residents above 18 years of age
            with a valid Emirates ID
          </li>
          <li>
            To enter the promotion, participants have to purchase Al Ain Farms
            Fresh Milk, Yoghurt, Laban, Juice, Chicken or Eggs that have
            promotional QR code on them.
          </li>
          <li>
            On the landing page, participants have to enter their name, email,
            mobile number, Emirate, Emirates ID number and upload a clear photo
            of the purchase receipt which shows the date and the Al Ain Farms
            product.
          </li>
          <li>
            Participants have to register only through the online link which is
            validated through scanning of the QR code on the product.
          </li>
          <li>
            The last date for submission is 20th September 2023. Winners will be
            announced on 10th of October 2023 on the Al Ain Farms social media
            and individually contacted for prize collection.
          </li>
          <li>
            Selection of winners will be at the sole discretion of Al Ain Farms
            management and all decisions will be final and binding.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Terms
