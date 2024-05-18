import { useState } from "react";
import Destination_Data from "../src/utils/data";

export default function App() {
  //Data Json dari Destination_Data
  const [data,setData] = useState(Destination_Data[0]);
  const [isLoading,setIsLoading] = useState(false);

  // Fungsi untuk merender setiap item

  const renderItems = () => {
    // Ambil setiap key (URL) dalam objek data
    return Object.keys(data).map((url, index) => {
      // Ambil array objek yang terkait dengan URL
      const items = data[url];

      // Render setiap item dalam array
      return items.map((item, idx) => (
        <div key={`${index}-${idx}`} className="item-container">
          <h3>{item.title}</h3>
          <img src={item.img} alt="" width="300px"/>
          <p>{item.content}</p>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>URL:</strong>{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        </div>
      ));
    });
  };
  return(
          <>
          <section>
            <h1 style={{textAlign:"center", fontSize:"50px"}}>List Destinasi Pariwisata Bali</h1>
            <div style={{textAlign:"center", fontSize:'30px'}}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <button
                style={{fontSize:'20px', padding:"10px"}}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setData(Destination_Data[0]);
                  },2000);
                }}
              >
                Refresh
              </button>
            )}
            </div>
            <div className="data-container">{renderItems()}
            </div>
          </section>
          </>
        )}
