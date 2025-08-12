function ContactSection() {
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        Get In Touch
      </h2>
      <div className="my-6 flex flex-row flex-wrap items-center justify-center gap-8">
        <a
          href="https://github.com/sukelully"
          className="flex items-center text-lg"
          target="_blank"
          rel="noopener noreferrer"
          aria-labelledby="githubLabel"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
          <span id="githubLabel" className="pl-2">
            GitHub
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sukelully/"
          className="flex items-center text-lg"
          target="_blank"
          rel="noopener noreferrer"
          aria-labelledby="linkedinLabel"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          <span id="linkedinLabel" className="pl-2">
            LinkedIn
          </span>
        </a>
      </div>
      <form
        action="https://formsubmit.co/luke@sukelully.dev"
        method="POST"
        className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
      >
        <label htmlFor="subject">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          minLength={3}
          maxLength={60}
          placeholder="Your email"
          aria-label="Enter the subject of your message"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black shadow-md sm:text-3xl dark:border-none dark:bg-white"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          aria-label="Enter the content of your message"
          placeholder="Your message"
          required
          className="h-60 w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black shadow-md sm:text-3xl dark:border-none dark:bg-white"
        ></textarea>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover mx-auto w-48 cursor-pointer rounded-xl p-3 font-bold text-white shadow-lg transition duration-300 active:bg-teal-500 dark:border-none"
          aria-label="Submit your message"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
