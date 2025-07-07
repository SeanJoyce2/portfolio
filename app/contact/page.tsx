import React from "react";

const ContactPage = () => {
  return (
    <main className="max-w-lg mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold text-primary mb-2">Contact</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Feel free to reach out via the form below. I’ll get back to you as soon
        as possible!
      </p>
      <form
        className="w-full bg-card/80 backdrop-blur-md rounded-2xl shadow-lg border border-primary/30 p-6 flex flex-col gap-4"
        action="mailto:your@email.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg shadow hover:bg-primary/90 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
