import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import day21 from "../assets/dayimages/2-1.jpg";
import day22 from "../assets/dayimages/2-2.jpg";
import day23 from "../assets/dayimages/2-3.jpg";
import day24 from "../assets/dayimages/2-4.jpg";
import day25 from "../assets/dayimages/2-5.jpg";
import day26 from "../assets/dayimages/2-6.jpg";
import day27 from "../assets/dayimages/2-7.jpg";
import day28 from "../assets/dayimages/2-8.jpg";
import "./day.css";

const Day2 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <div className="day-content">
          <div className="text-right">
            <h1>City of Bays: Subic Bay</h1>
            <hr />
            <br />
            <p>
              Subic Bay, located on the western coast of Luzon in the Philippines, is a picturesque and historically rich area known for its stunning natural beauty and strategic location. Once a bustling U.S. naval base, Subic Bay has transformed into a thriving commercial, industrial, and tourist hub, offering a unique blend of modern development and scenic landscapes. Whether you're here to relax by the beach or explore its history, Subic offers something for everyone.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day21} alt="Subic Bay View 1" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              The museum gallery dedicated to the history of Subic Bay offers a fascinating glimpse into the area's past. From its early days as a hub for maritime trade to its transformation into a U.S. naval base, the exhibit showcases pivotal moments that shaped the region, including artifacts from World War II and the American occupation. It’s a journey through time that sheds light on Subic’s evolution and significance to the Philippines and the world.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day22} alt="Subic Bay Streets" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              This beautiful scene showcases the calm waters of Subic Bay, framed by tall pine trees along the shore. The gentle waves shimmer under the clear blue sky, creating a peaceful and refreshing atmosphere. It's hard not to stop and admire the quiet beauty of this part of the bay, making it the perfect spot to take a moment and reflect on the natural wonders of the area.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day23} alt="Subic Bay Beach" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              The sandy beaches of Subic Bay are a perfect getaway for those looking for a slice of paradise. Here, you’ll find clear waters and fine sand, perfect for a day of relaxation under the sun. The beach offers a stunning view of the horizon, where the sky meets the sea, making it a favorite spot for both locals and tourists.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day24} alt="Subic Bay Port" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              The Subic Bay Exhibits and Convention Center (SBECC) is a striking building that showcases the region's rich history and culture. It stands as a modern landmark within Subic Bay, serving as a venue for various exhibits, conventions, and events. Whether it’s a cultural exhibition or a trade show, the center provides visitors with a window into the diverse and dynamic heritage of this area.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day25} alt="Subic Bay Freeport" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              This image captures the bustling scene of Subic Bay’s port, where ships are docked and loading/unloading operations take place. The calm waters reflect the clear blue sky, while cargo ships and container terminals serve as a reminder of Subic Bay’s vital role as a maritime hub. It’s a blend of commerce and natural beauty, with the bustling port acting as the pulse of the bay area.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day26} alt="Subic Bay Historical Site" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              This photo features the iconic “Subic Bay” letter statue, a popular spot for tourists to snap photos and enjoy the view. The statue, placed at a scenic lookout, stands as a modern symbol of the city’s transformation, where a once-military town is now thriving as a freeport and tourist destination. The panoramic view of the bay in the background makes it the perfect backdrop for your Subic memories.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day27} alt="Subic Bay Adventure Park" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              Here, we see a sign urging visitors not to litter, a simple yet powerful reminder of the importance of preserving the natural beauty of Subic Bay. The area is home to lush green parks, adventure trails, and wildlife reserves. It’s a testament to Subic’s commitment to environmental conservation and sustainable tourism, ensuring that future generations can also enjoy the pristine landscapes that the bay offers.
            </p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day28} alt="Subic Bay Sunset" effect="blur" height="auto" width="100%" />
            <p className="image-description">
              As the sun sets over Subic Bay, the sky reflects vibrant colors that create a breathtaking view. The calm waters of the bay mirror the rich hues of the sunset, giving the landscape a serene and almost magical quality. It’s moments like these that make Subic Bay a special place — where nature, history, and modern development come together to offer an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day2;
