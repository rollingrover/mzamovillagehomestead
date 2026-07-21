// Fully static — no client JS, renders in initial HTML so booking intent
// (phone/WhatsApp/location) is crawlable even before hydration.
// Email is intentionally commented out below — see TODO.
export default function BookingInfo() {
  return (
    <section id="booking-info" className="max-w-6xl mx-auto px-6 pt-14">
      <div className="bg-white border border-amber-100 rounded-2xl shadow-warm p-8">
        <h2 className="text-2xl font-bold text-zulu-brown-dark mb-2">Book or Enquire</h2>
        <p className="text-zulu-text leading-relaxed mb-4">
          Contact Mzamo&apos;s Cultural Village &amp; Homestead directly to arrange your visit, cultural experience, or group booking in
          Hluhluwe, KwaZulu-Natal.
        </p>
        <ul className="space-y-1 text-zulu-text">
          <li>
            Phone / WhatsApp:{" "}
            <a href="tel:+27665845674" className="text-zulu-ochre-text font-medium hover:underline">
              +27 66 584 5674
            </a>
          </li>
          {/* TODO: email temporarily disabled at owner's request — re-enable once a
              confirmed business email address is provided. Do not delete.
          <li>
            Email:{" "}
            <a href="mailto:info@mzamovillagehomestead.co.za" className="text-zulu-ochre-text font-medium hover:underline">
              info@mzamovillagehomestead.co.za
            </a>
          </li>
          */}
          <li>Location: Hluhluwe, KwaZulu-Natal, South Africa</li>
        </ul>
        <p className="text-zulu-text/60 text-sm mt-4">Bookings handled directly. No platform fees.</p>
      </div>
    </section>
  );
}
