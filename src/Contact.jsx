export default function Contact() {
  return (
    <>
    <p className="text-center display-3 text-secondary fw-bold">Contact Us</p>
    <main className="contact-main">
      <div>
        <i className="bi-phone-vibrate contact-ico"></i>
        <a href="tel: +2348118325902" className="contact">Voicemail
        </a>
        <br />
      </div>

      <div>
        <i className="bi-mailbox2 text-danger contact-ico"></i>
        <a href="mailto:babatundeibrahim436@gmail.com" className="contact">
          Send Email
        </a>
        <br />
      </div>

      <div>
        <i className="bi-facebook text-primary contact-ico"></i>
        <a href="https://www.facebook.com/ibrahim.isiaq.775" className="contact">
          Send to Facebook
        </a>
        <br />
      </div>

      <div>
        <i className="bi-whatsapp text-success contact-ico"></i>
        <a
          href="https://api.whatsapp.com/send?phone=+2348118325902"
          className="contact"
        >
          Send to WhatsApp
        </a>
        <br />
      </div>

      <div>
        <i className="bi-github contact-ico"></i>
        <a href="https://github.com/khalil-coder/random-advice" className="contact">
          Push Issue to Github
        </a>
      </div>
    </main>
    </>
  );
}
