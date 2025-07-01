import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

export const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    const formdata = new FormData(form.current);
    console.log(formdata);
    const email = formdata.get("email");
    const name = formdata.get("name");
    const message = formdata.get("message");
    const formDetails = { email, name, message };
    console.log(formDetails);

    // Email Js

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon!",
            icon: "success",
            background: "#000",
            color: "#fff",
            iconColor: "#8A2BE2",
            confirmButtonColor: "#8A2BE2",
            confirmButtonText: "Got It!",
            showClass: {
              popup: "swal2-show", // Default SweetAlert2 show animation
              backdrop: "swal2-backdrop-show",
            },
            hideClass: {
              popup: "swal2-hide", // Default SweetAlert2 hide animation
              backdrop: "swal2-backdrop-hide",
            },
            customClass: {
              container: "swal-dark-container",
              popup: "swal2-popup-custom",
            },
            draggable: true,
            timer: 5000,
            timerProgressBar: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again.",
            icon: "error",
            background: "#000",
            confirmButtonColor: "#8A2BE2",
          });
        }
      );
  };
  return (
    <div className="  container mx-auto">
      <section>
        <div className="hero  ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left space-y-4">
              <h5 className="md:text-base font-bold text-main-color">
                Enhance your web presence with my expertise
              </h5>
              <h1 className=" text-2xl sm:text-4xl md:text-5xl  lg:text-6xl/18 font-semibold text-[#8A2BE2]">
                Need a Website? <br /> Let’s Talk.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                I build fast, responsive, and beautiful websites using React,
                Tailwind CSS, and modern tools. Reach out and let’s make your
                project a success.
              </p>
            </div>

            <div className="card  w-full max-w-sm shrink-0 shadow-2xl ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="card-body">
                  <fieldset className="fieldset">
                    {/* Email */}
                    <div className="mb-4">
                      <label className="label text-white mb-2">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="input bg-gray-800"
                        placeholder="Email"
                      />
                    </div>
                    {/* Name */}
                    <div className="mb-4">
                      <label className="label text-white  mb-2">Name</label>
                      <input
                        required
                        name="name"
                        type="text
          "
                        className="input bg-gray-800 "
                        placeholder="Enter Your Name"
                      />
                    </div>
                    {/* Massage */}
                    <div className="mb-4">
                      <label className="label text-white  mb-2">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        className="textarea bg-gray-800 text-white"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn bg-[#8A2BE2] mt-4 border-none
            text-white"
                    >
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
