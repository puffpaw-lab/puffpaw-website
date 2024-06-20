import image1 from "@/assets/mint/1.jpg";
import image3 from "@/assets/mint/3.jpg";
import image4 from "@/assets/mint/4.jpg";
import image8 from "@/assets/mint/8.jpg";

export default function Info() {
  return (
    <div className="mint-info">
      <div className="title">Creatures of the Night</div>
      <div className="images">
        <div className="image-1">
          <img alt="" src={image3} />
        </div>
        <div className="image">
          <img alt="" src={image1} />
        </div>
        <div className="image">
          <img alt="" src={image4} />
        </div>
        <div className="image">
          <img alt="" src={image8} />
        </div>
      </div>
      <div className="description">
        <p>
          We’ll be minting phase one in a bit. Stay tuned, follow the twitter.
        </p>
        <p>
          Renowned digital artist Javier Tomeo unveils "Creatures of the Night,"
          his groundbreaking NFT collection on the Solana blockchain, marking a
          significant evolution in his artistic voyage. Known for his
          captivating exhibitions across the globe—from the vibrant heart of
          Seoul's K Museum of Contemporary Art to the dynamic Art Basel events
          in Miami—Tomeo has consistently pushed the boundaries of digital art.
          His journey has taken him through explorations of artificial
          intelligence in Rome, to immersive experiences in digital and physical
          spaces in New York and Los Angeles, culminating in a collection that
          embodies the spirit of nocturnal mysteries.
        </p>
      </div>
    </div>
  );
}
