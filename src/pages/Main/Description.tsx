// import smokeGif from "@/assets/description/smoke.gif";
import Smoke from "@/assets/description/smoke.mp4";
import CloudLeft1 from "@/assets/description/cl1.png";
import CloudLeft2 from "@/assets/description/cl2.png";
import CloudLeft3 from "@/assets/description/cl3.png";
import CloudLeft4 from "@/assets/description/cl4.png";
import CloudRight1 from "@/assets/description/cr1.png";
import CloudRight2 from "@/assets/description/cr2.png";
import CloudRight3 from "@/assets/description/cr3.png";
import useIsPhone from "@/utils/hooks/useIsPhone";
import { Arweave, Berachain, OrangeDao } from "./DescriptionIcon";

export default function Description() {
    const isPhone = useIsPhone();

    return (
        <article className="main-description">
            <div className="main-description-content">
                <section>
                    <div className="top">
                        <div className="action">
                            <a
                                href={import.meta.env.VITE_TWITTER}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 33 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="1.2915"
                                        y="0.5"
                                        width="31"
                                        height="31"
                                        rx="15.5"
                                    />
                                    <rect
                                        x="1.2915"
                                        y="0.5"
                                        width="31"
                                        height="31"
                                        rx="15.5"
                                    />
                                    <g clipPath="url(#clip0_115_48)">
                                        <path d="M22.5422 6.96112H25.6089L18.9089 14.6195L26.7914 25.0386H20.6197L15.7864 18.7186L10.2547 25.0386H7.18638L14.353 16.847L6.79138 6.96195H13.1197L17.4889 12.7386L22.5422 6.96112ZM21.4664 23.2036H23.1655L12.1964 8.70029H10.373L21.4664 23.2036Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_115_48">
                                            <rect
                                                width="20"
                                                height="20"
                                                transform="translate(6.7915 6)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Follow The Twitter
                            </a>
                            <a
                                className="discord"
                                href={import.meta.env.VITE_DISCORD}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 33 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.791504"
                                        width="32"
                                        height="32"
                                        rx="16"
                                    />
                                    <path d="M23.8191 9.62797C22.5018 9.02549 21.1028 8.58639 19.6425 8.34131C19.4587 8.65787 19.2545 9.08675 19.1115 9.42374C17.5583 9.19908 16.0164 9.19908 14.4846 9.42374C14.3416 9.08675 14.1272 8.65787 13.9536 8.34131C12.4831 8.58639 11.0842 9.02549 9.77605 9.62797C7.13125 13.5288 6.41644 17.3377 6.77384 21.0956C8.53023 22.372 10.2254 23.1481 11.8909 23.6587C12.2994 23.1073 12.667 22.515 12.9835 21.8921C12.3811 21.6674 11.8092 21.3917 11.2578 21.0649C11.4007 20.9629 11.5437 20.8505 11.6765 20.7382C15.0054 22.2597 18.6112 22.2597 21.8993 20.7382C22.0422 20.8505 22.175 20.9629 22.318 21.0649C21.7665 21.3917 21.1947 21.6674 20.5922 21.8921C20.9088 22.515 21.2764 23.1073 21.6848 23.6587C23.3493 23.1481 25.0547 22.372 26.8019 21.0956C27.2409 16.7455 26.1064 12.9672 23.8191 9.62797ZM13.4431 18.7775C12.4423 18.7775 11.6254 17.8687 11.6254 16.7557C11.6254 15.6426 12.4219 14.7338 13.4431 14.7338C14.454 14.7338 15.2811 15.6426 15.2607 16.7557C15.2607 17.8687 14.454 18.7775 13.4431 18.7775ZM20.1531 18.7775C19.1523 18.7775 18.3344 17.8687 18.3344 16.7557C18.3344 15.6426 19.1319 14.7338 20.1531 14.7338C21.1641 14.7338 21.9912 15.6426 21.9707 16.7557C21.9707 17.8687 21.1743 18.7775 20.1531 18.7775Z" />
                                </svg>
                                Join Our Discord
                            </a>
                        </div>
                        <span>
                            Join the PuffPaw community on discord and twitter to
                            be part of the leading DEPIN project on Berachain!
                        </span>
                    </div>
                    <div className="img">
                        {/* <img alt="" src={Smoke} /> */}
                        <video
                            src={Smoke}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="smoke-animation"
                        />
                    </div>
                </section>
                <section>
                    <div className="title">how it works</div>
                    <div className="content">
                        The "<span>Vape 2 Earn</span>" mechanism represents an
                        innovative fusion of the vaping culture with the
                        burgeoning field of cryptocurrency and blockchain
                        technology. At its core, this mechanism incentivizes
                        users to engage in vaping activities in a way that earns
                        them cryptocurrency rewards.
                    </div>
                </section>
                <section>
                    <div className="title">Proud to be backed by</div>
                    <div className="content">
                        <OrangeDao />
                        <Berachain />
                        <Arweave />
                    </div>
                </section>
            </div>
            {isPhone || (
                <div className="clouds">
                    <img className="cl1" alt="" src={CloudLeft1} />
                    <img className="cl2" alt="" src={CloudLeft2} />
                    <img className="cl3" alt="" src={CloudLeft3} />
                    <img className="cl4" alt="" src={CloudLeft4} />
                    <img className="cr1" alt="" src={CloudRight1} />
                    <img className="cr2" alt="" src={CloudRight2} />
                    <img className="cr3" alt="" src={CloudRight3} />
                </div>
            )}
        </article>
    );
}
