import Heading from "./Heading";

const Terms = () => {
  return (
    <div className=" relative bg-[#9AE7FC] pb-4">
      <div className=" pt-3 pb-3">
        <div>
          <Heading asterisk={true} title="Terms & conditions" />
        </div>
        <ul className="list list-decimal font-neosans-regular text-[#002E6D] pl-7 pr-4 leading-tight">
          <li>
            To enter the promotion, participants have to purchase any Al Ain
            Farms Fresh Milk, Long Life Milk, Fresh Chicken, Fresh Eggs, Fresh
            Laban, Fresh Yoghurt or Fresh Juice with QR Code
          </li>
          <li>
            On the landing page, participants have to enter their name, email,
            mobile number, Emirate, Emirates ID number and upload a clear photo
            of the purchase receipt which shows the date and the Al Ain Farms
            product
          </li>
          <li>
            Participants have to register only through the online link which is
            validated through the scanning of the QR code on the pack.
          </li>
          <li>
            The competition is open only to UAE residents above 18 years of age
            with a valid Emirates ID.
          </li>
          <li>
            The last date for submission is *To be provided by the client.
            Winners will be announced on *To be provided by the client on Al Ain
            Farms Facebook page and individually contacted for prize collection.
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
