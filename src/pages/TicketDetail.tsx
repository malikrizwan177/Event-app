import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

import CustomButton from "../components/CustomButton";
import Subscribe from "../components/Subscribe";
import EventFilter from "../components/EventFilter";
import { EventContext } from "../context/EventContext";
import { assets } from "../assets";
import moment from "moment";

const TicketDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { eventsData, backendURL } = useContext(EventContext);
  const navigate = useNavigate();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const event = eventsData.find((e: any) => String(e.id) === eventId);
  if (!event) return <p className="p-10 text-center">Event not found</p>;

  const [economyCount, setEconomyCount] = useState<number>(0);
  const [vipCount, setVipCount] = useState<number>(0);
  const [vvipCount, setVvipCount] = useState<number>(0);
  const [ticketPage, setTicketPage] = useState<boolean>(true);
  const [checkoutPage, setCheckoutPage] = useState<boolean>(false);
  const [bookingStatusPage, setBookingStatusPage] = useState<boolean>(false);
  const [ticketBookingLoader, setTicketBookingLoader] =
    useState<boolean>(false);
  const [paymentPayload, setPaymentPayload] = useState({
    event_id: eventId,
    ticket_id: [],
    name: "",
    email: "",
    phone: "",
    quantity: "",
    tax: 20,
    stripePaymentMethod: "",
  });

  const { tickets, event_date, event_time, address, city, state, images } =
    event;

  const imageUrl =
    images && images.length
      ? `${backendURL}/public/${images[0].path}`
      : assets.event_image_placeholder;

  const hasCoords = event.latitude != null && event.longitude != null;
  const mapContainerStyle = {
    maxWidth: "500px",
    width: "400px",
    maxHeight: "500px",
    height: "400px",
    borderRadius: "7px",
  };
  const center = hasCoords
    ? { lat: Number(event.latitude), lng: Number(event.longitude) }
    : null;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY!,
  });

  const economyTicket = tickets.find((t: { title: string }) =>
    t?.title.toLowerCase().includes("basic")
  ) || { price: 0 };
  const vipTicket = tickets.find((t: { title: string }) =>
    t?.title.toLowerCase().includes("vip")
  ) || { price: 0 };
  const vvipTicket = tickets.find((t: { title: string }) =>
    t?.title.toLowerCase().includes("premium")
  ) || { price: 0 };

  const economyPrice = parseFloat(economyTicket?.price);
  const vipPrice = parseFloat(vipTicket?.price);
  const vvipPrice = parseFloat(vvipTicket?.price);

  const economyTotal = economyCount * economyPrice;
  const vipTotal = vipCount * vipPrice;
  const vvipTotal = vvipCount * vvipPrice;
  const subTotal = economyTotal + vipTotal + vvipTotal;
  const tax = 20;
  const grandTotal = subTotal + tax;

  const onSubmitHandler = async () => {
    setTicketBookingLoader(true);
    try {
      if (!(economyCount || vipCount || vvipCount)) {
        return toast.error("Select at least one ticket");
      }
      const stripe = await stripePromise;
      if (!stripe) {
        return toast.error("Stripe failed to load");
      }

      const ticketTypes = [
        { 
          count: economyCount, 
          priceId: "price_1RLjOBGJyOdTC98YT2Biupks",
          name: "Economy"
        },
        { 
          count: vipCount, 
          priceId: "price_1RLjPNGJyOdTC98Yt5clNPpN",
          name: "VIP"
        },
        { 
          count: vvipCount, 
          priceId: "price_1RLjQCGJyOdTC98YGAJKD3SV",
          name: "VVIP"
        }
      ];
  
      const lineItems = ticketTypes
        .filter(ticket => ticket.count > 0)
        .map(ticket => ({
          price: ticket.priceId,
          quantity: ticket.count
        }));  

      if (lineItems.length > 0) {
        lineItems.push({
          price: "price_1RM59GGJyOdTC98Ygtv9iXh7",
          quantity: 1
        });
      }

      sessionStorage.setItem('paymentRedirect', 'true');
  
      // Not recommended for production
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}/ticket-detail/${eventId}?payment=success`,
        cancelUrl: `${window.location.origin}/ticket-detail/${eventId}?payment=cancelled`,
        submitType: "pay",
        billingAddressCollection: "required",
        clientReferenceId: eventId,
      });
  
      if (error) throw error;
  
    } catch (error: any) {
      toast.error(error.message || "Payment failed");
      console.error(error);
    } finally {
      setTicketBookingLoader(false);
      setBookingStatusPage(false);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment') === 'success') {
      setBookingStatusPage(true);
      setCheckoutPage(false);
      sessionStorage.removeItem('paymentRedirect');
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <section>
      {ticketPage && (
        <div className="flex flex-col xl:flex-row gap-20 items-center justify-between shadow-custom-sd rounded-lg mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] mt-8 mb-20 p-5 md:p-10 text-[#525252]">
          <div className="w-full">
            <p className="text-4xl font-semibold">Ticket Details</p>
            <div className="flex justify-between gap-10 sm:gap-12 md:gap-16 lg:gap-20 my-10">
              <div className="flex flex-col gap-10 justify-center items-start">
                <p className="font-medium text-base">Ticket Type</p>
                <p className="text-2xl font-semibold">Economy</p>
                <p className="text-2xl font-semibold">VIP</p>
                <p className="text-2xl font-semibold">VVIP</p>
                <p className="text-2xl font-semibold">Subtotal</p>
              </div>
              <div className="flex flex-col gap-11 justify-start items-center">
                <p className="font-medium text-base">Price</p>
                <p className="text-lg font-semibold">
                  ${economyPrice.toFixed(2)}
                </p>
                <p className="text-lg font-semibold">${vipPrice.toFixed(2)}</p>
                <p className="text-lg font-semibold">${vvipPrice.toFixed(2)}</p>
                <p className="text-lg font-semibold">${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex flex-col gap-11 justify-start items-center">
                <p className="font-medium text-base">Quantity</p>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() =>
                      economyCount > 0 && setEconomyCount(economyCount - 1)
                    }
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{economyCount}</p>
                  <p
                    onClick={() => setEconomyCount(economyCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() => vipCount > 0 && setVipCount(vipCount - 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{vipCount}</p>
                  <p
                    onClick={() => setVipCount(vipCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>
                <div className="flex gap-3 items-center font-medium text-sm">
                  <p
                    onClick={() => vvipCount > 0 && setVvipCount(vvipCount - 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-medium text-sm">{vvipCount}</p>
                  <p
                    onClick={() => setVvipCount(vvipCount + 1)}
                    className="px-3 py-1 rounded-md bg-primary cursor-pointer text-white"
                  >
                    +
                  </p>
                </div>

                <p className="text-lg font-semibold">${subTotal.toFixed(2)}</p>
              </div>
            </div>
            <CustomButton
              text="Book Tickets"
              bg_color="bg-primary"
              text_color="text-white"
              hover_text_color=""
              hover_bg_color="bg-cyan-400"
              other_classes="mx-auto flex flex-row justify-center items-center"
              onClick={() => {
                if (economyCount === 0 && vipCount === 0 && vvipCount === 0) {
                  return toast.error("Please select a ticket to book");
                } else {
                  setTicketPage(false);
                  setCheckoutPage(true);
                }
              }}
            />
          </div>
          <div>
            {loadError && (
              <div className="text-center text-red-500">Error loading map</div>
            )}
            {!isLoaded && !loadError && (
              <div className="text-center">Loading map…</div>
            )}
            {isLoaded && !loadError && (
              <div className="relative" style={mapContainerStyle}>
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "7px",
                  }}
                  center={center || { lat: 0, lng: 0 }}
                  zoom={center ? 12 : 2}
                >
                  {center && <Marker position={center} />}
                </GoogleMap>

                {!center && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 text-gray-600 text-sm"
                    style={{ borderRadius: "7px" }}
                  >
                    No location information available
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {checkoutPage && (
        <div className="flex flex-col md:flex-row gap-16 items-start justify-between shadow-custom-sd rounded-md mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] mt-8 mb-20 p-5 md:p-10 text-[#525252]">
          <div className="w-full">
            <h1 className="text-4xl font-semibold">Checkout</h1>
            <p className="text-2xl font-semibold mt-6">Contact Information</p>
            <form className="grid grid-cols-2 gap-x-8 gap-y-5 w-full mt-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={paymentPayload.name}
                onChange={(e) =>
                  setPaymentPayload({
                    ...paymentPayload,
                    name: e.target.value,
                  })
                }
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={paymentPayload.phone}
                onChange={(e) =>
                  setPaymentPayload({
                    ...paymentPayload,
                    phone: e.target.value,
                  })
                }
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={paymentPayload.email}
                onChange={(e) =>
                  setPaymentPayload({
                    ...paymentPayload,
                    email: e.target.value,
                  })
                }
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="shadow-custom-sd px-4 py-3 rounded-md w-full text-xs outline-none"
              />
            </form>
            <p className="text-2xl font-semibold mt-8">Payment Methods</p>
            <div
              onClick={() =>
                setPaymentPayload({
                  ...paymentPayload,
                  stripePaymentMethod: "pm_card_visa",
                })
              }
              className={`shadow-custom-sd px-4 py-2 flex justify-between rounded-md mt-6 cursor-pointer w-[48%] text-xs ${
                paymentPayload?.stripePaymentMethod === "pm_card_visa"
                  ? "ring-2 ring-primary"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={assets.card} alt="card" className="w-6 h-6" />
                <p>Visa Card</p>
              </div>
              <p className="text-primary text-lg">{`>`}</p>
            </div>
            <div
              onClick={() => {
                setPaymentPayload({
                  ...paymentPayload,
                  stripePaymentMethod: "",
                });
                toast.error("This payment method is not available");
              }}
              className="shadow-custom-sd px-4 py-2 flex items-center gap-3 rounded-md mt-6 cursor-pointer w-[48%] text-xs"
            >
              <img src={assets.paypal} alt="paypal" className="w-6 h-6" />
              <p>Paypal</p>
            </div>
            <div
              onClick={() => {
                setPaymentPayload({
                  ...paymentPayload,
                  stripePaymentMethod: "",
                });
                toast.error("This payment method is not available");
              }}
              className="shadow-custom-sd px-4 py-2 flex items-center gap-3 rounded-md mt-6 cursor-pointer w-[48%] text-xs"
            >
              <img src={assets.apple} alt="apple" className="w-6 h-6" />
              <p>Apple Pay</p>
            </div>
          </div>

          <div className="shadow-custom-sd rounded-lg text-[#525252] max-w-[420px] lg:min-w-[420px] p-5">
            <div className="flex flex-col lg:flex-row gap-2">
              <img
                src={imageUrl}
                alt={event.title}
                className="w-full max-w-[175px] max-h-[140px] object-cover"
              />
              <div>
                <p className="text-xl font-medium">{event.title}</p>
                <p className="text-xs mt-3">
                  {moment(event_date).format("MMM D, YYYY")}
                </p>
                <p className="text-xs mt-3">
                  {moment(event_time, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-xs mt-3">
                  {address && address !== "null" ? address : ""}
                  {city && city !== "null" ? ", " + city : ""}
                  {state && state !== "null" ? ", " + state : ""}
                </p>
              </div>
            </div>

            <p className="text-2xl font-semibold mt-8">Ticket Order Summary</p>
            <div className="grid grid-cols-2 gap-y-3 mt-4 font-medium text-base">
              <p>{economyCount}x Economy Tickets</p>
              <p>${(economyCount * economyPrice).toFixed(2)}</p>

              <p>{vipCount}x VIP Tickets</p>
              <p>${(vipCount * vipPrice).toFixed(2)}</p>

              <p>{vvipCount}x VVIP Tickets</p>
              <p>${(vvipCount * vvipPrice).toFixed(2)}</p>

              <p>Tax</p>
              <p>${tax.toFixed(2)}</p>

              <p>Total</p>
              <p>${grandTotal.toFixed(2)}</p>
            </div>

            <p className="text-sm font-medium mt-8">Have a coupon?</p>
            <div className="relative w-full mt-5 shadow-custom-sd rounded-lg">
              <input
                type="text"
                placeholder="Enter Coupon"
                className="rounded-lg outline-none w-full p-5 text-xs"
              />
              <CustomButton
                text="Apply"
                bg_color="bg-primary"
                hover_bg_color={``}
                hover_text_color={``}
                text_color="text-white"
                other_classes="absolute right-3 top-2 font-medium"
                onClick={() =>
                  toast.error("Coupons are not applicable for now")
                }
              />
            </div>
            <CustomButton
              type="submit"
              text="Proceed to Payment"
              bg_color="bg-primary"
              text_color="text-white"
              hover_text_color={``}
              hover_bg_color="bg-cyan-400"
              other_classes="mx-auto flex flex-row justify-center items-center mt-5"
              isLoading={ticketBookingLoader}
              loaderColor="text-white"
              onClick={() => {
                if (paymentPayload?.name === "" || paymentPayload?.email === "" || paymentPayload?.phone === "") {
                  toast.error("Please Fill all the fields")
                } else if (paymentPayload?.stripePaymentMethod === "") {
                  toast.error("Please select a payment method to continue")
                } else {
                  onSubmitHandler()
                }
              }}
            />
          </div>
        </div>
      )}

      {bookingStatusPage && (
        <div className="flex flex-col gap-7 items-center justify-center text-center shadow-custom-sd rounded-md mx-5 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] mt-8 mb-20 p-10 md:p-16 text-[#525252]">
          <h1 className="text-primary text-3xl md:text-5xl font-semibold">
            Congratulations
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Your booking has been successful
          </p>
          <CustomButton
            text="Go to Home"
            bg_color="bg-primary"
            hover_bg_color={``}
            text_color="text-white"
            hover_text_color={``}
            other_classes="mx-auto flex flex-row justify-center items-center mt-3"
            onClick={() => navigate("/")}
          />
          <div className="shadow-custom-sd max-w-[531px] py-10 px-6 my-8 text-sm md:text-base font-medium text-[#8f8f8f]">
            <span className="flex justify-center">
              Ticket sent to&nbsp;
              <span className="text-primary">
                {paymentPayload?.email !== "" ? paymentPayload?.email : "--"}
              </span>
            </span>
            <p>
              You will receive your e-tickets by email and a reminder before the
              event starts.
            </p>
          </div>
        </div>
      )}

      <EventFilter />
      <Subscribe />
    </section>
  );
};

export default TicketDetail;
