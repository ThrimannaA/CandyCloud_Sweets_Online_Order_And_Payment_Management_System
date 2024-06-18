import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Button, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "pages/CheckoutForm.jsx";
import {loadStripe} from '@stripe/stripe-js';
import usePurchase from "hooks/usePurchase";
import { Link } from "react-router-dom";
import Header from "../../components/navbar"

const stripePromise = loadStripe('pk_test_51P2W1wEXrthFHuX2RbjMqt3XAr67gfmGFOZ7ODZD3zNUHNBLtTOtxKkQTA5CGU9LLAFKRn0fCOZPa6v8UeHhsmi7006W2xIp5w');

export default function PaymentPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");


  //console.log(stripePromise)
  const [purchases]=usePurchase();
  console.log(purchases)


  //calculate  the checkout prices
  const purchaseTotal=purchases.reduce((sum,item)=>sum+item.price,0)
  //console.log(purchaseTotal)

  const totalPrice=parseFloat(purchaseTotal.toFixed(2));
  //console.log(totalPrice)

  
  return (
    <>
      <Helmet>
        <title>Dasuni's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[5px] sm:gap-[5px] bg-gradient1">


  {/*<header>

  <div className="flex md:flex-col justify-between items-center gap-5 px-4 border-white-A700 border border-solid ">
    <div className="flex md:flex-col justify-between items-end w-[51%] md:w-full gap-5">
      <Img src="images/img_ep_food.png" alt="epfood_one" className="w-[16%] md:w-full md:h-auto object-cover" />
      <Input
        size="sm"
        variant="outline"
        shape="round"
        color="white_A700_white_A700_00"
        name="search"
        placeholder={`Search payment details...`}
        value={searchBarValue1}
        onChange={(e) => setSearchBarValue1(e.target.value)}
        suffix={
          searchBarValue1?.length > 0 ? (
            <CloseSVG onClick={() => setSearchBarValue1("")} height={29} width={26} fillColor="#ffffffff" />
          ) : (
            <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
          )
        }
        className="w-[52%] md:w-full mb-[26px] sm:pl-5 text-white-A700_e5 font-semibold !rounded-[10px]"
      />
      <Link to="/HomePageOrder" className="mb-[18px]">
        <Heading as="h5" className="!font-bold">
          Home
        </Heading>
      </Link>
    </div>
    <div className="flex sm:flex-col self-end justify-between items-center w-[43%] md:w-full gap-5 ">
      
        <Link to="/Myorder">
          <Heading as="h5" className="!font-bold">My Order</Heading>
        </Link>
        <Link to="/Payment">
          <Heading as="h5" className="!font-bold">Payment</Heading>
        </Link>
        <Link to="/OrderManagementPage">
          <Heading as="h5" className="!font-bold">Order and Payment History</Heading>
        </Link>
        
      </div>
      
    
  </div>
      </header>*/}
       <Header/>


        <div className="flex flex-col w-full gap-[5px] mx-auto md:gap-[79px] md:p-5 sm:gap-[53px] max-w-[1275px] py-1">
          
             {/* <div className="flex flex-col self-stretch items-end">*/}




          

          <Elements stripe={stripePromise}>
      <CheckoutForm price={totalPrice} purchase={purchases}/>
    </Elements>


   

          </div>
        {/*</div>*/}
        <Footer className="pl-[65px] pr-14 py-[65px] md:p-5 border border-solid white_A700_00_gray_600_00_border bg-gradient2" />
       </div>
    </>
  );
}
