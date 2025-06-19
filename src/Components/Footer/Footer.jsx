import { Armchair, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer>
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              <div className="logo_wrapper">
                <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
                  <Armchair size="2rem" color="#029fae" /> Comforty
                </Link>
              </div>
              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                At Comforty, we believe a great chair does more than just provide a place to sit — it enhances your
                comfort, supports your posture, and complements your lifestyle. Our chairs are thoughtfully designed
                with a balance of form and function.
              </p>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">category</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    sofa
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    armchair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    wing chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    desk chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    wooden chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    park bench
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">support</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    help & support
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    tearms & condition
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize hover:opacity-50">
                    help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="newletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">newsletter</h3>

              <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your Email...."
                  className="max-w-[260px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                />
                <button
                  className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[9a9caa] font-normal font-inter ">
                @ 2025 Blogy - Designed & Develop <span className="text-[#272343]">Lifeonthecode</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
