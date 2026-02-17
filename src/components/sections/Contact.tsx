


export default function Contact() {
  const address = "11440 W Bernardo Ct Suite 300, San Diego, CA 92127";

  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="w-full bg-[#F7F6FB] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-[#443A77] mb-6">
            Contact Us
          </h2>

          <div className="space-y-6 text-[#443A77]">
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>11440 W Bernardo Ct Suite 300</p>
              <p>San Diego, CA 92127</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg"> Available Hours</h3>
              <p>Call or email for appointment scheduling</p>
              <p>Weekdays only</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>(858) 673-5300</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>kathie.sweeten@btpsych.hush.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
