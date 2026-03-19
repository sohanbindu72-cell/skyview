"use server";

export async function submitBooking(data) {
  // This code runs securely on the Node.js Server in Next.js
  
  console.log("=== NEW BOOKING RECEIVED ===");
  console.log("Customer:", data.firstName, data.lastName);
  console.log("Email:", data.email, "Phone:", data.phone);
  console.log("Flight:", data.flightNumber, "Airport:", data.airport);
  console.log("Service:", data.serviceType, "- Passengers:", data.passengers);
  console.log("Total Price: USD $", data.totalPrice);
  
  if (data.specialRequests) {
    console.log("Special Requests:", data.specialRequests);
  }

  // TODO: Add database saving logic (e.g. Prisma or Supabase),
  // OR external API integration (e.g., Stripe, Resend for emails)
  
  // Simulate network latency / database call
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    success: true,
    message: "Booking received successfully",
    bookingId: "BKG-" + Math.random().toString(36).substring(2, 9).toUpperCase()
  };
}
