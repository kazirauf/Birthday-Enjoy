
const Footer = () => {
    return (
        <div className="">
            <footer className="footer text-white p-10 bg-[#88d4f2] text-lg font-bold lg:w-full md:w-full w-[500px]">
  <nav>
    <header className="footer-title text-white">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-white">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title text-white">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-lg text-[#f06633]">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-[#feb9cc] py-1 text-white font-bold absolute top-0 right-0 rounded-l-none">Send</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;